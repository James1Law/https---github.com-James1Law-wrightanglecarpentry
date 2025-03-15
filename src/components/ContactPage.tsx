"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your server or a service
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset the submission state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col pt-[150px]">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                  {formSubmitted ? (
                    <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
                      Thank you for your message! We'll get back to you as soon as possible.
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block mb-1 font-medium">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="message" className="block mb-1 font-medium">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded"
                      ></textarea>
                    </div>

                    <div className="mt-6">
                      <button type="submit" className="btn-primary py-3 px-8 text-lg font-medium">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="contact-info rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-red-400">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p>07753958395</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-red-400">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p>james@wrightanglecarpentry.co.uk</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-red-400">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p>Covering Sussex, Kent and London</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-red-400">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Hours</h3>
                      <p>Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 2pm<br />
                      Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
