import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6"; 

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        
        {/* Logo + About + Contact */}
        <div className="flex flex-col space-y-3">
          <span className="text-xl font-bold">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="YogaBlog Logo"
                width={120}
                height={60}
              />
            </Link>
          </span>

          <p className="text-gray-400 text-sm mt-2 space-y-6">
                    Empowering your yoga journey.
                  </p>

          {/* Contact Info */}
          <div className="text-gray-300 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-400" /> 
              <a href="tel:+18665561566" className="hover:text-blue-400">
                +1-866-556-1566
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> 
              <a href="mailto:support@yogavideos.com" className="hover:text-blue-400">
                support@yogavideos.com
              </a>
            </p>
            
          </div>

          
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <span className="font-semibold mb-2">Quick Links</span>
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/" className="hover:text-blue-400">
            Blog
          </a>
          <a href="/about" className="hover:text-blue-400">
            About
          </a>
          <a href="/contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Social + Subscribe */}
        <div className="flex flex-col space-y-2">
          <span className="font-semibold mb-2">Follow & Subscribe</span>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l border-none text-black flex-1"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r text-white">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-3 text-xl space-y-6">
            <a href="https://www.facebook.com/incensesticksdotcom" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/incensesticks/" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/incensesticks1" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.pinterest.com/incensesticksdotcom/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
            <a href="https://www.youtube.com/channel/UCtYevIN1_CN2c0hreXwYGKw" className="hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/incensesticks/" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@incensesticks.shop" className="hover:text-black" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 py-2 text-sm">
        incensesticks.com® is a registered trademark of Soffway, LLC. All rights reserved. 2025
      </div>
    </footer>
  );
}
