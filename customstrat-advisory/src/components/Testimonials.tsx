interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="endorsements" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4 text-balance">Endorsements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto stagger-fade">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -top-6 -left-6 text-8xl text-accent/10 font-serif leading-none">"</div>
              
              <div className="relative bg-white p-8 lg:p-12 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-500 border-l-4 border-accent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <p className="text-xl lg:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-end">
                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full mb-4"></div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                    {testimonial.company && (
                      <p className="text-gray-600">{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}