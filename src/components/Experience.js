const Experience = () => {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50" id="work">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">Experience</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              alt="Upwork logo"
              loading="lazy"
              width="102"
              height="28"
              decoding="async"
              data-nimg="1"
              className="max-w-[120px]"
              src="https://media.licdn.com/dms/image/D4D0BAQFWL-HNkd25Iw/company-logo_200_200/0/1719257435507/claw_lawyers_logo?e=1727913600&v=beta&t=M2zEKzRgcOZ5cqO3GHWBVdyzuncoNvgw0S2X6Fc3Xpg"
              style={{ color: "transparent" }}
            ></img>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Fullstack developer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              <li className="text-normal text-base">
                Working as Fullstack intern.
              </li>
              <li className="text-normal text-base">
                Handle the while backend server.
              </li>
              <li className="text-normal text-base">Adding new features.</li>
              <li className="text-normal text-base">
                Create UI with the help of figma design
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">
              May 2024 - Present
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              alt="Upwork logo"
              loading="lazy"
              width="102"
              height="28"
              decoding="async"
              data-nimg="1"
              className="max-w-[120px]"
              src="https://rablo.in/wp-content/uploads/elementor/thumbs/Untitled_design__2_-removebg-preview-e1672118546472-q10x0nqhb6e977wbz7q2tgapsuip6f88d5713gnr5o.png"
              style={{ color: "transparent" }}
            ></img>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Backend developer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              <li className="text-normal text-base">
                Worked as backend intern.
              </li>
              <li className="text-normal text-base">
                Test the existing APIs using postman and fix the error .
              </li>
              <li className="text-normal text-base">
                I am backend team lead here
              </li>
              <li className="text-normal text-base">
                I make documents for APIs
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">
              Feb 2024 - April 2024
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              alt="Upwork logo"
              loading="lazy"
              width="102"
              height="28"
              decoding="async"
              data-nimg="1"
              className="max-w-[120px]"
              src="https://media.licdn.com/dms/image/C510BAQFlprn4dfmeiw/company-logo_200_200/0/1630618345519/dezhabdesignandconstruction_logo?e=1723075200&v=beta&t=nPkOXYybnR4EdvnUERZdROTgp-m9QRaagkBMj-iuFAA"
              style={{ color: "transparent" }}
            ></img>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Backend developer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              <li className="text-normal text-base">
                Worked as backend intern.
              </li>
              <li className="text-normal text-base">
                Using Go lang write logical code for backend to create new
                modules and new go Routines.
              </li>
              <li className="text-normal text-base">
                Create fake user data using fakeit Library for testing backend
                API.
              </li>
              <li className="text-normal text-base">
                Debug the existing code and test
              </li>
              <li className="text-normal text-base">
                Use Database Visualization Tools like Garafana, Prometheus
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">
              Nov 2023 - Jan 2024
            </p>
          </div>
        </div>
        {/* <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              alt="Upwork logo"
              loading="lazy"
              width="102"
              height="28"
              decoding="async"
              data-nimg="1"
              className="max-w-[120px]"
              src="https://sagarshah.dev/_next/static/media/logo-upwork.5f1fcd5c.svg"
              style={{ color: "transparent" }}
            ></img>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Independent Freelancer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              <li className="text-normal text-base">
                Worked for various clients like Fiskil, Shosho, Crowe MacKay
                LLP.
              </li>
              <li className="text-normal text-base">
                Worked with a variety of technologies, including React, Next.js,
                Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase,
                Storybook, Cypress, and others.
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-700 md:text-right">
              Nov 2021 - Present
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
