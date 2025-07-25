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
import chooseImage from "../assets/images/choose.svg";
import airportImage from "../assets/images/airport.svg";
import paymentImage from "../assets/images/payment.svg";
import greeceImage from "../assets/images/greece.jpg";

import NavBar from "../components/NavBar";
import ServiceCard from "../components/ServiceCard";
import {
  Building2,
  ChartBar,
  ChevronDown,
  ChevronUp,
  Heart,
  Leaf,
  Send,
} from "lucide-react";
function HomePage() {
  return (
    <div className="relative h-dvh w-full pr-8 pl-12 xl:pr-14 xl:pl-28">
      <div className="absolute top-0 right-0 -z-10">
        <img
          src={decoreImage}
          className="w-[300px] object-cover sm:w-[500px] lg:w-[656px] xl:w-[766px]"
          alt=""
        />
      </div>

      <header className="mx-auto max-w-[1200px]">
        <NavBar />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-[650px] max-[630px]:pt-20">
            <h2 className="w-fit py-4 text-lg font-bold text-[#DF6951] uppercase md:text-base xl:text-xl">
              Best Destination in the world
            </h2>
            <h1 className="max-w-full text-[40px] leading-9 font-extrabold lg:text-[50px] lg:leading-14 xl:text-[86px] xl:leading-24">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="max-w-[477px] py-6 text-[17px] leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex w-fit gap-7 py-4 lg:gap-14">
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
              className="object-to p h-[500px] object-cover lg:h-[600px] xl:h-[765px]"
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

        <div className="relative z-10 mx-auto mt-25 flex max-w-[1200px] flex-wrap justify-evenly gap-6 px-4">
          {/* Card 1 */}
          <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <img
              src={destinationImage1}
              className="h-[330px] w-full object-cover object-top"
            />
            <div className="space-y-3 p-6 text-gray-500">
              <div className="flex justify-between text-lg">
                <span>Rome, Italy</span>
                <span>$5.42k</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <img src={navigationImage} alt="" />
                <span>10 Days Trip</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <img
              src={destinationImage2}
              className="h-[330px] w-full object-cover object-top"
            />
            <div className="space-y-3 p-6 text-gray-500">
              <div className="flex justify-between text-lg">
                <span>London, UK</span>
                <span>$4.2k</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <img src={navigationImage} alt="" />
                <span>12 Days Trip</span>
              </div>
            </div>
          </div>

          {/* Card 3 — includes the absolute image */}
          <div className="relative w-fit">
            <div className="h-[460px] w-[330px] overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src={destinationImage3}
                className="h-[330px] w-full object-cover object-top"
              />
              <div className="space-y-3 p-6 text-gray-500">
                <div className="flex justify-between text-lg">
                  <span>Full Europe</span>
                  <span>$155k</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <img src={navigationImage} alt="" />
                  <span>28 Days Trip</span>
                </div>
              </div>

              {/* Image absolutely positioned inside last card */}
            </div>
            <img
              className="absolute -right-13 bottom-6 -z-10"
              src={decoreImage3}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="w-full space-y-5 bg-white py-25">
        <h3 className="text-xl text-gray-600">Easy and Fast</h3>

        <div className="flex max-w-[1114px] items-center justify-between">
          <div className="w-[30rem] space-y-8">
            <h2 className="text-5xl leading-14 font-bold">
              Book your next trip in 3 easy steps
            </h2>

            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] items-center gap-x-6">
              <img
                src={chooseImage}
                className="row-span-2 h-16 w-16 object-cover"
                alt=""
              />
              <h3 className="text-lg font-medium text-slate-500">
                Choose Destination
              </h3>
              <p className="font-light text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] items-center gap-x-4">
              <img
                src={airportImage}
                className="row-span-2 h-16 w-16 object-cover"
                alt=""
              />
              <h3 className="text-lg font-medium text-slate-500">
                Reach Airport on Selected Date{" "}
              </h3>
              <p className="font-light text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] items-center gap-x-4">
              <img
                src={paymentImage}
                className="row-span-2 h-16 w-16 object-cover"
                alt=""
              />
              <h3 className="text-lg font-medium text-slate-500">
                Make Payment
              </h3>
              <p className="font-light text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          <div className="w-[26rem] rounded-3xl bg-white p-6 shadow-xl">
            <img
              src={greeceImage}
              className="h-48 w-full rounded-2xl object-cover"
              alt=""
            />

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">Trip To Greece</h3>
              <p className="text-lg font-semibold text-slate-500">
                14-29 June | by Robbin joseph
              </p>

              <div className="flex gap-5">
                <button className="rounded-full bg-slate-200/60 p-3">
                  <Leaf className="text-slate-600" />
                </button>
                <button className="rounded-full bg-slate-200/60 p-3">
                  <ChartBar className="text-slate-600" />
                </button>
                <button className="rounded-full bg-slate-200/60 p-3">
                  <Send className="text-slate-600" />
                </button>
              </div>

              <div className="flex items-center justify-between py-2">
                <p className="flex items-center gap-4 text-xl text-slate-500">
                  <Building2 />
                  <span>24 people going</span>
                </p>
                <Heart className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full space-y-5 bg-white py-25">
        <div className="flex h-fit items-start justify-between">
          <div className="w-[455px] space-y-8">
            <h3 className="text-xl text-gray-600">Testimonials</h3>

            <h2 className="text-6xl leading-14 font-bold">
              What people say about Us.
            </h2>
          </div>

          <div className="relative h-[365px]">
            <div className="relative z-50 w-[550px]">
              <img
                src=""
                className="h-[68px] w-[68px] rounded-full bg-black"
                alt=""
              />
              <div className="ml-[34px] rounded-md bg-white p-6 shadow-lg">
                <p className="w-[400px] text-slate-400">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <h4 className="mt-4 text-lg text-slate-700">Mike taylor</h4>
                <p className="text-slate-400">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="-relative z-50 w-[550px] translate-x-15 -translate-y-45">
              <img
                src=""
                className="h-[68px] w-[68px] rounded-full bg-black"
                alt=""
              />
              <div className="ml-[34px] rounded-md border border-slate-100 bg-white p-6">
                <p className="w-[400px] text-slate-400">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <h4 className="mt-4 text-lg text-slate-700">Mike taylor</h4>
                <p className="text-slate-400">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="flex h-[300px] flex-col justify-center gap-6">
            <button className="w-fit bg-slate-50 p-2">
              <ChevronUp />
            </button>
            <button className="w-fit bg-slate-50 p-2 text-slate-400">
              <ChevronDown />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
