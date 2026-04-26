export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-brand-outline/15 bg-brand-dark">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-[1920px] mx-auto text-center md:text-left">
        <div className="text-lg font-headline text-white mb-4 md:mb-0">Hydro Wash</div>
        <p className="text-[10px] tracking-widest uppercase text-[#c7c6c6]">
          © 2026 Hydro Wash. The Art of Automotive Refinement.
        </p>
      </div>
    </footer>
  );
}