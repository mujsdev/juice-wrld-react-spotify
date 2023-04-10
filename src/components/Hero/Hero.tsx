import juiceWRLD from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <section
      className="bg-yellow min-h-screen bg-center bg-cover bg-no-repeat flex flex-col justify-center items-end p-12"
      style={{ backgroundImage: `url(${juiceWRLD})` }}>
      <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xs:bg-black/75 md:bg-transparent p-8">
        <h1>juice wrld.</h1>
        <p className="text-gray responsive-text mt-3">1998 –⁠ &#8734;</p>
        <p className="responsive-text xs:mt-4 lg:mt-8">
          Jarad Anthony Higgins, an American rapper, singer, and songwriter, born in Chicago, Illinois. His song “Lucid
          Dreams” has been played on Spotify over one billion times.
        </p>
      </div>
    </section>
  );
};

export default Hero;
