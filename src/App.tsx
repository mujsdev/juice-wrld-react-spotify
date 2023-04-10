import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { signInWithSpotify, supabase } from "./auth/supabase";
import Header from "./components/Layouts/Header";
import Photos from "./components/Photos";
import Footer from "./components/Layouts/Footer";
import Hero from "./components/Hero";
import Tracks from "./components/Tracks";
import Albums from "./components/Albums";

import Login from "./pages/Login";

const App = () => {
  const spotifyApi = new SpotifyWebApi();

  const [topTracks, setTopTracks] = useState<any>();
  const [albums, setAlbums] = useState<any>();

  const getTopTracks = async () => {
    try {
      await spotifyApi.getArtistTopTracks("4MCBfE4596Uoi2O4DtmEMz", "US").then((res: any) => {
        setTopTracks(res.tracks);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getAlbums = async () => {
    try {
      await spotifyApi.getArtistAlbums("4MCBfE4596Uoi2O4DtmEMz").then((res: any) => {
        setAlbums(res.items);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // supabase.auth.onAuthStateChange(async (event, session) => {
    //   if (event == "SIGNED_IN") {
    //     console.log("Access token:", session?.provider_token);
    //     spotifyApi.setAccessToken(session?.provider_token ?? null);
    //   }
    //   if (event == "SIGNED_OUT") {
    //     spotifyApi.setAccessToken(null);
    //   }
    // });
    // getTopTracks();
    // getAlbums();

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "SIGNED_IN") {
        spotifyApi.setAccessToken(session?.provider_token ?? null);
        await getTopTracks();
        await getAlbums();
      }

      if (event == "SIGNED_OUT") {
        spotifyApi.setAccessToken(null);
        setTopTracks([]);
        setAlbums([]);
      }
    });
  }, []);

  return (
    <>
      {!topTracks || !albums ? (
        <div className="w-full text-center font-medium">
          <Login handleLogin={signInWithSpotify} />
        </div>
      ) : (
        <main className="font-medium ">
          <Header />
          <Hero />

          <section id="tracks" className="bg-black text-white-200 xs:p-8 sm:p-16 md:p-24 ">
            <div className="max-w-7xl mx-auto flex xs:flex-col md:flex-row">
              <Tracks topTracks={topTracks} />
              <Albums albums={albums} />
            </div>
          </section>

          <Photos />
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
