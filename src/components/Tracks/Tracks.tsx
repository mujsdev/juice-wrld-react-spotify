import { convertMsToTime } from "../../utils/convertMsToTime";

interface ITracksProps {
  topTracks: Array<{}>;
}

const Tracks = ({ topTracks }: ITracksProps) => {
  return (
    <div className="md:w-9/12 responsive-text">
      <h2 className="text-yellow xs:mb-5 sm:mb-10">top tracks</h2>
      {topTracks.map((track: any, index: number) => {
        return (
          <a
            href={track.external_urls.spotify}
            key={track.id}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-11/12 flex py-6 border-b-2 border-yellow hover:bg-yellow hover:text-black transition ease-in-out duration-150">
            <p className="xs:w-2/12 text-lef font-medium xs:px-4 sm:px-12">
              {(index + 1 < 10 ? "0" : "") + (index + 1)}
            </p>
            <p className="xs:w-8/12 font-bold">{track.name}</p>
            <p className="xs:w-2/12 text-right font-light xs:px-4 sm:px-8">{convertMsToTime(track.duration_ms)}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Tracks;
