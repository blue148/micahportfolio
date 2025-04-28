import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "./components/ui/Button";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetch(`/caseStudies/${id}.md`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Case study not found");
          }
          return response.text();
        })
        .then((text) => {
          setContent(text);
          setError(false);
        })
        .catch((err) => {
          console.error("Error loading case study:", err);
          setError(true);
        });
    }
  }, [id]);

  // 🔥 NEW: Redirect back to Home if error after a few seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [error, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-start mb-6">
          <Link to="/">
            <Button className="w-32" color="#C7CDA8">
              Back Home
            </Button>
          </Link>
        </div>

        {error ? (
          <div className="text-center mt-16">
            <h1 className="text-4xl font-serif text-[#9ba371] mb-4">Case Study Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn’t find the case study you’re looking for. Redirecting you to Home...
            </p>
            <Link to="/">
              <Button color="#C7CDA8">Return Now</Button>
            </Link>
          </div>
        ) : (
          <div className="prose prose-lg">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;