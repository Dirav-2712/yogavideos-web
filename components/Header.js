import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#f6f6f6] shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
  <Link href="/">
    <Image src="/logo.jpg" alt="YogaBlog Logo" width={120} height={60} />
  </Link>
</div>
        <nav className="space-x-4">
          <Link href="/"><a className="hover:text-blue-500">Home</a></Link>
          <Link href="/#latest-posts"><a className="hover:text-blue-500">Blog</a></Link>
          <Link href="/about"><a className="hover:text-blue-500">About</a></Link>
          <Link href="/contact"><a className="hover:text-blue-500">Contact</a></Link>
        </nav>
      </div>
    </header>
  );
}
 
