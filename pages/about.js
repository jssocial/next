import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="about-page">
      <Nav />
      <section>
        <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              {/*  This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0  */}
              <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                  <div className="mx-auto text-base max-w-prose lg:max-w-none">
                    <p className="text-lg sitka leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                      MEET WITH THE MENTOR
                    </p>
                    <h1 className="neue-bold tracking-normal mt-2 mb-8 text-4xl leading-8 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                      Jae Lee
                    </h1>
                  </div>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 neue">
                    <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
                      <svg
                        className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                      >
                        <defs>
                          <pattern
                            id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="4"
                              height="4"
                              className="text-gray-200"
                              fill="currentColor"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="404"
                          height="384"
                          fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                        />
                      </svg>
                      <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                        <figure>
                          <div className="relative pb-7/12 lg:pb-0">
                            <img
                              src="https://i.ibb.co/vw3ZM9t/jae.jpg"
                              className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                              alt="Jae_Lee_Pic"
                            />
                          </div>
                          <figcaption className="flex mt-3 text-sm text-gray-500">
                            {/* Heroicon name: camera */}
                            <svg
                              className="flex-none w-5 h-5 mr-2 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Photograph taken by Bootcamp Student James
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="max-w-prose mx-auto lg:max-w-none">
                        <p className="mb-5 body-text-color">
                          Meet with our Mentor, Founder and CEO, <strong>Jae Lee.</strong> He
                          offers consultations and best practices on the way to
                          becoming a fully developed full stack developer. He
                          gives the most practical ways to approach to the
                          problems, and provides paths so a person be able to
                          think themselves out of the problems.
                        </p>
                      </div>
                      <div className="prose body-text-color mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <p className="pt-6 body-text-color">
                          Compared to the other practices, the way Jae Lee goes
                          with his teaching is that, he prompts the student to
                          learn the material on his own, so he will get used to
                          struggle, debugging, and finding his own way out of
                          problems. This is the essential niche of being a
                          programmer.
                        </p>
                        <p className="pt-6 body-text-color">
                          These days the React is on the rise and JavaScript is
                          becoming more and more popular. While knowing that it
                          isn't simply easy for a fresh beginner's to get a good
                          grip on them easily, especially for people without a
                          background in CS degree. It takes time to do things,
                          and Jae Lee knows that, as himself being a Self-Taught
                          dev who walked the walk, he is more mature with his
                          advices and practices to the beginners and more down
                          to earth.
                        </p>
                        <p className="pt-6 body-text-color">
                          He also believes in working together with teams,
                          working with %20 help and %80 student effort is mostly
                          the best way to learning, however providing the good
                          and correct direction, and showing the pragmatical
                          path is essential to learning and improvement in
                          coding journey. He created a Discord group where
                          Programmers can interact with each other and help each
                          other out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
