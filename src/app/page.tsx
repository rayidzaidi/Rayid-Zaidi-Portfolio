import Image from 'next/image';
import FeedbackForm from '@/components/FeedbackForm';

import HeroTitle from '@/components/HeroTitle';
import MarqueeSkills from '@/components/MarqueeSkills';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4">
        <HeroTitle />
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-mono">
          Full Stack Developer | Architecting Digital Realities
        </p>
        <div className="absolute bottom-10 animate-bounce text-gray-500 text-sm font-mono">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 max-w-4xl">
        <h2 className="text-4xl font-mono mb-12 text-[var(--color-accent)]">01 / ABOUT</h2>
        <p className="text-xl md:text-3xl leading-relaxed text-center font-light text-gray-300">
          I am a <span className="text-white font-normal">Full Stack Developer</span> with a passion for building scalable, high-performance applications.
          From complex backend architectures to immersive frontend experiences, I turn abstract concepts into <span className="text-white font-normal">production-ready code</span>.
        </p>
      </section>



      {/* Skills Section */}
      <section id="skills" className="min-h-[50vh] w-full flex flex-col justify-center items-center py-20">
        <h2 className="text-4xl font-mono mb-12 text-[var(--color-accent)]">02 / ARSENAL</h2>
        <MarqueeSkills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 max-w-6xl">
        <h2 className="text-4xl font-mono mb-12 text-[var(--color-accent)]">03 / WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="group relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold mb-2">Neural Interface</h3>
              <p className="text-gray-300 font-mono text-sm">Next.js / WebGL / AI Integration</p>
            </div>
          </div>

          <div className="group relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer">
            <Image
              src="/project2.png"
              alt="Project 2"
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold mb-2">Data Nexus</h3>
              <p className="text-gray-300 font-mono text-sm">React / D3.js / Real-time Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-4xl font-mono mb-12 text-[var(--color-accent)]">04 / CONTACT</h2>
        <FeedbackForm />
      </section>
    </div>
  );
}
