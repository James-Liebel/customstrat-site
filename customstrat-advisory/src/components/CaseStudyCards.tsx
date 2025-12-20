interface Category {
    title: string;
    description: string;
  }
  
  interface CaseStudyCardsProps {
    categories: Category[];
    subtitle?: string;
  }
  
  export default function CaseStudyCards({ categories, subtitle }: CaseStudyCardsProps) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-accent text-white p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl mb-4 text-center font-semibold">
                  {category.title}
                </h3>
                <p className="text-center text-gray-100">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          
          {subtitle && (
            <div className="bg-blue-50 border-2 border-gray-800 py-6 px-8 rounded-lg">
              <p className="text-center text-xl font-semibold text-gray-800">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }