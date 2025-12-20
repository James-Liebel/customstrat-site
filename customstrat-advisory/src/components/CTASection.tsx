import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="mb-6">{title}</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          {description}
        </p>
        <Link href={buttonHref} className="inline-block btn-secondary bg-white hover:bg-gray-100 text-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}