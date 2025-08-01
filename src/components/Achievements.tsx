// Custom SVG Icon (reused across all cards)
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00fffb">
    <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/>
  </svg>
);

const Achievements = () => {
  const achievements = [
    {
      title: "IBM Z Datathon 2024",
      description: "Raffle Prize Winner among 466 teams in the Sustainable Development Track",
      icon: <TargetIcon />,
      color: "neon-green"
    },
    {
      title: "People's Conference '23",
      description: "Honorable Mention as the Delegate of Russia in the Continuous Crisis Committee",
      icon: <TargetIcon />,
      color: "neon-cyan"
    },
    {
      title: "EPOCH Datathon",
      description: "Top 7 out of 40 teams in AI/ML hackathon hosted by the university",
      icon: <TargetIcon />,
      color: "neon-purple"
    },
    {
      title: "Capture The Flag",
      description: "Top 7 out of 52 teams in Capture The Flag by the Cyber Security Club of our college",
      icon: <TargetIcon />,
      color: "neon-blue"
    },
    {
      title: "The Great Bengaluru Hackathon",
      description: "Top 9 out of 27 teams in the Multilingual Loan Advisory Track in a national level hackathon",
      icon: <TargetIcon />,
      color: "neon-orange"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">08. Achievements</span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">cat awards.log</span>
            </div>

            {/* Grid Layout for Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-terminal-surface p-6 rounded-lg border border-neon-blue/30 hover:border-neon-pink/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl glow-${achievement.color}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold glow-${achievement.color} mb-2`}>
                        {achievement.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Achievements */}
            <div className="mt-8 bg-terminal-surface p-6 rounded-lg border border-neon-yellow/30">
              <h3 className="text-lg font-semibold glow-yellow mb-4">~/scholarships</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="glow-green">•</span>
                  <span><span className="text-lg glow-green">5× CNR Rao Scholarships</span> - Top 5% academic performance of CSE dept.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="glow-cyan">•</span>
                  <span><span className="text-lg glow-cyan">1× MRD Scholarship</span> - Top 10% academic excellence of CSE dept.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
