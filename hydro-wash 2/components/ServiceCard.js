export default function ServiceCard({ title, price, description, image, span }) {
  return (
    <div className={`${span} relative group overflow-hidden rounded-3xl bg-brand-surface border border-brand-outline/10 min-h-[450px] transition-all duration-700`}>
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-2">
            {price}
          </p>
          <h3 className="font-headline text-4xl text-white mb-4 italic">
            {title}
          </h3>
          <p className="text-[#c7c6c6] text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}