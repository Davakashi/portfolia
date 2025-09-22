export default function About() {
  return (
    <div className="max-w-[900px] h-full my-0 mx-auto py-12 px-6 text-[var(--text-color)] max-[600px]:py-8 max-[600px]:px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-[2.5rem] font-bold mb-2 text-[var(--accent-color tracking-[-0.03em])] max-[600px]:text-[2rem]">
          Tumurtogoo Davaajargal
        </h1>
        <div className="text-[1.1rem] text-[var(--text-secondary)] mb-12 max-[600px]:text-base max-[600px]:mt-8">
          Software Engineer
        </div>

        <div className="w-full">
          <section className="mb-10 last:mb-0">
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base">
              Hey! I&apos;m a software engineer from Mumbai, India. I primarily work with JavaScript / TypeScript and
              the React ecosystem.
            </p>
            <p className="mb- leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              I&apos;m focused on frontend development with React, but you&apos;ll also find me working with Node.js,
              MongoDB and Express while building the backend for my personal projects.
            </p>
          </section>

          <section className="mb-10 last:mb-0">
            <h2 className="text-[1.3rem] font-semibold mb-4 text-[var(--accent-color)] max-[600px]:text-[1.2rem] max-[600px]:mb-3">
              Experience
            </h2>
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              Currently at <span className="text-[var(--accent-color)] font-medium">Tessact</span> as Software Engineer
              2, working with a lean team of 4 frontend engineers to build a next-gen video creation suite for the
              people of video.
            </p>
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              I&apos;ve been leading the development efforts for bringing collaborative video reviewing and editing to
              the platform. I also maintain our in-house component library, icon library and website.
            </p>
          </section>

          <section className="mb-10 last:mb-0">
            <h2 className="text-[1.3rem] font-semibold mb-4 text-[var(--accent-color)] max-[600px]:text-[1.2rem] max-[600px]:mb-3">
              Writing
            </h2>
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              I&apos;ve had the pleasure of writing for some amazing publications like{" "}
              <span className="text-[var(--accent-color)] font-medium">100ms Blog</span>,{" "}
              <span className="text-[var(--accent-color)] font-medium">LogRocket Blog</span>,{" "}
              <span className="text-[var(--accent-color)] font-medium">DEV.to</span> and more as a freelance technical
              author.
            </p>
          </section>

          <section className="mb-10 last:mb-0">
            <h2 className="text-[1.3rem] font-semibold mb-4 text-[var(--accent-color)] max-[600px]:text-[1.2rem] max-[600px]:mb-3">
              Beyond Code
            </h2>
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              Aside from programming and writing, I like to read a good dystopian novel, listen to calm piano music or
              just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
