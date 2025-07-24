import heroImage from "../assets/images/heroImage.png";
import playImage from "../assets/images/polygon.svg";
import decoreImage from "../assets/images/decore.svg";
import decoreImage2 from "../assets/images/decore_2.svg";
import planeImage from "../assets/images/plane.svg";
import micImage from "../assets/images/mic.svg";
import satellitedishImage from "../assets/images/satellite-dish.svg";
import settingImage from "../assets/images/setting.svg";

import NavBar from "../components/NavBar";
import ServiceCard from "../components/ServiceCard";
function HomePage() {
  return (
    <div className="relative h-dvh w-full pr-14 pl-28">
      <div className="absolute top-0 right-0 -z-10">
        <img src={decoreImage} className="w-[766px] object-cover" alt="" />
      </div>

      <header className="mx-auto max-w-[1200px]">
        <NavBar />

        <div className="flex justify-between">
          <div className="max-[630] pt-20">
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
            <div className="absolute top-27 right-10 -z-10">
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

      <section className="w-full py-10">
        <div className="relative space-y-2 py-5 py-8 text-center">
          <img src={decoreImage2} className="absolute top-0 right-0" alt="" />
          <h3 className="text-xl text-gray-600">Category</h3>
          <h2 className="text-6xl font-bold">We Offer Best Services</h2>
        </div>
        <div className="mt-25 flex justify-between">
          <ServiceCard
            sty="rounded-ee-xl rounded-tr-xr -bottom-2 -right-7"
            image={satellitedishImage}
          >
            <div>
              <h4 className="mb-2 text-xl font-medium">Calculated Weather</h4>
              <p className="font-medium text-gray-500">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </ServiceCard>
          <ServiceCard
            sty="rounded-es-xl rounded-tr-xl top-1 left-5 "
            image={planeImage}
          >
            <div>
              <h4 className="mb-2 text-xl font-medium">Best Flights</h4>
              <p className="font-medium text-gray-500">
                Engrossed listening Park gate sell they west hard for the.
              </p>
            </div>
          </ServiceCard>
          <ServiceCard
            sty="rounded-es-xl rounded-tr-xl -top-2 left-5 "
            image={micImage}
          >
            <div>
              <h4 className="mb-2 text-xl font-medium">Local Events</h4>
              <p className="font-medium text-gray-500">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </ServiceCard>
          <ServiceCard
            sty="rounded-es-xl rounded-tr-xl top-4 left-8.5"
            image={settingImage}
          >
            <div>
              <h4 className="mb-2 rounded-t text-xl font-medium">
                Customization
              </h4>
              <p className="font-medium text-gray-500">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </ServiceCard>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
