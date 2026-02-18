import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass mt-20 border-t border-white/10 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/PW170"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6 text-red-500" />
          </a>
          <a
            href="mailto:pranavwatkar45@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6 text-blue-500" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-pulse">
            &copy; {new Date().getFullYear()} Aspid is Gay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
