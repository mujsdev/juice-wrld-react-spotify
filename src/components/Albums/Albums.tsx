interface IAlbumsProps {
  albums: any;
}

const Albums = ({ albums }: IAlbumsProps) => {
  return (
    <div className="md:w-3/12 xs:pt-16 md:pt-0">
      <h2 className="heading-01-yellow tracking-widest xs:text-30 lg:text-50 mb-10">albums</h2>

      <div className="md:h-[81vh] md:overflow-auto">
        {albums.map((album: any) => {
          return (
            <a
              className="md:w-64"
              key={album.id}
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer">
              {album.images
                .map((img: any, index: number) => {
                  return <img className="md:w-64" src={img.url} alt={album.name} key={index} />;
                })
                .slice(0, 1)}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
