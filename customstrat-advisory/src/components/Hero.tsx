import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  centered?: boolean;
}

export default function Hero({ title, subtitle, image = '/images/hero-home.jpg', centered = false }: HeroProps) {
  return (
    <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-light opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_15s_ease-in-out_infinite_2s]"></div>
      </div>
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(255,255,255,.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.1) 87.5%, rgba(255,255,255,.1)),
            linear-gradient(150deg, rgba(255,255,255,.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.1) 87.5%, rgba(255,255,255,.1)),
            linear-gradient(30deg, rgba(255,255,255,.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.1) 87.5%, rgba(255,255,255,.1)),
            linear-gradient(150deg, rgba(255,255,255,.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.1) 87.5%, rgba(255,255,255,.1))
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 text-white py-20">
        <div className={centered ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl'}>
          {subtitle && (
            <div className="flex items-center gap-4 mb-8 animate-[fadeInUp_800ms_ease-out]">
              <div className="relative group">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Image
                    src="/images/logo.png"
                    alt="CustomStrat Advisory"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
          
          <h1 className="font-semibold mb-6 leading-tight text-balance animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards] brand-name">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl text-white/95 font-light max-w-3xl leading-relaxed animate-[fadeInUp_800ms_ease-out_400ms] opacity-0 [animation-fill-mode:forwards]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}