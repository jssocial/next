import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ContactUs() {
  return (
    <div className="contactus-div">
      <Nav />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl sitka font-extrabold tracking-tight sm:text-4xl">
                You may contact us.
              </h2>
              <p className="mt-4 neue text-lg text-gray-500 sm:mt-3">
                If you have any questions, whether related to packages,
                membership deals, project information, or anything related to
                this website or coding please don't hesitate from reaching us,
                by filling the form below, we will be reading your message.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first_name"
                    className="neue block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="neue block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="neue block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="neue block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="neue block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="neue block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="neue block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="neue block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="neue block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone_description"
                      className="neue text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone_description"
                      className="block neue w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how_can_we_help"
                      className="neue block text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how_can_we_help_description"
                      className="neue text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how_can_we_help"
                      name="how_can_we_help"
                      aria-describedby="how_can_we_help_description"
                      rows="4"
                      className="neue block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="neue block text-sm font-medium text-gray-700">
                    What kind of Dev are you?
                  </legend>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    <div className="flex items-center">
                      <input
                        id="budget_under_25k"
                        name="budget"
                        value="under_25k"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="budget_under_25k" className="ml-3">
                        <span className="neue block text-sm text-gray-700">
                          Full Stack
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget_25k-50k"
                        name="budget"
                        value="25k-50k"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="budget_25k-50k" className="ml-3">
                        <span className="neue block text-sm text-gray-700">
                          Backend Dev
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget_50k-100k"
                        name="budget"
                        value="50k-100k"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="budget_50k-100k" className="ml-3">
                        <span className="neue block text-sm text-gray-700">
                          Frontend Dev
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="how_did_you_hear_about_us"
                    className="neue block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      className="neue shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="neue inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
