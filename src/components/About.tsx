const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider"></div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="ml-4 glow-cyan text-2xl">01. About Me</span>
          </div>
          
          <div className="space-y-8">
            {/* About.txt */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">cat about.txt</span>
              </div>
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-blue/30 space-y-4">
                <p className="text-lg leading-relaxed">
                  Hey there! I'm a final year <span className="glow-cyan">Computer Science & Engineering</span> student at 
                  <span className="glow-purple"> PES University</span> with a GPA of <span className="glow-green">9.1/10.0</span>. 
                  My curiosity thrives at the intersection of <span className="glow-orange">AI/ML</span>, 
                  <span className="glow-pink"> Cloud Infrastructure</span>, and <span className="glow-yellow">Cyber Security</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm a hands-on builder; whether it's training models, debugging backend systems, or deploying scalable apps to the cloud. 
                  I've explored a diverse range of domains, from <span className="glow-purple">Generative AI</span> to 
                  <span className="glow-cyan"> System Log Analysis</span>, and I really love translating ideas into impactful code.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond code, I enjoy exploring new tech, organizing hackathons, and diving into the technical know-hows behind every system. 
                  <span className="glow-green"> Always learning, always building!</span>
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~/philosophy</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">cat philosophy.txt</span>
              </div>
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-green/30">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="glow-blue text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Think deep. Build clean. Learn relentlessly.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-orange text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Break things often, fix them even better.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-purple text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Debug with curiosity, not frustration — every bug is a disguised mentor.</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="glow-pink text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Simplicity scales. Complexity fails.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-yellow text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Build systems that survive real-world chaos.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-cyan text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                      <span>Believe in meaningful systems, clean abstractions, and code that tells a story.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neon-green/20">
                  <div className="flex items-start gap-3">
                    <span className="glow-green text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg></span>
                    <span>If not coding, I'm probably reading thought-provoking nonfiction, diving into a sci-fi rabbit hole, or playing a game of badminton.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-lg">
                <span className="terminal-prompt">suchir@terminal</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~/interests</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">ls -la</span>
              </div>
              <div className="bg-terminal-surface p-6 rounded-lg border border-neon-purple/30">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="glow-green text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z"/></svg></span>
                      <span><span className="glow-green">Machine Learning & AI</span> — fascinated by models that adapt & learn</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-cyan text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-380Zm80 220H260q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q106 0 184.5 68.5T757-560q-21 0-40.5 4.5T679-543q-8-75-65-126t-134-51q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h300v80Zm120 0q-17 0-28.5-11.5T640-200v-120q0-17 11.5-28.5T680-360v-40q0-33 23.5-56.5T760-480q33 0 56.5 23.5T840-400v40q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H680Zm40-200h80v-40q0-17-11.5-28.5T760-440q-17 0-28.5 11.5T720-400v40Z"/></svg></span>
                      <span><span className="glow-cyan">Cloud Computing & DevOps</span> — automating infrastructure, deploying smarter.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-blue text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/></svg></span>
                      <span><span className="glow-blue">Scalable & Distributed Architectures</span> — monoliths to microservices.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-purple text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/></svg></span>
                      <span><span className="glow-purple">Data Systems & Query Engines</span> — everything that speaks SQL or NoSQL.</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="glow-orange text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M200-120q-33 0-56.5-23.5T120-200v-500q0-14 4.5-26.5T138-750l56-68q9-11 20.5-16.5T240-840h480q14 0 25.5 5.5T766-818l56 68q9 11 13.5 23.5T840-700v500q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm-16 520h560v-440H200v440Zm382-78 142-142-142-142-58 58 84 84-84 84 58 58Zm-202 0 58-58-84-84 84-84-58-58-142 142 142 142Zm-180 78v-440 440Z"/></svg></span>
                      <span><span className="glow-orange">Backend Systems & APIs</span> — building things that just work, & scale.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-pink text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M420-360h120l-23-129q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129Zm60 280q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg></span>
                      <span><span className="glow-pink">Applied Cybersecurity & Forensics</span> — securing systems & digging into traces.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="glow-yellow text-xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M80-600v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160h-80v-160H160v160H80Zm80 360q-33 0-56.5-23.5T80-320v-200h80v200h640v-200h80v200q0 33-23.5 56.5T800-240H160ZM40-120v-80h880v80H40Zm440-420ZM80-520v-80h240q11 0 21 6t15 16l47 93 123-215q5-9 14-14.5t20-5.5q11 0 21 5.5t15 16.5l49 98h235v80H620q-11 0-21-5.5T584-542l-26-53-123 215q-5 10-15 15t-21 5q-11 0-20.5-6T364-382l-69-138H80Z"/></svg></span>
                      <span><span className="glow-yellow">System Monitoring & Log Analysis</span> — because observability wins.</span>
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

export default About;