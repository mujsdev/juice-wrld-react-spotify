import { SpotifyButton } from "../../components/Button";

const Login = ({ handleLogin }: any) => {
  return (
    <section className="bg-yellow h-screen flex items-center justify-center">
      <div className="max-w-xl flex flex-col">
        <div className="mix-blend-difference sepia-[1]">
          <h1>
            the man, <br /> the myth, <br /> the legend, <br />
            <span className="bg-yellow text-black inline-block mt-8">Juice Wrld.</span>
          </h1>
        </div>

        <SpotifyButton onClick={handleLogin} />
      </div>
    </section>
  );
};

export default Login;
