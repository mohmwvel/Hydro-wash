import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const allServices = [
    { title: "Classic Wash", price: "300 EGP", desc: "Premium hand wash and interior vacuum.", img: "/images/classic.jpg", span: "lg:col-span-6" },
    { title: "Detailing Wash", price: "2500 EGP", desc: "Deep engine clean and paint decontamination.", img: "/images/detailing.jpg", span: "lg:col-span-6" },
    { title: "Paint Correction", price: "1500 EGP", desc: "Multi-stage machine polish to remove swirls.", img: "/images/polish.jpg", span: "lg:col-span-12" }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      <Navbar />
      <main className="pt-32 px-12 max-w-[1920px] mx-auto pb-24">
        <header className="mb-20">
          <h1 className="font-headline text-7xl font-bold text-white tracking-tighter">
            Our <span className="text-brand-primary italic">Expertise.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {allServices.map((s, i) => (
            <ServiceCard key={i} title={s.title} price={s.price} description={s.desc} image={s.img} span={s.span} />
          ))}
        </div>
      </main>
    </div>
  );
}