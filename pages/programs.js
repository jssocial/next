import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Programs() {
  return (
    <div className="programs-div">
      <Nav />
      <div className="programs">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                Full Stack Developer Path
              </h1>
              <p className="mt-5 text-xl text-gray-500 sm:text-center pt-10">
                We make from Zero to Hero Developers with each course.
                <br /> Join us on this journey, and earn your place amongst the
                developer community.
              </p>
              <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8" />
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    1. Month
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Entrance into the Web Development
                  </p>
                  <p className="mt-12">
                    <span className="text-2xl font-extrabold text-gray-900">
                      Basics
                    </span>
                    <br />
                    <span className="text-base font-medium text-gray-500">
                      (HTML, CSS, GIT)
                    </span>
                  </p>
                  <Link href="/membership">
                    <a className="mt-8 block tracking-widest w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      Start the Journey!
                    </a>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs  font-black tracking-wider text-gray-900 tracking-wide uppercase">
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        Diving into the HTML & CSS and creating your first web
                        design-page.
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        Learning Git commands and learning to push your code
                        into a repo first time.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    2. Month
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Moving into the uncharted territories
                  </p>
                  <p className="mt-6">
                    <span className="text-2xl font-extrabold text-gray-900">
                      Front End
                    </span>
                    <br />
                    <span className="text-base font-medium text-gray-500">
                      ( React, Next.js, Tailwind, Material UI )
                    </span>
                  </p>
                  <Link href="/membership">
                    <a className="mt-8 block tracking-widest w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      Start the Journey!
                    </a>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs  font-black tracking-wider text-gray-900 tracking-wide uppercase">
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        Learning React Framework as the biggest step of your
                        career we don't put our foot into the brakes but as the
                        opposite, we push harder into the territory. We learn
                        Next.js as a framework of React, and learn the biggest
                        styling frameworks of CSS for React. This will be a hell
                        of a month!
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        This is the real breakthrough into the more rich web
                        development. A real step into becoming a real Dev.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    3. Month
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">Becoming the Dev</p>
                  <p className="mt-10">
                    <span className="text-2xl font-extrabold text-gray-900">
                      Backend
                    </span>{' '}
                    <br />
                    <span className="text-base font-medium text-gray-500">
                      ( Nest.js , Express, Postgres and TypeORM )
                    </span>
                  </p>
                  <Link href="/membership">
                    <a className="mt-8 block tracking-widest w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      Start the Journey!
                    </a>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-black tracking-wider text-gray-900 tracking-wide uppercase">
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        In this month we delve right in into the last piece of
                        the Full Stack Web Development and learn to generate a
                        Full Stack Application with completing the Backend
                        Knowledge.
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        By learning these technologies, now we are able to
                        create a Database, create a Server in Backend, learn how
                        to write appropiate code to give API to Frontend, and
                        many exquisite functions of the Backside.
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        As the one of the most useful steps of Web Development,
                        the Backend completes the circle, and within that
                        completion usually Students have a revelation which is
                        that it clicks in their mind to see through between the
                        connections of Web Applications in a full big picture.
                        This helps students to write more efficient and
                        enjoyable code because now they understand what they are
                        actually building and how things are working.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    4. Month & 5. Month
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Going that extra mile into the finish line...
                  </p>

                  <p className="mt-5">
                    <span className="text-2xl font-extrabold text-gray-900">
                      Extra + Projects
                      <br />
                    </span>
                    <span className="text-base font-medium text-gray-500">
                      ( Learning the DevOps - Docker, Linux and Cloud AWS)
                    </span>
                  </p>
                  <Link href="/membership">
                    <a className="mt-8 block tracking-widest w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      Start the Journey!
                    </a>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-black tracking-wider text-gray-900 tracking-wide uppercase">
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        Real-world projects that lets you create a fully
                        functional SaaS application which includes features such
                        as signup, sign-in (SSO), payments using Stripe, admin
                        pages, etc.
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        Learning the most popular and most used DevOps tools and
                        getting that last mile into your knowledge storage to
                        becoming the Full + Full Stack Developer.
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">
                        With the Projects you emphasize what you've learned so
                        far and get it into the real practice where you can see
                        how much you've retained and learned through this
                        course, this is emphasized as the most important step
                        and month by our Mentors.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
