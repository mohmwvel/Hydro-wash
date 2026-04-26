import { useState } from 'react';

export default function Booking() {
  const [tier, setTier] = useState('Detailing');

  return (
    <div className="pt-32 pb-20 px-12 max-w-[1600px] mx-auto">
      <h2 className="font-headline text-5xl mb-12">Secure Your <span className="italic text-brand-primary">Slot</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="p-8 bg-brand-surface rounded-2xl border border-brand-outline/20">
             <input className="w-full bg-transparent border-b border-brand-outline/40 py-4 outline-none focus:border-brand-primary text-xl uppercase font-headline" placeholder="Your Name" />
             <input className="w-full bg-transparent border-b border-brand-outline/40 py-4 outline-none focus:border-brand-primary text-xl mt-8 uppercase font-headline" placeholder="Vehicle Model" />
          </div>
        </div>
        <div className="lg:col-span-4 bg-brand-primary text-black p-10 rounded-2xl">
          <h3 className="text-xs uppercase tracking-widest font-bold mb-10">Reservation Summary</h3>
          <p className="text-4xl font-headline italic mb-20">{tier} Package</p>
          <button className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}