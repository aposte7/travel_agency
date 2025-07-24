function ServiceCard({ image, children, sty }) {
  return (
    <div className="z-0 flex h-[280px] w-[267px] flex-col justify-between rounded-3xl bg-white px-12 py-8 text-center shadow-xl">
      <div className="relative mx-auto w-fit">
        <span
          className={`${sty && sty} absolute -z-10 h-[49px] w-[50px] bg-[#FFF1DA]`}
        ></span>
        <img src={image} className="z-50 mx-auto object-cover" />
      </div>
      {children}
    </div>
  );
}

export default ServiceCard;
