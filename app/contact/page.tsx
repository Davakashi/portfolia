import ContactCode from "./contact-code";

export default function Contact() {
  return (
    <div className="max-w-[900px] my-0 mx-auto h-full ">
      <h1 className="text-[2rem] font-bold text-[var(--accent-color)] mb-4 tracking-[-0.03em] leading-[1.2] text-center pt-12 max-[600px]:text-[1.75rem]">
        Contact Me
      </h1>
      <p className="text-base font-normal text-[#ffffffb3] mb-12 max-w-[600px] leading-[1.6] text-center mx-auto max-[600px]:text-base max-[600px]:mb-8">
        Feel free to reach out to me through any of the social platforms below. I&apos;m always open to new
        opportunities and connections.
      </p>
      <div className="flex justify-center max-[1200px]:block max-[1200px]:py-8 max-[1200px]:px-4">
        <div className="flex-1 max-w-[600px] max-[1200px]:border-r-none max-[1200px]:mb-8 ">
          <ContactCode />
        </div>
      </div>
    </div>
  );
}
