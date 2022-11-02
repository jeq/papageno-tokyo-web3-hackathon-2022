import Image from "next/image";
import Markdown from "../../components/Markdown";
import { ethers } from "ethers";

export default function Archive() {
  return (
    <div className="container mx-auto flex">
      <div className="lg:w-7/12">
        <div className="max-w-full pb-8">
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
      <div className="lg:w-5/12 pl-6">
        <div className="font-bold">このストーリーを書いた人</div>
        <span className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-40 h-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <div>宮沢賢治</div>
        <div className="flex flex-col">
          <button>ストーリーにいいねする</button>
          <button>ストーリーを購入する</button>
        </div>
      </div>
    </div>
  );
}
