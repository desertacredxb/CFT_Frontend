interface PageBannerProps {
  title: string;
  image?: string;
  subtitle?: string;
}

import defaultImage from "../assets/earth.jpg";

const PageBanner = ({ title, image, subtitle }: PageBannerProps) => {
  const bannerImage = image || defaultImage;

  return (
    <section
      className="relative flex min-h-[50vh] md:min-h-[60vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-5xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;