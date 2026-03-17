import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* ---------------- FOOTER SECTION ---------------- */}
<footer className="bg-neutral text-neutral-content pt-16 pb-10 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    
    {/* Brand / About Section */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tighter text-white">Nilsankar&apos;s Lab</h2>
      <p className="text-sm text-neutral-content/70 leading-relaxed">
        Exploring the intersection of code, research, and cosmic curiosity. 
        Building digital experiences that bridge the gap between ideas and reality.
      </p>
    </div>

    {/* Quick Links Grid */}
    <div>
      <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Navigation</h3>
      <ul className="space-y-2 text-sm text-neutral-content/80">
        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
        <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
        <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
        <li><Link href="/experiments" className="hover:text-white transition-colors">Experiments</Link></li>
      </ul>
    </div>

    {/* Resources Grid */}
    <div>
      <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Resources</h3>
      <ul className="space-y-2 text-sm text-neutral-content/80">
        <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
        <li><Link href="#" className="hover:text-white transition-colors">AI Models</Link></li>
        <li><Link href="#" className="hover:text-white transition-colors">Open Source</Link></li>
        <li><Link href="#" className="hover:text-white transition-colors">Tech Stack</Link></li>
      </ul>
    </div>

    {/* Connect / Newsletter */}
    <div className="space-y-4">
      <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Stay Connected</h3>
      <div className="flex gap-4">
         {/* You can add Social Icons here */}
         <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">Github</Link>
         <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">LinkedIn</Link>
      </div>
      <p className="text-xs text-neutral-content/60 italic">
        "The universe is under no obligation to make sense to you."
      </p>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-content/50">
    <p>© {new Date().getFullYear()} Nilsankar Singha. All rights reserved.</p>
    <div className="flex gap-6">
      <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
      <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Footer;
