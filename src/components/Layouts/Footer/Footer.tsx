const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow responsive-text  text-center p-4">
      <p className="text-black">
        Made with <span className="fas fa-heart text-red"></span> using{" "}
        <a href="https://react.dev" target="_blank" className="hover:underline font-bold">
          React
        </a>{" "}
        +{" "}
        <a href="https://tailwindcss.com" target="_blank" className="hover:underline font-bold">
          Tailwind CSS
        </a>
      </p>

      <p className="text-black">
        Copyright &copy; {getYear}{" "}
        <a href="https://mujs.dev" target="_blank" className="hover:underline font-bold">
          Mujtaba Murtaza
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
