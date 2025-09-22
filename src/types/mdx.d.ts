declare module '*.mdx' {
  import React from 'react';
  
  export const frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    client?: string;
    industry?: string;
    [key: string]: any;
  };
  
  const Content: React.ComponentType;
  export default Content;
}