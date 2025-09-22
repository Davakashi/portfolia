const contactItems = [
  {
    social: "email",
    link: "daavka.desu@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=daavka.desu@gmail.com",
  },
  {
    social: "github",
    link: "Davakashi",
    href: "https://github.com/Davakashi",
  },
  {
    social: "linkedin",
    link: "Davaajargal Tumurtogoo",
    href: "https://www.linkedin.com/in/davaajargal-tumurtogoo-a32a48385/",
  },
  {
    social: "facebook",
    link: "Davaajargal",
    href: "https://www.facebook.com/davaajargal.235550/",
  },
  {
    social: "instagram",
    link: "davakashi__",
    href: "https://www.instagram.com/davakashi__/",
  },
];

const ContactCode = () => {
  return (
    <div className="code">
      <p className="line">
        <span className="className">.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className="line" key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className="line">&#125;</p>
    </div>
  );
};

export default ContactCode;
