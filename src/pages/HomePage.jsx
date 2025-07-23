import heroImage from "../assets/images/heroImage.png";
import playImage from "../assets/images/polygon.svg";
import decoreImage from "../assets/images/decore.svg";
import planeImage from "../assets/images/plane.svg";

import NavBar from "../components/NavBar";
function HomePage() {
  return (
    <div className="relative h-dvh w-full pr-14 pl-28 font-[PT_Serif]">
      <div className="absolute top-0 right-0 -z-10">
        <img src={decoreImage} className="w-[766px] object-cover" alt="" />
      </div>
      <header className="mx-auto max-w-[1200px]">
        <NavBar />

        <div className="flex justify-between">
          <div className="max-[630] space-y-3 pt-20">
            <h2 className="text-xl font-bold text-[#DF6951] uppercase">
              Best Destination in the world
            </h2>
            <h1 className="text-[86px] leading-24 font-extrabold text-nowrap">
              Travel, enjoy <br /> and live a new <br /> and full life
            </h1>
            <p className="w-[477px] py-6 text-[17px] leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex gap-14 py-4">
              <button className="h-fit rounded-xl bg-yellow-500 px-6 py-4 text-lg text-white">
                Find Out More
              </button>

              <button className="flex items-center gap-4 text-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DF6951]">
                  <img className="h-4 w-4" src={playImage} alt="" />
                </span>
                <p>Play demo</p>
              </button>
            </div>
          </div>

          <div className="relative w-[766px]">
            <div className="absolute top-0 -left-1 -z-10">
              <img src={planeImage} alt="" />
            </div>
            <div className="absolute top-27 right-1 -z-10">
              <img src={planeImage} alt="" />
            </div>
            <img
              className="h-[764px] w-full object-contain"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
