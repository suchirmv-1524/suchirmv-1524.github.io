const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-neon-cyan/30">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-window">
          <div className="space-y-6 text-center">

            {/* Echo Command Line */}
            <div className="flex items-center justify-center gap-2">
              <span className="terminal-prompt">suchir@dev</span>
              <span className="glow-cyan">:</span>
              <span className="terminal-path">~</span>
              <span className="glow-cyan">$</span>
              <span className="terminal-command">echo "Let's build something amazing together!"</span>
              <span className="cursor-blink ml-1">_</span>
            </div>

            {/* Uptime Block (Moved Up) */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <span className="terminal-prompt">suchir@dev</span>
                <span className="glow-cyan">:</span>
                <span className="terminal-path">~</span>
                <span className="glow-cyan">$</span>
                <span className="terminal-command">uptime</span>
                <span className="cursor-blink ml-1">_</span>
              </div>
              <p className="glow-pink text-sm italic">
                Always online, always learning, always building.
              </p>
            </div>

            {/* Signature & Copyright */}
            <div className="pt-4 space-y-3">
              <p className="glow-green text-lg">
                Designed & Built by <span className="glow-cyan">Suchir M Velpanur</span>
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="glow-yellow">© 2025 – All rights reserved</span>
                <span className="glow-cyan">•</span>
                <span className="glow-green">Made with ❤️ in Bangalore</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
