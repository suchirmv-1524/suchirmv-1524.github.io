// You can define more icons if needed
const ArrowIcon = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
);

const Volunteering = () => {
  const volunteering = [
    {
      title: "AlgoMania Host",
      description:
        "Hosted a Competitive Coding Contest, AlgoMania, for all CSE students of the University",
      role: "Event Organizer",
      icon: <ArrowIcon color="neon-green" />,
      color: "neon-green",
    },
    {
      title: "Inquisitio Mentor",
      description:
        "Mentored participants in Inquisitio, a research paper writing contest",
      role: "Research Mentor",
      icon: <ArrowIcon color="neon-cyan" />,
      color: "neon-cyan",
    },
    {
      title: "Kodikon 2.0 Organizer",
      description:
        "Part of the team hosting Kodikon 2.0, a nationwide hackathon with 500+ participants",
      role: "Hackathon Organizer",
      icon: <ArrowIcon color="neon-purple" />,
      color: "neon-purple",
    },
    {
      title: "LLMs and GPTs Workshop",
      description:
        "Organised a workshop on LLMs and GPTs for the students of PES University",
      role: "Workshop Organizer",
      icon: <ArrowIcon color="neon-orange" />,
      color: "neon-orange",
    },
  ];

  return (
    <section id="volunteering" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">06. Volunteering Activities</span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">cat volunteering.txt</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {volunteering.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-terminal-surface p-6 rounded-lg border border-neon-blue/30 hover:border-neon-pink/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl glow-${workshop.color}`}>
                      {workshop.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold glow-${workshop.color} mb-2`}>
                        {workshop.title}
                      </h3>
                      <p className="text-foreground mb-3 leading-relaxed">
                        {workshop.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-sm glow-cyan">
                          {workshop.role}
                        </span>
                      </div>
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

export default Volunteering;
