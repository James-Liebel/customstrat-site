interface Service {
  title: string;
  description?: string;
}

interface ServicesGridProps {
  title: string;
  services: Service[];
  columns?: 2 | 3;
}

export default function ServicesGrid({ title, services, columns = 3 }: ServicesGridProps) {
  return (
    <section className="section-padding bg-white animated-bg relative">
      <div className="container-custom relative z-10">
        <h2 className="text-center text-primary mb-4 text-balance">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary mx-auto mb-16 rounded-full"></div>
        
        <div className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 lg:gap-8 stagger-fade`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="card card-hover group relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold shadow-soft-md group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              <div className="flex flex-col h-full">
                <h3 className="text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                )}
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}