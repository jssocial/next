import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>

      <Nav />

      <div className="main bg-white">
        <div className="coading bg-white">
          <div className="container">
            <div className="coading-in">
              <div className="coading-left">
                <Link href="#">
                  <a>
                    <img
                      src="https://farm8.staticflickr.com/7435/16286769928_0d978a52a4_z_d.jpg"
                      alt="img"
                    />
                  </a>
                </Link>
              </div>
              <div className="coading-right">
                <p>A membership-based</p>
                <h1>Javascript <br/> Community</h1>
                <div className="talk">
                  <ul className="cleafix">
                    <li className="active">
                      <Link href="#">
                        <a>Join Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>

        <div className="help">
          <div className="container">
            <div className="help-sec">
              <p>What do you get</p>
              <h2>Membership Benefits</h2>
              <ul className="clearfix">
                <li className="active">
                  <Link href="#">
                    <a className="help-in">
                      <figure>
                        <img
                          src="images/icon1.png"
                          alt="icon"
                          width="109"
                          height="109"
                        />
                      </figure>
                      <p>
                        <span>
                          Private
                          <br />
                          Discord Chat
                        </span>
                      </p>
                      <p>
                        Access to our private Discord chat where you can ask and
                        receive Javascript help
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a className="help-in">
                      <figure>
                        <img
                          src="images/icon2.png"
                          alt="icon"
                          width="109"
                          height="109"
                        />
                      </figure>
                      <p>
                        <span>
                          Experienced
                          <br />
                          Developers
                        </span>
                      </p>
                      <p>
                        We have developers with over 100+ years of combined
                        experience
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a className="help-in">
                      <figure>
                        <img
                          src="images/icon3.png"
                          alt="icon"
                          width="109"
                          height="109"
                        />
                      </figure>
                      <p>
                        <span className="teach">100% Real Projects</span>
                      </p>
                      <p>
                        We help you learn with real-world projects that provides
                        you with critical experience
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a className="help-in">
                      <figure>
                        <img
                          src="images/icon4.png"
                          alt="icon"
                          width="109"
                          height="109"
                        />
                      </figure>
                      <p>
                        <span>
                          Speed-up <br />
                          Learning
                        </span>
                      </p>
                      <p>
                        With our help, you can increase your learning speed by
                        up to 200%
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="container">
            <div className="social-sec">
              <p>What is JS.social</p>
              <h2>A network of mentors and students</h2>
              <div className="social-in">
                <div className="social-in-left">
                  <ul className="clearfix">
                    <li>
                      <h3>Code with world-class developers</h3>
                      <p>
                        We are a network of Javascript developers who have real
                        jobs and possess decades of real-life experience who
                        have a passion for helping coders of all ages. Coding
                        can be hard at times, and we are aware of the various
                        roadblocks you may encounter. Let us help and guide you
                        to be your best.
                      </p>
                    </li>
                    <li style={{ marginTop: '60px' }}>
                      <h3>We make learning a life-style</h3>
                      <p>
                        We provide a private Discord room where we either
                        provide support, mentor, and guide our members to
                        further enhanance their abilities. Our aim is to develop
                        you into a 10x Javascript full-stack developer.
                      </p>
                    </li>
                    {/*
                  <li>
                               <h3>Why do we exist?</h3>
                                <p>Other coding help centers take days to respond to inquries and, when they do, the answers aren't well thought out. At JS.social, our experienced developers give assistance that helps in the moment, but also teaches you how to improve in the long run. We care about your success more than anything.</p>
                            </li> 
                  <li style={{marginTop: "32px"}}>
                               <h3>How can I join?</h3>
                                <p>We are currently invite-only. We will reach out to potential members that we feel fitted for the community. If you really want to join, please apply to our waiting list below. </p>
                            </li> */}
                  </ul>
                </div>
                <div className="social-in-right">
                  {/* <iframe width="80%" height="315" src="https://www.youtube.com/embed/Iydpa_gPdes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                  <Link href="#">
                    <a>
                      <img
                        src="https://zdnet2.cbsistatic.com/hub/i/r/2020/02/03/da22e6f2-727a-4e3b-9b8b-72b8fee6829a/resize/1200xauto/bdcb4b46b4dab6df6f0abbe149c55f8b/zoom.jpg"
                        alt="img"
                        width="560"
                        height="600"
                      />
                    </a>
                  </Link>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        <div className="mission" style={{ backgroundColor: 'white' }}>
          <div
            className="container"
            style={{ backgroundColor: 'white', padding: '30px' }}
          >
            <div className="mission-sec">
              <p style={{ paddingLeft: '110px' }}>
                Our mission is to teach through through project-based
                curriculums to craft and hone their skills.”
              </p>
            </div>
            <p style={{ textAlign: 'center', paddingTop: '20px' }}>
              Jae Lee, JS.social mentor
            </p>
          </div>
        </div>
        <div className="testi" style={{ display: 'none' }}>
          <div className="container">
            <div className="testi-sec">
              <h2>Member Testimonials</h2>
              <ul className="clearfix">
                <li>
                  <Link href="#">
                    <a className="testi-in">
                      <figure>
                        <img
                          src="https://www.trevinowarren.com/wp-content/uploads/2015/04/head-shot-000.jpeg"
                          alt="img"
                          width="150"
                          height="150"
                        />
                      </figure>
                      <span>Stephen K.</span>
                      <p>
                        Before using JS.social, I was pretty struggling. I
                        simply was ready to drop it. But after being a part of
                        Js.social for a few months, I understand Javascript at a
                        much greater level and fully confident in my abilities!
                        Thank you!
                      </p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="testi-in">
                      <figure>
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C4E03AQEwg6iHAuYz_w/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=-IBKJib9IX6t6HWQ6GpLM2fidcQB5kcwaAx1yyibV7k"
                          alt="img"
                          width="150"
                          height="150"
                        />
                      </figure>
                      <span>Adam J.</span>
                      <p>
                        Amazing community! They are really keen on keeping you
                        up-to-date with best practices, which is what I
                        appreciate the most. I just love being part of the chat,
                        there are always fun topics going on!
                      </p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="testi-in">
                      <figure>
                        <img
                          src="https://media.globalcitizen.org/thumbnails/ea/0f/ea0f13c4-5746-45a4-aeba-df2bf1c4b126/women_in_silicon_valley.jpg__1264x568_q85_crop_subsampling-2.jpg"
                          alt="img"
                          width="150"
                          height="150"
                        />
                      </figure>
                      <span>Anne T.</span>
                      <p>
                        The mentors did a good job of providing me with the
                        skills necessary to ultimatey help land a job as a
                        software developer!. The mentors were solid as they were
                        always there to guide me on a daily basis.
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section>
          <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                    We help you land jobs through our extensive network
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
                    We have helped members land their dream jobs in some of the
                    most respected companies
                  </p>
                  <div className="mt-8 sm:flex">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/transistor-logo.svg"
                      alt="Workcation"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/mirage-logo.svg"
                      alt="Mirage"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/tuple-logo.svg"
                      alt="Tuple"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/laravel-logo.svg"
                      alt="Laravel"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/statickit-logo.svg"
                      alt="StaticKit"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                      className="max-h-12"
                      src="https://tailwindui.com/img/logos/statamic-logo.svg"
                      alt="Statamic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="invest">
            <div className="container">
              <div className="invest-sec">
                <div className="invest-sec-left">
                  <Link href="#">
                    <a>
                      <img
                        src="images/img2.jpg"
                        alt="img"
                        width="443"
                        height="440"
                      />
                    </a>
                  </Link>
                </div>
                <div className="invest-sec-right">
                  <h2>
                    It's time to start investing <br />
                    in your future.
                  </h2>
                  <span>Let us make you a better coder.</span>
                  James Lee, CTO of Bambee
                  <form>
                    {/*
                    <ul className="clearfix">
                                <li><input type="text" name="fname" id="fname" className="form-control" placeholder="Full Name" /></li>
                                <li><input type="text" name="femail" id="femail" className="form-control" placeholder="Email Address" /></li>
                                <li className="sign"><Link href="#">Sign Up</Link></li>
                            </ul>
                  */}
                  </form>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
