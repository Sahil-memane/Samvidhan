export default function IntoBanner(username) {
  console.log(username.username);
  return (
    <section
      className={`flex bg-white dark:bg-gray-900 max-w-screen-xl mx-auto p-8 md:p-12 lg:p-20 ${
        username.username === null ? "lg:pb-0" : ""
      }`}
    >
      <div className="w-[100%]">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Building a Secure <br />{" "}
          <div className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 block py-3">
            Cyber Future
          </div>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:pe-16 xl:pe-48 dark:text-gray-400">
          Ensuring cyber resilience through advanced technologies, threat
          intelligence, and proactive defense strategies for a secure digital
          landscape.
        </p>
        <button
          type="button"
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-gradient-to-r from-orange-500 to-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-orange-700 dark:focus:ring-orange-700"
        >
          Learn More
        </button>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-[50%]">
        <img src="/img3.jpg" alt="mockup" />
      </div>
    </section>
  );
}
