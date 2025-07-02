import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const AIResponsePreview = ({ content }) => {
  if (!content) return null;

  // Highlight keywords in paragraphs
  const highlightKeywords = (text) => {
    const keywords = ["important", "note", "warning", "tip"];
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    return text.split(regex).map((part, i) =>
      keywords.includes(part.toLowerCase()) ? (
        <span key={i} className="font-bold text-red-600">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-[14px] prose prose-slate dark:prose-invert max-w-none prose-a:text-indigo-600 prose-a:font-medium prose-a:underline prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p({ children }) {
              return (
                <p className="mb-4 leading-6 text-gray-800">
                  {highlightKeywords(children.toString())}
                </p>
              );
            },
            strong({ children }) {
              return (
                <strong className="text-gray-900 font-semibold">
                  {children}
                </strong>
              );
            },
            em({ children }) {
              return <em className="text-gray-600 italic">{children}</em>;
            },
            ul({ children }) {
              return (
                <ul className="list-disc pl-6 space-y-2 my-4 text-gray-800">
                  {children}
                </ul>
              );
            },
            ol({ children }) {
              return (
                <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-800">
                  {children}
                </ol>
              );
            },
            li({ children }) {
              return <li>{children}</li>;
            },
            blockquote({ children }) {
              return (
                <blockquote className="border-l-4 border-blue-300 bg-blue-50 text-blue-800 pl-4 py-2 px-3 italic my-4 rounded">
                  {children}
                </blockquote>
              );
            },
            h1({ children }) {
              return (
                <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-700">
                  {children}
                </h1>
              );
            },
            h2({ children }) {
              return (
                <h2 className="text-2xl font-bold mt-6 mb-3 text-indigo-600">
                  {children}
                </h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-xl font-semibold mt-5 mb-2 text-indigo-500">
                  {children}
                </h3>
              );
            },
            h4({ children }) {
              return (
                <h4 className="text-lg font-medium mt-4 mb-2 text-indigo-500">
                  {children}
                </h4>
              );
            },
            a({ href, children }) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  {children}
                </a>
              );
            },
            table({ children }) {
              return (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-gray-200 divide-y divide-gray-300">
                    {children}
                  </table>
                </div>
              );
            },
            thead({ children }) {
              return <thead className="bg-gray-100">{children}</thead>;
            },
            tbody({ children }) {
              return (
                <tbody className="divide-y divide-gray-200">{children}</tbody>
              );
            },
            tr({ children }) {
              return <tr>{children}</tr>;
            },
            th({ children }) {
              return (
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider bg-gray-50">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                  {children}
                </td>
              );
            },
            hr() {
              return <hr className="my-6 border-gray-200" />;
            },
            img({ src, alt }) {
              return (
                <img
                  src={src}
                  alt={alt}
                  className="my-4 max-w-full rounded shadow-md"
                />
              );
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="my-4">
                  <SyntaxHighlighter
                    style={oneLight}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      fontSize: "13px",
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code
                  className="bg-slate-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default AIResponsePreview;
