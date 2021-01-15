import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Programs() {
  return (
    <div className="programs-div">
      <Nav />
      <div className="relative bg-white mt-20">
        <div className="h-56 rounded-full sm:h-72 pl-10 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Support team"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              JS.Social Current Stats
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              We've just started to out journey as a Community and Course. However even though we're at the beginning, we are proud of our students, mentors, and our stats!
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Completed Projects with Groups
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                    3 
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Mentor Count
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                    1 (Jae Lee)
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Students
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                    1 (Mert Efe)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 mt-20">
        <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="text-center">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              PRICEMENTS FOR
            </h2>
            <p className="mt- text-3xl tracking-wide py-4 font-extrabold text-white sm:text-4xl lg:text-5xl">
              JS.SOCIAL MEMBERSHIP PACKAGES
            </p>
            <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
              We've created 3 types of packages for all kinds of developers who
              has different needs and specific instructors, according to their
              level, expertise, and where they currently are in their journey.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6 bg-gray-600 lg:h-2/3" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="tier-hobby"
                          >
                            Regular Membership
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                $
                              </span>
                              <span className="font-extrabold">30</span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">
                              /month
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Weekly Video Lessons.
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Being able to ask questions and communicate on
                              Discord to Other Devs and to Mentors.
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Giving you a basic structure for what to learn and
                              do according to where you are for the best
                              efficient way of improving towards being a dev.
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a
                              href="#"
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-black hover:bg-gray-200"
                              aria-describedby="tier-hobby"
                            >
                              Start your trial
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-300"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-black px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                          Most swift success ratio
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <h3
                          className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                          id="tier-growth"
                        >
                          Premium Membership
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">149</span>
                          </span>
                          <span className="text-2xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Offers all the benefits of Regular & Advanced
                            Membership Packages.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Giving you the chance to join our group projects and
                            assessing you the proper to-do-lists and
                            instructions for your role in project and providing
                            you to see the real world team group simulation with
                            Trello Boards, Group Discord Communication between
                            Team, and interacting with other developers of the
                            project.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Mostly known and accepted as best way of learning by
                            the experienced developers, which is called{' '}
                            <strong>
                              <q>Learning by Doing</q>
                            </strong>
                            , this name suits most for this package.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Heavy use of Github, Git between the team members
                            pushes you to get the most by learning how to use
                            those commands so you can use very easily in the
                            future in your group projects. Which gives you the
                            huge boost of advantage compared to other devs.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Nam ut ipsa nesciunt culpa modi dolor
                          </p>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-black px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                            aria-describedby="tier-growth"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="tier-scale"
                          >
                            Advanced Membership
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                $
                              </span>
                              <span className="font-extrabold">50</span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">
                              /month
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Offers all the benefits of Regular Membership.
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Weekly 1 on 1 Live Session with one of the Mentors
                              of your choosing.
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Mentor giving you a path according to your
                              capabilities, and providing you the correct
                              mindset to adopt while learning. He assists you
                              when you meet a certain obstacle, bug or error via
                              DM if necessary. He gives you which Frameworks to
                              learn and follow according to your unique personal
                              likes, abilities and where you're in your journey.
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a
                              href="#"
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-black hover:bg-gray-200"
                              aria-describedby="tier-scale"
                            >
                              Start your trial
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 text-white pb-4 font-bold">
                  Why should we pick JS.Social over other courses?
                </dt>
                <dd className="mt-2 text-base text-white font-normal tracking-wide">
                  <span>&#8220;</span>JS.Social is different inherently by the
                  way it approaches learning & teaching. The idea here is that
                  the student learns by itself. However as it is more important
                  that the direction of the wind blow than if the wind blows or
                  not, your direction is very important too.<span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-bold text-white pb-4">
                  What you do when there's no Mentor active on Discord?
                </dt>
                <dd className="mt-2 text-base  text-white font-normal tracking-wide">
                  <span>&#8220;</span>You follow the instructions laid by your
                  main mentor at the start of your membership. As a general
                  start point, the Mentor according to your Membership Package
                  draws a Path for you and you're expected to walk the walk and
                  code the code. :)<span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-bold text-white pb-4">
                  How fast I can learn ?
                </dt>
                <dd className="mt-2 text-base text-white font-normal tracking-wide">
                  <span>&#8220;</span>Swiftness varies person to person however,
                  we want you to aim to the highest and not satisfied with just
                  basic bare entry levels. That is why we created Premium
                  Package, so that the students could improve upon just the bare{' '}
                  <q>Basic Entry</q> and become really efficient dev on their
                  own so they could start freelancing or do other projects on
                  their own than just becoming a junior developer.
                  <span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-bold text-white pb-4">
                  How can I approach this course so I can get the most benefit?
                </dt>
                <dd className="mt-2 text-base  text-white font-normal tracking-wide">
                  <span>&#8220;</span>In a mindset of explorer, persistent,
                  stubborn mindset is what you need. The road may get rough,
                  bumpy at times, but if you persist through that hardness you
                  will get confidence in your abilities. Programming is solving
                  problems and generating solutions quickly, to be able to get
                  that level, you will have to persist when you can't.
                  <span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-bold text-white pb-4">
                  What happens after I finish this course?
                </dt>
                <dd className="mt-2 text-base  text-white font-normal tracking-wide">
                  <span>&#8220;</span>There's no end time for the course you can
                  expand your Membership whenever it ends, or upgrade it to a
                  more advanced one. However even if you finish our smallest
                  package for a month, we believe you will have a great value
                  from that course and will be informed in a good level.
                  <span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-bold text-white pb-4">
                  Will Mentors will have with my Portfolio ?
                </dt>
                <dd className="mt-2 text-base  text-white font-normal tracking-wide">
                  <span>&#8220;</span>You will be able to put the Group Projects
                  to your portfolio if you've taken the Premium Membership, and
                  that will make you standout at high level ! Other than that
                  our Front End Mentor Team will inspect your Portfolio and will
                  give you the most realest sector-level headed advice to
                  improve upon.<span>&#8221;</span>
                  <p className="text-gray-700 pt-4 font-bold">
                    <i>Answered by Mentor Jae Lee</i>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
