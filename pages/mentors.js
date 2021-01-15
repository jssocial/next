import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Mentors() {
  return (
    <div className="mentors-div">
      <Nav />

      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
                  Mentors
                </h2>
                <p className="text-xl leading-7 text-gray-500">
                  Some of the mentors we have available to help you and guide
                  you through any obstacles
                </p>
              </div>
              <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                <li>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://d1fdloi71mui9q.cloudfront.net/IF9m5SJaRDugyA6q1DHU_oV7F3wSIgAv8HBKM"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                        <h4>@jaequery</h4>
                        <p className="text-black">Full-stack </p>
                        <p className="text-sm text-gray-500">
                          Node.js, Nest.js, Vue.js, React, Ruby
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                        <h4>@ibanzajoe</h4>
                        <p className="text-black">Front-end</p>
                        <p className="text-sm text-gray-500">
                          HTML, CSS, Vue.js
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://avatars2.githubusercontent.com/u/1021110?s=460&v=4"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                        <h4>@uptownhr</h4>
                        <p className="text-black">Full-stack </p>
                        <p className="text-sm text-gray-500">
                          Node.js, Express.js, Vue.js, MongoDB
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
                  Alumni Network
                </h2>
                <p className="text-xl leading-7 text-gray-500">
                  Some of the vetted top members of our network{' '}
                </p>
              </div>
              <h3 className="text-gray-500">coming soon ...</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
