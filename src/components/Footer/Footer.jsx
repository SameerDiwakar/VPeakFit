import React from "react";

const Footer = () => {
  const socialLinks = [
    { icon: "fa-brands fa-facebook", href: "#", label: "Facebook page" },
    { icon: "fa-brands fa-discord", href: "#", label: "Discord community" },
    { icon: "fa-brands fa-twitter", href: "#", label: "Twitter page" },
    { icon: "fa-brands fa-github", href: "#", label: "GitHub account" },
  ];

  const footerSections = [
    {
      title: "Resources",
      links: [
        { text: "VPeakFit", href: "#" },
        { text: "Tailwind CSS", href: "#" },
      ]
    },
    {
      title: "Follow us",
      links: [
        { text: "Github", href: "#" },
        { text: "Discord", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms & Conditions", href: "#" },
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-neutral-50 border-t border-neutral-200/80">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <i className="fa-solid fa-dumbbell text-2xl text-primary-600"></i>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-800">VPeakFit</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-semibold text-neutral-900 uppercase">{section.title}</h2>
                <ul className="text-neutral-500 font-medium">
                  {section.links.map((link) => (
                    <li key={link.text} className="mb-4">
                      <a href={link.href} className="hover:underline">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-neutral-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-neutral-500 sm:text-center">
            © 2024 <a href="/" className="hover:underline">VPeakFit™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5 rtl:space-x-reverse">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-neutral-500 hover:text-primary-600">
                <i className={`${link.icon} w-4 h-4`}></i>
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
