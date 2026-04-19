import React from "react";
import Link from "next/link";
import { Mail, Earth, Users, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center font-bold text-2xl group-hover:rotate-[360deg] transition-transform duration-1000">
                K
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter">FARM</span>
            </Link>
            <p className="text-white/60 text-lg max-w-sm">
              Providing premium agricultural products and sustainable farming solutions for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#project" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#team" className="hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Follow Us</h4>
            <div className="flex gap-6 mt-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/80">
                <Earth size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/80">
                <Users size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/80">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            © 2026 K-FARM AGRICULTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
