import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-outline/10">
      <div className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
        <div className="text-2xl font-bold font-headline text-brand-primary">HYDRO WASH</div>
        <div className="hidden md:flex space-x-12 text-xs tracking-widest uppercase">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link href="/booking" className="hover:text-brand-primary transition-colors">Booking</Link>
        </div>
        <Link href="/booking">
          <button className="bg-brand-primary text-black px-8 py-3 rounded-lg font-bold text-[10px] tracking-widest uppercase">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
}