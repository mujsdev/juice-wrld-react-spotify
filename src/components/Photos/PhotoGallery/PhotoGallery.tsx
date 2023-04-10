import juice00 from "../../../assets/images/gallery/0.webp";
import juice01 from "../../../assets/images/gallery/1.webp";
import juice02 from "../../../assets/images/gallery/2.webp";
import juice03 from "../../../assets/images/gallery/3.webp";
import juice04 from "../../../assets/images/gallery/4.webp";
import juice05 from "../../../assets/images/gallery/5.webp";
import juice06 from "../../../assets/images/gallery/6.webp";
import juice07 from "../../../assets/images/gallery/7.webp";
import juice08 from "../../../assets/images/gallery/8.webp";
import juice09 from "../../../assets/images/gallery/9.webp";
import juice10 from "../../../assets/images/gallery/10.webp";
import juice11 from "../../../assets/images/gallery/11.webp";
import juice12 from "../../../assets/images/gallery/12.webp";
import juice13 from "../../../assets/images/gallery/13.webp";
import juice14 from "../../../assets/images/gallery/14.webp";

export const photoArray = [
  {
    url: juice00,
    name: "juice00",
  },
  {
    url: juice01,
    name: "juice01",
  },
  {
    url: juice02,
    name: "juice02",
  },
  {
    url: juice03,
    name: "juice03",
  },
  {
    url: juice04,
    name: "juice04",
  },
  {
    url: juice05,
    name: "juice05",
  },
  {
    url: juice06,
    name: "juice06",
  },
  {
    url: juice07,
    name: "juice07",
  },
  {
    url: juice08,
    name: "juice08",
  },
  {
    url: juice09,
    name: "juice09",
  },
  {
    url: juice10,
    name: "juice10",
  },
  {
    url: juice11,
    name: "juice11",
  },
  {
    url: juice12,
    name: "juice12",
  },
  {
    url: juice13,
    name: "juice13",
  },
  {
    url: juice14,
    name: "juice14",
  },
];

const photoGallery = () => {
  return (
    <div className="min-w-full overflow-x-auto flex">
      {photoArray.map((photo, index) => {
        return (
          <img src={photo.url} key={index} alt={photo.name} className="w-auto xs:h-32 sm:h-48 m-1" loading="lazy" />
        );
      })}
    </div>
  );
};

export default photoGallery;
