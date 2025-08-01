import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Cloud
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const contactLinks = [
    {
      platform: "Phone Number",
      handle: "+91 86609 38836",
      url: "tel:+918660938836",
      icon: Phone,
      color: "neon-red"
    },
    {
      platform: "Email",
      handle: "smv1524@gmail.com",
      url: "mailto:smv1524@gmail.com",
      icon: Mail,
      color: "neon-green"
    },
    {
      platform: "GitHub",
      handle: "suchirmv-1524",
      url: "https://github.com/suchirmv-1524",
      icon: Github,
      color: "neon-purple"
    },
    {
      platform: "LinkedIn",
      handle: "suchir-m-velpanur",
      url: "https://linkedin.com/in/suchir-m-velpanur-519413296",
      icon: Linkedin,
      color: "neon-cyan"
    },
    {
      platform: "LeetCode",
      handle: "suchircodezzz",
      url: "https://leetcode.com/u/suchircodezzz",
      icon: Code,
      color: "neon-orange"
    },
    {
      platform: "Google Cloud",
      handle: "GCP Dashboard",
      url: "https://www.cloudskillsboost.google/public_profiles/b1bcac27-d7a9-497b-9524-957d233b1eca",
      icon: Cloud,
      color: "neon-yellow"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">09. Contact</span>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">ping suchir</span>
            </div>

            {/* Contact Info Cards */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~/connect</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">cat contact_info.json</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-40 h-40 p-4 flex flex-col items-center justify-center text-center rounded-lg border border-${contact.color}/30 bg-${contact.color}/10 hover:bg-${contact.color}/20 transition-all duration-300 group`}
                  >
                    <contact.icon className={`w-7 h-7 mb-2 glow-${contact.color}`} />
                    <h3 className={`text-base font-semibold glow-${contact.color}`}>
                      {contact.platform}
                    </h3>
                    <p className="text-xs text-foreground">{contact.handle}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Message Form */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~/send_message</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">nano message.txt</span>
              </div>

              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-purple/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block glow-cyan mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-terminal-bg border border-neon-cyan/30 rounded-md focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple text-foreground"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="block glow-cyan mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-terminal-bg border border-neon-cyan/30 rounded-md focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple text-foreground"
                      placeholder="Enter your email..."
                    />
                  </div>

                  <div>
                    <label className="block glow-cyan mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 bg-terminal-bg border border-neon-cyan/30 rounded-md focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple text-foreground resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="neon-button purple flex items-center gap-2 justify-center w-full"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Status Message */}
            {status !== "idle" && status !== "sending" && (
              <div className="bg-terminal-surface p-4 rounded-lg border border-neon-green/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="terminal-prompt">suchir@terminal</span>
                  <span className="glow-cyan">:</span>
                  <span className="terminal-path">~</span>
                  <span className="glow-cyan">$</span>
                  <span className="terminal-command">cat status.txt</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  {status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 glow-green" />
                      <span className="glow-green">Message sent successfully! I'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 glow-red" />
                      <span className="text-neon-red">Failed to send message. Please try again.</span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
