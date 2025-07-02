import React from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const AIResponsePreview = ({ content }) => {
  return (
    <div
      className="ai-response-preview"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <ReactMarkDown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match) {
              return (
                <div
                  style={{
                    margin: "1em 0",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                    fontSize: "0.9em",
                    overflowX: "auto",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#e1e1e1",
                      padding: "6px 12px",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "0.85em",
                      fontFamily: "monospace",
                      color: "#333",
                      userSelect: "none",
                    }}
                  >
                    Example ({match[1]})
                  </div>
                  <SyntaxHighlighter
                    style={oneLight}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{ margin: 0, padding: "12px" }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              );
            } else {
              // Inline code style
              return (
                <code
                  style={{
                    backgroundColor: "#eee",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "0.9em",
                    fontFamily: "monospace",
                  }}
                  className={className}
                  {...props}
                >
                  {children}
                </code>
              );
            }
          },
        }}
      />
    </div>
  );
};

export default AIResponsePreview;
