const Home = () => {
  return (
    <>
      <div>
        <section className=" h-[500px] bg-[url('/grid.svg')]">
          <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex  ">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">Create your Portfolio<strong
                className="font-extrabold text-primary sm:block"> In Minutes, Not Hours </strong></h1>
              <p className="mt-4 sm:text-xl/relaxed text-gray-500">Build, customize, and share your portfolio instantly. Showcase your projects, skills, and services with ease, no coding required.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4"><a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#">+ Create My Portfolio</a><a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="#">Learn More</a></div>
            </div>
          </div>
          <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-56 ">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
                <p className="mt-4 text-gray-300">Easily design your portfolio by entering basic details. Choose from a variety of themes, and have your personalized site up and running in no time.</p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" className="lucide lucide-atom h-8 w-8">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path
                    d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z">
                  </path>
                  <path
                    d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z">
                  </path>
                </svg>
                <h2 className="mt-4 text-xl font-bold text-black">Provide Your Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">Simply input your name, bio, skills, and projects. Our system will generate your portfolio based on the information you provide.</p>
              </a><a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" className="lucide lucide-square-pen h-8 w-8">
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                  </svg>
                  <h2 className="mt-4 text-xl font-bold text-black">Edit Your Portfolio Anytime
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">Easily update your details, add new projects, and modify your skills and services. Keep your portfolio up-to-date effortlessly.

</p>
                </a><a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" className="lucide lucide-share2 h-8 w-8">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                  <h2 className="mt-4 text-xl font-bold text-black">SShare & Showcase Your Work
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">Share your unique link with potential clients or employers and start showcasing your expertise today.

</p>
                </a></div>
              <div className="mt-12 text-center"><a href="/sign-in"
                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Get
                Started Today</a></div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default Home
