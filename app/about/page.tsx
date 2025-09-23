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
              Hey! I&apos;m a software engineer from Ulaanbaatar, Mongolia. I primarily work with JavaScript /
              TypeScript and the React ecosystem.
            </p>
            <p className="mb- leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              I specialize in frontend development with React and Next.js, and also build full-stack apps using Node.js,
              Express, and MongoDB. I&apos;m familiar with DevOps tools such as Docker, Docker, Kubernetes, Jenkins, and
              Argo CD for CI/CD and cloud-native workflows.
            </p>
          </section>

          <section className="mb-10 last:mb-0">
            <h2 className="text-[1.3rem] font-semibold mb-4 text-[var(--accent-color)] max-[600px]:text-[1.2rem] max-[600px]:mb-3">
              Experience
            </h2>
            <div className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              <div className="text-[var(--accent-color)] font-medium">DevOps Intern – Khan Bank</div>
              Worked as a DevOps Engineer Intern where I contributed to CI/CD pipelines, containerized applications with
              Docker, and learned Kubernetes and cloud-native tools.
            </div>
            <div className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              <div className="text-[var(--accent-color)] font-medium">QA Tester (Part-time) – Erxes Inc</div> Worked as
              a QA Tester ensuring the quality and reliability of customer engagement and growth marketing tools.
              Created and executed test cases, reported bugs, and collaborated with developers to improve product
              stability and user experience.
            </div>
          </section>

          <section className="mb-10 last:mb-0">
            <h2 className="text-[1.3rem] font-semibold mb-4 text-[var(--accent-color)] max-[600px]:text-[1.2rem] max-[600px]:mb-3">
              Beyond Code
            </h2>
            <p className="mb-5 leading-[1.7] text-[var(--text-color)] text-base last:mb-0 max-[600px]:text-[0.95rem] max-[600px]:leading-[1.65]">
              Outside of coding, I enjoy exploring personal growth, reading books that spark new perspectives, and
              reflecting on ways to live a balanced, meaningful life. I also like listening to calm music and taking
              long walks to recharge.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
