import { useEffect, useRef, useState } from 'react';
import HyperOne from '../customH1/HyperOne';

export default function ContactMe() {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    // Validation logic
    const userName = form.current.user_name.value;
    const userEmail = form.current.from_name.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      console.log("Form validation failed");
      setIsNotEmpty(true);
      return;
    }

    console.log("Sending email...");
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: userName,
          from_name: userEmail,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data.message);
        e.target.reset();
        setMessageSent(true);
      } else {
        console.error("Failed to send email:", data.message);
        setError(data.message || "Failed to send email. Please try again later.");
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send email. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (isMessageSent || isNotEmpty || error) {
      const timer = setTimeout(() => {
        setMessageSent(false);
        setIsNotEmpty(false);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMessageSent, isNotEmpty, error]);
  return (
    <>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 10%;
          right: 1%;
          background-color: rgba(0, 0, 0, 0.6);
          padding:20px;
          color: var(--textColor)
          padding: 16px;
          border-radius: 4px;
        }
      `}</style>
      <div className="my-16">
        <HyperOne value={'Contact me'} />
      </div>
      <main
        id="contact"
        className="container mx-auto flex flex-col sm:flex-row justify-center items-center"
      >
        <section className="mx-8 sm:mx-16 flex flex-col max-w-xl">
          <h2 className=" font-bold text-5xl sm:text-7xl">
            Let&apos;s Connect!
          </h2>
          <p className="text-lg  mt-4">
            Feel free to reach out! I&apos;m always excited to connect with like-minded professionals and explore new opportunities. Whether you have a project in mind or want to collaborate on innovative ideas, let&apos;s work together to create something amazing. Send me a message, and let&apos;s start the conversation!
          </p>
        </section>
        <section className="flex flex-col mx-8 sm:mx-16 mt-8 sm:mt-0 w-full max-w-md">
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label htmlFor="user_name" className="text-sm font-semibold mb-2 text-gray-300 tracking-wide cursor-custom">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="from_name" className="text-sm font-semibold mb-2 text-gray-300 tracking-wide cursor-custom">
                Email
              </label>
              <input
                id="from_name"
                type="email"
                name="from_name"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold mb-2 text-gray-300 tracking-wide cursor-custom">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 resize-none"
                rows="4"
                name="message"
                placeholder="Hi Nayan, I would love to collaborate..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-gradient-to-r from-[#0EA5E9] to-indigo-600 hover:from-sky-500 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-150 cursor-custom ${
                isSending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </main>
      {isMessageSent && (
        <div className="popup">
          <p>Message sent successfully! ✅</p>
        </div>
      )}
      {isNotEmpty && (
        <div className="popup">
          <p>Please fill out all fields ❌</p>
        </div>
      )}
    </>
  );
}
