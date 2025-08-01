import { ExternalLink, FileText } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
  window.open("/Suchir_MV_Resume.pdf", "_blank");
    };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-lg">suchir@terminal:~</span>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">whoami</span>
                <span className="cursor-blink ml-1">_</span>
              </div>
            </div>

            <div className="space-y-4 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="glow-green">Suchir M Velpanur</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl md:text-2xl glow-cyan">
                  Software Developer | AI/ML Researcher | Cloud & Cyber Security Enthusiast
                </p>
                <p className="text-lg md:text-xl glow-yellow italic">
                  "Dreaming in Vectors, Deploying in the Cloud and Defending in Bits"
                </p>
              </div>

              <div className="flex items-center gap-2 text-lg justify-center">
                <span className="glow-yellow">📍</span>
                <span className="glow-cyan">Based in Bangalore, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button
                onClick={openResume}
                className="neon-button cyan flex items-center gap-2 justify-center"
              >
                <FileText size={20} />
                View Resume
                <ExternalLink size={16} />
              </button>
              <button
                onClick={scrollToContact}
                className="neon-button yellow flex items-center gap-2 justify-center"
              >
                Contact Me
              </button>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-2 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">cat status.log</span>
              </div>
              <div className="mt-4 p-4 bg-terminal-surface rounded-lg border border-neon-green/30">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></span>
                  <span className="glow-green">Currently building an LLM agentic framework for fault diagnosis in a simple simulated storage system at HPE</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></span>
                  <span className="glow-cyan">Open to new opportunities and collaborations!</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-3 h-3 bg-neon-yellow rounded-full animate-pulse"></span>
                  <span className="glow-yellow">Exploring innvovations at the intersection of AI, Cloud & Cyber Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;