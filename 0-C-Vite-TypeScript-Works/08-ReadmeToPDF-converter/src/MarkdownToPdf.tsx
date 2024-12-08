











import React, { useState } from "react";
import { jsPDF } from "jspdf";

const MarkdownToPdf: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  // Function to parse markdown to simple HTML
  const parseMarkdown = (markdown: string): string => {
    return markdown
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^\- (.*$)/gim, "<li>$1</li>")
      .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>")
      .replace(/\n$/gim, "<br>");
  };

  // Function to clean markdown content for PDF (convert to plain text)
  const cleanMarkdownForPdf = (markdown: string): string => {
    return markdown
      .replace(/^### (.*$)/gim, "$1")
      .replace(/^## (.*$)/gim, "$1")
      .replace(/^# (.*$)/gim, "$1")
      .replace(/^\- (.*$)/gim, "• $1")
      .replace(/^\d+\. (.*$)/gim, "$1")
      .replace(/\*\*(.*)\*\*/gim, "$1")
      .replace(/\*(.*)\*/gim, "$1")
      .replace(/\n$/gim, "\n");
  };

  // Convert preview to PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    // Clean the markdown for plain text
    const plainTextContent = cleanMarkdownForPdf(markdown);
    doc.text(plainTextContent, 10, 10);
    doc.save("bappaReadme.pdf");
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>README.md to PDF Converter</h1>
      <p>Paste your markdown content below:</p>

      <textarea
        id="markdown-input"
        placeholder="Enter your README.md content here"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          marginBottom: "20px",
          fontSize: "16px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <h2>Preview</h2>
      <div
        id="preview"
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          background: "#f9f9f9",
          marginBottom: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
      ></div>

      <button
        onClick={downloadPDF}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default MarkdownToPdf;
