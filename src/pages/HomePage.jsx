import heroImage from "../assets/images/heroImage.png";
import playImage from "../assets/images/polygon.svg";
import decoreImage from "../assets/images/decore.svg";
import decoreImage2 from "../assets/images/decore_2.svg";
import decoreImage3 from "../assets/images/decore_3.svg";
import planeImage from "../assets/images/plane.svg";
import micImage from "../assets/images/mic.svg";
import satellitedishImage from "../assets/images/satellite-dish.svg";
import settingImage from "../assets/images/setting.svg";
import destinationImage1 from "../assets/images/destination_1.svg";
import destinationImage2 from "../assets/images/destination_2.svg";
import destinationImage3 from "../assets/images/destination_3.svg";
import navigationImage from "../assets/images/navigation_icon.svg";

import NavBar from "../components/NavBar";
import ServiceCard from "../components/ServiceCard";
function HomePage() {
  return (
    <div className="relative h-dvh w-full pr-8 pl-12 xl:pr-14 xl:pl-28">
      {/* <div className="absolute top-0 right-0 -z-10">
        <img src={decoreImage} className="w-[766px] object-cover" alt="" />
      </div> */}

      <header className="mx-auto max-w-[1200px]">
        <NavBar />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="max-[630] pt-20">
            <h2 className="py-4 text-lg font-bold text-[#DF6951] uppercase md:text-base xl:text-xl">
              Best Destination in the world
            </h2>
            <h1 className="max-w-[80%] text-[40px] leading-9 font-extrabold lg:text-[55px] lg:leading-14 xl:text-[86px] xl:leading-24">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="max-w-[477px] py-6 text-[17px] leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex gap-7 py-4 lg:gap-14">
              <button className="h-fit rounded-xl bg-yellow-500 px-3 py-2 text-base text-white xl:px-6 xl:py-4 xl:text-lg">
                Find Out More
              </button>

              <button className="flex items-center gap-4 md:text-base xl:text-lg">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DF6951] xl:h-14 xl:w-14">
                  <img className="h-4 w-4" src={playImage} alt="" />
                </span>
                <p>Play demo</p>
              </button>
            </div>
          </div>

          <div className="relative max-w-[650px] pt-14 pb-8 md:pt-0 md:pb-0 lg:w-[764px]">
            <div className="absolute top-10 -z-10 md:top-0 md:-left-1">
              <img src={planeImage} alt="" />
            </div>
            <div className="absolute top-32 right-20 -z-10 md:top-27 md:right-10">
              <img src={planeImage} alt="" />
            </div>
            <img
              className="h-[530px] w-full object-contain lg:h-full"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="w-full py-10">
        <div className="relative space-y-2 py-8 text-center">
          <img src={decoreImage2} className="absolute top-0 right-0" alt="" />
          <h3 className="text-xl text-gray-600">Category</h3>
          <h2 className="text-6xl font-bold">We Offer Best Services</h2>
        </div>
        <div className="mt-25 flex flex-wrap justify-evenly gap-4">
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

      <section className="w-full bg-white py-10">
        <div className="relative space-y-2 py-8 text-center">
          <h3 className="text-xl text-gray-600">Top Selling</h3>
          <h2 className="text-6xl font-bold">Top Destination</h2>
        </div>
        <div className="relative z-10 mt-25 flex max-w-[1200px] flex-wrap justify-evenly gap-6">
          <img
            className="absolute right-[8%] bottom-10 -z-10 min-[1118px]:-right-6 sm:right-[17%] md:max-[880px]:right-[26%]"
            src={decoreImage3}
            alt=""
          />
          <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div>
              <img
                src={destinationImage1}
                className="h-[330px] w-full object-cover object-top"
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="flex justify-between text-lg text-gray-500">
                <span>Rome, Italty</span>
                <span>$5,42k</span>
              </div>
              <div className="flex items-center gap-4 text-lg text-gray-500">
                <img src={navigationImage} alt="" />
                <span>10 Days Trip</span>
              </div>
            </div>
          </div>
          <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div>
              <img
                src={destinationImage2}
                className="h-[330px] w-full object-cover object-top"
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="flex justify-between text-lg text-gray-500">
                <span>London, UK</span>
                <span>$4.2k</span>
              </div>
              <div className="flex items-center gap-4 text-lg text-gray-500">
                <img src={navigationImage} alt="" />
                <span>12 Days Trip</span>
              </div>
            </div>
          </div>
          <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div>
              <img
                src={destinationImage3}
                className="h-[330px] w-full object-cover object-top"
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="flex justify-between text-lg text-gray-500">
                <span>Full Europe</span>
                <span>$155k</span>
              </div>
              <div className="flex items-center gap-4 text-lg text-gray-500">
                <img src={navigationImage} alt="" />
                <span>28 Days Trip</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10">
        <h3 className="text-xl text-gray-600">Easy and Fast</h3>

        <div className="flex"></div>
      </section>
    </div>
  );
}

export default HomePage;
