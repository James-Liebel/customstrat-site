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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center text-primary mb-12">{title}</h2>
          <div className={`grid md:grid-cols-${columns} gap-8`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-gray-800 mb-3">{service.title}</h3>
                {service.description && (
                  <p className="text-gray-600">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }