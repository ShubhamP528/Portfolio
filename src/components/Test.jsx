import React, { useState } from "react";

const CopyToClipboardExample = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Text to copy
    const textToCopy = "Text to copy";

    try {
      // Use the Clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
      {copied && <p>Text copied to clipboard!</p>}
    </div>
  );
};

export default CopyToClipboardExample;
