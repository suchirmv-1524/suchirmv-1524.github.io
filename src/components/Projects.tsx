import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OptimaSQL",
      description:
        "SQL query optimizer that evaluates and visualizes alternative query execution plans using TPC-H benchmark data for performance comparison.",
      tech: ["Flask", "React", "PostgreSQL", "Node.js", "Poetry", "TPC-H Dataset"],
      color: "neon-green",
      githubUrl: "https://github.com/suchirmv-1524/OptimaSQL",
    },
    {
      title: "DiagnoSys Bot",
      description:
        "Intelligent LLM assistant for identifying and debugging faults in storage system architectures, enhancing reliability through automated root cause analysis.",
      tech: ["LangChain", "LangGraph", "Streamlit", "REST APIs", "Flask", "ChromaDB", "PyPDF", "Pandas", "Requests"],
      color: "neon-cyan",
      githubUrl: "https://github.com/suchirmv-1524/DiagnoSys-Bot",
    },
    {
      title: "Multi Agent Music Generation Framework from VAD Scores",
      description:
        "Multimodal emotion detection system using VAD (Valence, Arousal, Dominance) scores from raw audio and facial imagery for personalized & robust music recommendations.",
      tech: ["PyTorch", "TensorFlow", "Transformers", "Audiocraft", "Librosa", "ChromaDB", "Streamlit", "SpeechRecognition", "Pydub", "Google Generative AI", "NumPy"],
      color: "neon-purple",
      githubUrl: "https://github.com/suchirmv-1524/MusicVAD",
    },
    {
      title: "TrafficSync",
      description:
        "Real-time 3D traffic simulation with dynamic congestion control using Google Maps data to simulate dynamic vehicle flow at Bangalore intersections.",
      tech: ["Three.js", "Node.js", "Google Maps API", "JavaScript", "Vercel"],
      color: "neon-blue",
      githubUrl: "https://github.com/suchirmv-1524/TrafficSync",
    },
    {
      title: "EduStream",
      description:
        "Azure-hosted e-learning platform with seamless course uploads and topic discovery for enhanced learning experiences using Azure App Services",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Django", "Azure App Services",],
      color: "neon-orange",
      githubUrl: "https://github.com/suchirmv-1524/EduStream",
    },
    {
      title: "PseudoKube",
      description:
        "Lightweight Kubernetes-like cluster orchestration framework with pod scheduling, heartbeat-based node health monitoring, & dynamic pod rescheduling for failure recovery.",
      tech: ["Python", "FastAPI", "Docker", "Shell Scripting", "Node.js", "Git", "Unix CLI", "Scheduling Algorithms"],
      color: "neon-pink",
      githubUrl: "https://github.com/suchirmv-1524/PseudoKube",
    }
  ];

  const openGithub = () => {
    window.open("https://github.com/suchirmv-1524", "_blank");
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">04. Projects</span>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">ls projects/</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="space-y-4">
                    <h3 className={`text-xl terminal-prompt font-semibold glow-${project.color}`}>
                      {project.title}
                    </h3>

                    <p className="text-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-${project.color}/10 border border-${project.color}/30 rounded-full text-sm glow-${project.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className={`neon-button ${
                          project.color === "neon-green"
                            ? "cyan"
                            : project.color === "neon-cyan"
                            ? "purple"
                            : project.color === "neon-purple"
                            ? "pink"
                            : project.color === "neon-blue"
                            ? "cyan"
                            : project.color === "neon-orange"
                            ? "purple"
                            : "pink"
                        } flex items-center gap-2`}
                      >
                        <Github size={16} />
                        View Source
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <button
                onClick={openGithub}
                className="neon-button cyan flex items-center gap-2"
              >
                <Github size={20} />
                View More Projects
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
