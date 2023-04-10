import { ButtonHTMLAttributes } from "react";

interface ISpotifyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SpotifyButton = ({ ...props }: ISpotifyButtonProps) => {
  return (
    <button
      className="responsive-text text-white-100 bg-green mt-16 py-3 px-5 rounded-full shadow-md transform hover:-translate-y-2 hover:shadow-xl transition ease-in duration-150"
      {...props}>
      <span className="fab fa-spotify"></span> Sign in with Spotify
    </button>
  );
};

export default SpotifyButton;
