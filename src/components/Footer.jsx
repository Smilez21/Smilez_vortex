import React from "react";

const resources = [
  "FAQs",
  "Terms of Use",
  "Privacy Policy",
  "Help Center",
];
const contacts = [
  {
    label: "Email",
    value: "support@mentoriai.com",
    href: "mailto:support@mentoriai.com",
  },
  {
    label: "Chat with us",
    value: "Launch Chat",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-0">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-gray-700">MentorAI<span className="text-gray-500 font-bold">Your Virtual Guide</span></p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Resources</h2>
          <ul className="space-y-2">
            {resources.map((resource, index) => (
              <li key={index} className="text-gray-600">
                <a href="#" className="hover:underline">{resource}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Get in Touch</h2>
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li key={index} className="text-gray-600">
                <span className="mr-2">{contact.label}:</span>
                <a href={contact.href} className="hover:underline">{contact.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;