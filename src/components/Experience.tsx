const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">03. Experience</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">cat experience.txt</span>
            </div>

            <div className="space-y-6">
              {/* HPE */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-green/30 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl glow-green"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold glow-green">Project Intern - Hewlett Packard Enterprise</h3>
                        <p className="glow-cyan">Jan 2025 – June 2025</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="glow-purple">•</span>
                        <span>Developed AI-driven LLM agent framework for automated issue diagnosis using contextual log analysis & root cause analysis</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-purple">•</span>
                        <span>Built Python-based REST API simulator with real-time metrics tracking (latency, capacity, saturation)</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-purple">•</span>
                        <span>Implemented optional UI for storage system visualization</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PESU CFIS */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl glow-purple"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold glow-purple">Research Intern - Centre For Information Security,Forensics & Cyber Resilience, PESU </h3>
                        <p className="glow-cyan">Jun 2024 – Aug 2024</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="glow-orange">•</span>
                        <span>Researched applications of AI/ML for cybersecurity in domains such as Digital Forensics, Malware Detection, DDoS Mitigation etc.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-orange">•</span>
                        <span>Authored a research paper comparing LLMs vs LSTMs for system log analysis performance</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-orange">•</span>
                        <span>Developed ML models for threat detection and system security enhancement</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dyashin Technosoft */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-blue/30 hover:border-neon-yellow/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl glow-blue"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold glow-blue">Backend Engineering Intern - Dyashin Technosoft Pvt Ltd.</h3>
                        <p className="glow-cyan">Jun 2024 – Jul 2024</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="glow-yellow">•</span>
                        <span>Developed Banking Database Management System using Java Spring Boot framework</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-yellow">•</span>
                        <span>Implemented comprehensive API testing using Postman for HTTP request validation</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="glow-yellow">•</span>
                        <span>Deployed the production application on AWS EC2 instances with optimized performance</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;