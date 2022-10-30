import Image from "next/image";
import Markdown from "../../components/Markdown";

export default function Archive() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
      <div className="relative w-full px-12 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-8 lg:pb-28">
        <div className="relative w-full py-12 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-16">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
            alt="Mountain"
            layout="fill"
            width="1200"
            height="628"
          ></img>
        </div>
        <Markdown></Markdown>
      </div>
    </div>
  );
}
