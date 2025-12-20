interface HeroProps {
    title: string;
    subtitle?: string;
    image?: string;
    centered?: boolean;
  }
  
  export default function Hero({ title, subtitle, image = '/images/hero-home.jpg', centered = false }: HeroProps) {
    return (
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
  
        {/* Content */}
        <div className="container-custom relative z-10 text-white">
          <div className={centered ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl'}>
            {/* Logo for home page */}
            {subtitle && (
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }