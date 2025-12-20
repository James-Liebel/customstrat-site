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
      <section id="endorsements" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center text-primary mb-16">Endorsements</h2>
          <div className="space-y-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-12 rounded-lg shadow-md border-l-4 border-primary"
              >
                <p className="text-xl md:text-2xl text-primary italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-gray-800 text-lg">
                    – {testimonial.author}
                  </p>
                  {testimonial.company && (
                    <p className="text-gray-600">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }