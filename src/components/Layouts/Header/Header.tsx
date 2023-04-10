const Header = () => {
  const sectionLink = (e: any) => {
    let offsetTop = document.getElementById(e)?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed text-white-200 responsive-text w-full flex justify-center py-8 space-x-12 backdrop-blur-sm">
      <button onClick={() => sectionLink("tracks")} className="uppercase">
        top tracks
      </button>
      <button onClick={() => sectionLink("photos")} className="uppercase">
        photos
      </button>
    </nav>
  );
};

export default Header;
