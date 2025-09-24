import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-bold">YogaBlog</span>
          <p className="text-gray-400 text-sm">Empowering your yoga journey.</p>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-semibold mb-2">Quick Links</span>
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/" className="hover:text-blue-400">Blog</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-semibold mb-2">Follow & Subscribe</span>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-blue-400">FB</a>
            <a href="#" className="hover:text-blue-400">IG</a>
            <a href="#" className="hover:text-blue-400">TW</a>
          </div>
          <form className="mt-2">
            <input type="email" placeholder="Email" className="p-2 rounded-l border-none"/>
            <button className="bg-blue-600 px-4 py-2 rounded-r text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 py-2 text-sm">© 2025 YogaBlog. All rights reserved.</div>
    </footer>
  );
}
