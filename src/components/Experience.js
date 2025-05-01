import clawLaw from "../Assets/gptclaw.PNG";
import rablo from "../Assets/rablo.png";
import dezhub from "../Assets/dezhub.png";

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
              src={clawLaw}
              style={{ color: "transparent" }}
            ></img>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Fullstack developer
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              <li className="text-base text-normal">
                Full-Stack Development Intern.
              </li>
              <li className="text-base text-normal">
                Managed and optimized the backend server.
              </li>
              <li className="text-base text-normal">
                Implemented new features and enhancements.
              </li>
              <li className="text-base text-normal">
                Developed UI components based on Figma designs.
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
              src={rablo}
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
              src={dezhub}
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
      </div>
    </section>
  );
};

export default Experience;
