import React from "react";
import theme from "../../config/theme";

const Contact = () => {
  return (
    <React.Fragment>
      <div
        className={`min-h-screen ${theme.colors.background} px-4 py-12 sm:px-6 lg:px-8`}
      >
        <div className="mx-auto max-w-4xl">
          <div
            className={`${theme.colors.card} ${theme.radius.card} p-6 backdrop-blur-lg md:p-8`}
          >
            <h1
              className={`mb-6 text-center text-3xl font-bold md:text-4xl ${theme.colors.text.heading}`}
            >
              Contact{" "}
              <span
                className={`${theme.colors.primary} bg-clip-text text-transparent`}
              >
                Us
              </span>
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${theme.colors.text.heading}`}
                >
                  Get in Touch
                </h2>
                <p className={`mb-6 ${theme.colors.text.muted}`}>
                  Have questions, suggestions, or need support? We'd love to
                  hear from you. Reach out to us through any of the following
                  methods.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className={`mr-4 p-2 ${theme.radius.button} ${theme.colors.primary}`}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${theme.colors.text.heading}`}
                      >
                        Email
                      </h3>
                      <p className={theme.colors.text.muted}>
                        dheerajjoshi0208@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`mr-4 p-2 ${theme.radius.button} ${theme.colors.primary}`}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${theme.colors.text.heading}`}
                      >
                        Community
                      </h3>
                      <p className={theme.colors.text.muted}>
                        Join our Discord server
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`mr-4 p-2 ${theme.radius.button} ${theme.colors.primary}`}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${theme.colors.text.heading}`}
                      >
                        Feedback
                      </h3>
                      <p className={theme.colors.text.muted}>
                        Share your ideas with us
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${theme.colors.text.heading}`}
                >
                  Send a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      className={`mb-1 block ${theme.colors.text.sub}`}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full p-3 ${theme.radius.button} border border-gray-700 bg-gray-800 ${theme.colors.text.heading} placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-1 block ${theme.colors.text.sub}`}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full p-3 ${theme.radius.button} border border-gray-700 bg-gray-800 ${theme.colors.text.heading} placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-1 block ${theme.colors.text.sub}`}
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className={`w-full p-3 ${theme.radius.button} border border-gray-700 bg-gray-800 ${theme.colors.text.heading} placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 ${theme.radius.button} ${theme.colors.primary} cursor-pointer font-semibold text-white transition-all duration-200 hover:brightness-110`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
