import React from 'react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-white text-gray-800 py-12">
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="inline-block mb-3 px-3 py-1 bg-accent text-white rounded-full text-sm font-medium">
          Contact
        </div>
        <h2 className="text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
        <p className="text-lg mb-6">
          HR / Careers: <a href="mailto:hr@ktlbd.com" className="text-accent hover:underline">hr@ktlbd.com</a>
          <br />
          Location: Chattogram, Bangladesh
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
