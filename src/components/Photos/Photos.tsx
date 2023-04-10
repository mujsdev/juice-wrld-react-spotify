import PhotoGallery from "./PhotoGallery";

const Photos = () => {
  return (
    <section id="photos" className="xs:p-8 sm:p-16 md:p-24 bg-white-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="xs:mb-5 sm:mb-10">
          in the loving memory <br /> of the legend...
        </h2>
        <PhotoGallery />
      </div>
    </section>
  );
};

export default Photos;
