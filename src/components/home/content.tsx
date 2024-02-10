import hero from "../../assets/hero_image.png";

function Content() {
  return (
    <div className="bg-gradient-to-b from-pink-300 via-pink-300 to-white   flex flec-col pt-0">
      <div className="text-8xl font-bold pt-40 p-20 w-full">
        <p className="m-0 hover:underline transition-transform">new 👋</p>
        <p className="m-0 hover:underline transition-transform">collections</p>
        <p className="m-0 hover:underline transition-transform">for everyone</p>
        <button className="text-base bg-red-500 text-white p-3 rounded-2xl hover:font-semibold  hover:bg-gradient-to-b from-purple-600 via-purple-500 to-white">
          <a href="/main?cartegory=all">Latest collections →</a>
        </button>
      </div>
      <div className="">
        <img src={hero} className="pt-12 p-14" height={1000} width={1000} />
      </div>
    </div>
  );
}

export default Content;
