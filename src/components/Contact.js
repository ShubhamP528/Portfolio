import { useState } from "react";

const Contact = () => {
  const [Numcopied, setNumCopied] = useState(false);
  const [Emcopied, setEmCopied] = useState(false);

  const NumhandleCopy = async (textToCopy) => {
    try {
      // Use the Clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      setNumCopied(true);
      setTimeout(() => {
        setNumCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const EmhandleCopy = async (textToCopy) => {
    try {
      // Use the Clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      setEmCopied(true);
      setTimeout(() => {
        setEmCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="contact">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">Get in touch</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            "What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect."
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 md:h-8 md:w-8"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                shubham528prajapati@gmail.com
              </h2>
              <button
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8"
                onClick={() => EmhandleCopy("shubham528prajapati@gmail.com")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                {Emcopied && (
                  <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
                    Copied!
                  </span>
                )}
              </button>
            </div>
            <div className="flex items-center gap-4 md:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 md:h-8 md:w-8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>

              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                +919027640571
              </h2>
              <button
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8"
                onClick={() => NumhandleCopy("+919027640571")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                {Numcopied && (
                  <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-normal text-base text-center">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ShubhamP528"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/shubham14481056"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokewinecap="round"
                  strokewinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shubham-prajapati-a3b635228"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokewinecap="round"
                  strokewinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path
                    d="M14.2 19.6H1.7c-.4 0-.8.3-.8.8v37.4c0 .4.3.8.8.8h12.4c.4 0 .8-.3.8-.8V20.3c0-.4-.3-.7-.7-.7zM13.4 57H2.5V21.1h10.9V57zM8 1.5C3.5 1.5.2 4.5.2 8.7s3.2 7.2 7.6 7.2H8c4.5 0 7.8-3 7.8-7.2-.2-4.2-3.3-7.2-7.8-7.2zm0 13c-3.7 0-6.2-2.4-6.2-5.7C1.8 5.4 4.3 3 8 3c3.6 0 6.1 2.3 6.2 5.7 0 3.4-2.5 5.8-6.2 5.8zM44.7 18.7c-5.4 0-8.5 2.3-10.5 4.6v-3c0-.4-.3-.8-.8-.8H21c-.2 0-.4.1-.5.2-.1.1-.2.3-.2.6.2 3.4 0 37 0 37.4 0 .2.1.4.2.5.1.1.3.2.5.2h12.4c.4 0 .8-.3.8-.8V36.8c0-1.3.1-2.2.4-2.8.5-1.2 2-4.1 5.7-4.1s5.5 2.6 5.5 7.7v20c0 .4.3.8.8.8H59c.4 0 .8-.3.8-.8V36.3c0-11-5.7-17.6-15.1-17.6zM58.2 57H47.3V37.7c0-5.9-2.5-9.2-7-9.2-3.2 0-5.8 1.9-7.1 5-.3.8-.5 1.8-.5 3.3V57H21.8c0-4.8.1-30.3 0-35.9h10.9v4.3c-.1.2-.1.5.1.7.1.2.4.4.7.4.4 0 .7-.3.7-.6 1.8-2.7 4.6-5.7 10.5-5.7 8.6 0 13.6 5.9 13.6 16.1V57z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
