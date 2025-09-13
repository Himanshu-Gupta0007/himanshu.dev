import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_v2fhn4j",
        "template_8sb8plk",
        {
          title: form.title || "Contact Us",
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Rak0tNRRdqMvtTqh8"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message sent successfully 🎉",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              title: "",
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);

          showAlert({
            show: true,
            text: "Message couldn't be sent 😢",
            type: "danger",
          });
        }
      );
  };

  // Typing effect hook
  const text = "Let’s Talk 👋";
  const [displayedText, setDisplayedText] = useState("");

  useState(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-container max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-lg"
        >
          {/* 🔥 Typing Heading */}
          <h3 className="head-text flex items-center">
            {displayedText}
            <motion.span
              className="ml-1 w-[3px] h-8 bg-white"
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h3>

          <p className="text-lg text-white-600 mt-3 text-center">
            Have a project in mind? Fill out the form and I’ll get back to you
            as soon as possible.
          </p>

          {/* 🔥 Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col space-y-6"
          >
            <label className="space-y-2">
              <span className="field-label">Subject</span>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="field-input focus:ring-2 focus:ring-sky-400"
                placeholder="Subject of message"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input focus:ring-2 focus:ring-sky-400"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input focus:ring-2 focus:ring-sky-400"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input focus:ring-2 focus:ring-sky-400"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="field-btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition-all"
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                <>
                  Send Message
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
