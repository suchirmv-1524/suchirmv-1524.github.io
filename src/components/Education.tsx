const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">02. Education</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-lg">
              <span className="terminal-prompt">suchir@terminal</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">cat education.txt</span>
            </div>

            <div className="space-y-6">
              {/* PES University */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-blue/30 hover:border-neon-purple/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold glow-cyan">PES University</h3>
                    <p className="glow-purple text-lg">BTech - Computer Science and Engineering</p>
                  </div>
                  <div className="text-right">
                    <p className="glow-green text-lg">Nov 2022 – May 2026</p>
                    <p className="glow-yellow font-semibold text-lg">GPA: 9.1/10.0</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="glow-orange font-medium">Relevant Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures and Algorithms", "OOP with C++", "Web Technologies", 
                      "Statistics", "Computer Networks", "Operating Systems", "Linear Algebra",
                      "Database Management Systems", "Machine Learning", "Augmented & Virtual Reality",
                      "Graph Theory", "Cloud Computing", "Generative AI"
                    ].map((course, index) => (
                      <span key={index} className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-sm glow-cyan">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 12th Grade */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-green/30 hover:border-neon-orange/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold glow-green">Venkat International Public School</h3>
                    <p className="glow-orange text-lg">CBSE 12th Board Exam</p>
                  </div>
                  <div className="text-right">
                    <p className="glow-cyan text-lg">Jun 2020 - Jul 2022</p>
                    <p className="glow-yellow font-semibold text-lg">GPA: 9.58/10.0</p>
                  </div>
                </div>
              </div>

              {/* 10th Grade */}
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold glow-purple">Venkat International Public School</h3>
                    <p className="glow-pink text-lg">CBSE 10th Board Exam</p>
                  </div>
                  <div className="text-right">
                    <p className="glow-cyan text-lg">May 2019 - Mar 2020</p>
                    <p className="glow-yellow font-semibold text-lg">GPA: 9.74/10.0</p>
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

export default Education;