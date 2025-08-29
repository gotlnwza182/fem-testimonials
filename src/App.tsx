import "./App.css";

function App() {
  return (
    <main className="p-8  min-h-screen flex items-center justify-center flex-col ">
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-6xl">
        <div className="p-8 bg-purple-500 text-white rounded-lg md:col-span-2 relative shadow-[40px_60px_50px_-47px_rgba(72,85,106,24.74)]">
          <div className="flex items-center  gap-4">
            <img
              src="/image-daniel.jpg"
              alt="daniel"
              className="rounded-full border-2 border-purple-300 w-7 h-7"
            />
            <div className="text-purple-50">
              <p className="text-preset-2 text-white">Daniel Clifford</p>
              <p className="text-preset-4">Verified Graduate</p>
            </div>
          </div>
          <h3 className="text-preset-1 my-4 z-10 relative">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h3>
          <p className="text-preset-3 text-purple-50">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
          <img
            src="/bg-pattern-quotation.svg"
            alt="bg-pattern"
            className="absolute top-0 right-20 z-0 hidden md:block"
          />
        </div>

        <div className="p-8 bg-grey-500 text-white rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,24.74)]">
          <div className="flex items-center  gap-4">
            <img
              src="/image-jonathan.jpg"
              alt="jonathan"
              className="rounded-full  w-7 h-7"
            />
            <div>
              <p className="text-preset-2 text-white">Jonathan Walters</p>
              <p className="text-preset-4 text-grey-300">Verified Graduate</p>
            </div>
          </div>
          <h3 className="text-preset-1 my-4">
            The team was very supportive and kept me motivated
          </h3>
          <p className="text-preset-3 text-grey-100">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. “
          </p>
        </div>

        <div className="p-8 bg-white text-black rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,24.74)]">
          <div className="flex items-center  gap-4">
            <img
              src="/image-jeanette.jpg"
              alt="jeanette"
              className="rounded-full  w-7 h-7"
            />
            <div>
              <p className="text-preset-2 text-grey-500">Jeanette Harmon</p>
              <p className="text-preset-4 text-grey-400">Verified Graduate</p>
            </div>
          </div>
          <h3 className="text-preset-1 my-4">
            An overall wonderful and rewarding experience
          </h3>
          <p className="text-preset-3 text-grey-400">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>

        <div className="p-8 bg-dark-blue text-grey-200 rounded-lg md:col-span-2 shadow-[40px_60px_50px_-47px_rgba(72,85,106,24.74)]">
          <div className="flex items-center  gap-4">
            <img
              src="/image-patrick.jpg"
              alt="patrick"
              className="rounded-full border-2 border-purple-500 w-7 h-7"
            />
            <div className="text-white">
              <p className="text-preset-2 text-white">Patrick Abrams</p>
              <p className="text-preset-4">Verified Graduate</p>
            </div>
          </div>
          <h3 className="text-preset-1 my-4">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h3>
          <p className="text-preset-3 text-grey-100">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>

        <div className="p-8 bg-white text-grey-500 rounded-lg md:col-span-2 xl:col-start-4 xl:row-start-1 xl:row-span-2 shadow-[40px_60px_50px_-47px_rgba(72,85,106,24.74)]">
          <div className="flex items-center  gap-4">
            <img
              src="/image-kira.jpg"
              alt="kira"
              className="rounded-full  w-7 h-7"
            />
            <div>
              <p className="text-preset-2 ">Kira Whittle</p>
              <p className="text-preset-4 text-grey-300">Verified Graduate</p>
            </div>
          </div>
          <h3 className="text-preset-1 my-4 ">
            Such a life-changing experience. Highly recommended!
          </h3>
          <p className="text-preset-3 text-grey-400">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
      <div className="mt-2 text-preset-4">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-600 visited:text-purple-600"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/gotlnwza182"
          target="_blank"
          className="text-blue-600 visited:text-purple-600"
        >
          Denpong Khetpong
        </a>
        .
      </div>
    </main>
  );
}

export default App;
