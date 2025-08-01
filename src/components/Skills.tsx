const Skills = () => {
  const skillCategories = [
    {
      category: "~/languages",
      color: "neon-green",
      skills: ["Java", "C++", "C", "Python","R" ,"Go", "JavaScript", "HTML/CSS", "Shell Scripting"]
    },
    {
      category: "~/databases",
      color: "neon-orange",
      skills: ["MySQL", "PostgreSQL","MongoDB", "ScyllaDB", "ChromaDB"]
    },
    {
      category: "~/frameworks",
      color: "neon-cyan",
      skills: ["MERN Stack","Bootstrap", "Flutter", "Firebase","PyTorch",  "TensorFlow", "LangChain", "LangGraph","Docker", "Kubernetes", "Spring Boot"]
    },
    {
      category: "~/tools & IDEs",
      color: "neon-purple",
      skills: ["Google Cloud Platform", "Amazon Web Services", "Terraform", "Git", "GitHub", "Postman", "VS Code", "Vim", "Kaggle", "Google Colab", "Spring Tool Suite", "Cisco Packet Tracer", "Anaconda", "Arduino IDE"]
    },
    {
      category: "~/soft skills",
      color: "neon-yellow",
      skills: ["Goal Setting", "Change Management", "Innovation & Creativity", "Presentation Skills", "Strategic Thinking", "Sharpening Business Acumen"]

    }
  ];

  // Map color string to Tailwind class names
  const glowClassMap: Record<string, string> = {
    "neon-green": "glow-green",
    "neon-cyan": "glow-cyan",
    "neon-purple": "glow-purple",
    "neon-orange": "glow-orange",
    "neon-yellow": "glow-yellow",
    "neon-pink": "glow-pink",
    "neon-blue": "glow-blue",
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">05. Skills</span>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">cat skills.txt</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className={`text-lg font-semibold ${glowClassMap[category.color]}`}>
                    {category.category}
                  </h3>
                  <div className="bg-terminal-surface p-4 rounded-lg border border-neon-blue/30">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-${category.color}/10 border border-${category.color}/30 rounded-full text-sm ${glowClassMap[category.color]}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
