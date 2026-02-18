import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none flex flex-wrap items-center justify-center overflow-hidden">
           {Array.from({ length: 20 }).map((_, i) => (
             <span key={i} className="text-4xl font-bold text-primary m-8 rotate-12">
               Aspid is Gay
             </span>
           ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                Aspid is Gay
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient-x">
                  Proud & Fabulous
                </span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mb-8 font-semibold">
                Hi, I'm Pranav (known online as Aspid), and the most important thing to know about me is that <span className="text-primary font-bold">Aspid is Gay</span>. I am a web developer passionate about turning ideas into powerful digital realities, and expressing my true colors. Aspid is Gay!
              </p>
              <div className="flex justify-start gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 hover:opacity-90 transition-opacity text-white border-none"
                  onClick={() => navigate("/projects")}
                >
                  View My Gay Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full glass hover:bg-white/10 border-primary text-primary"
                  onClick={() => navigate("/contact")}
                >
                  Contact Aspid (Gay)
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Decorative background for image */}
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>

                <div className="relative glass-panel p-2 overflow-hidden rounded-full aspect-square w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center border-4 border-white/20">
                  <a href="https://freeimage.host/i/fVvQP0F" target="_blank" rel="noopener noreferrer" className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://iili.io/fVvQP0F.th.png"
                      alt="Aspid Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-primary/50 shadow-lg whitespace-nowrap">
                  <span className="font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Aspid is Gay</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
