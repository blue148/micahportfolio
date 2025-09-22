import React, { useState, useEffect, ReactNode, ComponentType } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

// Define TypeScript interfaces
interface FrontMatter {
  title?: string;
  date?: string;
  client?: string;
  industry?: string;
  [key: string]: any; // For any additional frontmatter properties
}

interface CaseStudy {
  slug: string;
  frontmatter: FrontMatter;
  Component: ComponentType;
}

interface MDXComponentProps {
  children?: ReactNode;
  [key: string]: any;
}

// Type definition for custom MDX components
type MDXComponents = {
  [key: string]: ComponentType<MDXComponentProps>;
};

// Custom components for MDX rendering with Tailwind classes
const components: MDXComponents = {
  h1: (props: MDXComponentProps) => <h1 {...props} className="text-4xl font-bold mb-6 text-gray-900" />,
  h2: (props: MDXComponentProps) => <h2 {...props} className="text-3xl font-semibold mb-4 text-gray-800" />,
  h3: (props: MDXComponentProps) => <h3 {...props} className="text-2xl font-medium mb-3 text-gray-800" />,
  h4: (props: MDXComponentProps) => <h4 {...props} className="text-xl font-medium mb-2 text-gray-700" />,
  h5: (props: MDXComponentProps) => <h5 {...props} className="text-lg font-medium mb-2 text-gray-700" />,
  h6: (props: MDXComponentProps) => <h6 {...props} className="text-base font-medium mb-2 text-gray-700" />,
  p: (props: MDXComponentProps) => <p {...props} className="mb-4 text-gray-600" />,
  ul: (props: MDXComponentProps) => <ul {...props} className="list-disc pl-6 mb-4" />,
  ol: (props: MDXComponentProps) => <ol {...props} className="list-decimal pl-6 mb-4" />,
  li: (props: MDXComponentProps) => <li {...props} className="mb-1" />,
  blockquote: (props: MDXComponentProps) => <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4" />,
  a: (props: MDXComponentProps) => <a {...props} className="text-blue-600 hover:underline" />,
  code: (props: MDXComponentProps) => <code {...props} className="bg-gray-100 rounded p-1 font-mono text-sm" />,
  pre: (props: MDXComponentProps) => <pre {...props} className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 font-mono text-sm" />
};

// Type for the compiled MDX result
type EvaluateMdxResult = ComponentType<{}>;

// Helper function to evaluate compiled MDX
const evaluateMdx = async (code: string): Promise<EvaluateMdxResult> => {
  const scope = { ...runtime };
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope));
};

const CaseStudiesRenderer: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const loadCaseStudies = async (): Promise<void> => {
      try {
        // Get all MDX files in the data/case-studies directory
        const files: string[] = await glob('data/case-studies/**/*.mdx');
        
        const studies: CaseStudy[] = await Promise.all(
          files.map(async (filePath: string) => {
            const content: string = await fs.readFile(filePath, 'utf-8');
            const { data: frontmatter, content: mdxContent } = matter(content);
            
            // Compile MDX to JSX
            const compiled = await compile(mdxContent, {
              outputFormat: 'function-body',
              providerImportSource: '@mdx-js/react'
            });
            
            // This will be a React component
            const Component = await evaluateMdx(String(compiled));
            
            return {
              slug: path.basename(filePath, '.mdx'),
              frontmatter: frontmatter as FrontMatter,
              Component
            };
          })
        );
        
        setCaseStudies(studies);
        if (studies.length > 0) {
          setSelectedStudy(studies[0]);
        }
      } catch (err) {
        console.error('Error loading case studies:', err);
        setError('Failed to load case studies. Check the console for details.');
      } finally {
        setLoading(false);
      }
    };
    
    loadCaseStudies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  if (caseStudies.length === 0) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        No case studies found in the data/case-studies directory.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {/* Sidebar with case study list */}
      <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Case Studies</h2>
        <ul className="space-y-2">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <button
                onClick={() => setSelectedStudy(study)}
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedStudy?.slug === study.slug
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200'
                }`}
              >
                {study.frontmatter.title || study.slug}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Main content area */}
      <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
        {selectedStudy && (
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              {selectedStudy.frontmatter.title}
            </h1>
            {selectedStudy.frontmatter.date && (
              <p className="text-sm text-gray-500 mb-6">
                {new Date(selectedStudy.frontmatter.date).toLocaleDateString()}
              </p>
            )}
            <MDXProvider components={components}>
              <selectedStudy.Component />
            </MDXProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesRenderer;