import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Image Logic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-car.jpg" 
          alt="Hydro Wash Detailing" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlays to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-12 max-w-[1920px] mx-auto">
        <div className="max-w-4xl">
          {/* Small Badge */}
          <div className="inline-block px-4 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-brand-primary text-[10px] tracking-[0.3em] uppercase font-bold">
              Premier Detailing Studio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-10 tracking-tighter">
            THE ART OF <br/>
            <span className="italic font-light text-brand-primary">REFINEMENT.</span>
          </h1>

          <p className="max-w-xl text-[#c7c6c6] text-lg md:text-xl mb-12 leading-relaxed font-light">
            Exquisite automotive care for the discerning collector. We don't just wash; we preserve your legacy.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/booking">
              <button className="bg-brand-primary text-black px-12 py-5 rounded-xl font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(184,195,255,0.2)]">
                Book Appointment
              </button>
            </Link>
            <Link href="/services">
              <button className="px-12 py-5 rounded-xl border border-brand-outline/40 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Our Packages
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}