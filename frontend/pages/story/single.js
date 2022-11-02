import Image from "next/image";
import Markdown from "../../components/Markdown";
import Profile from "../../components/Profile";
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
        <Profile></Profile>
        <div className="flex flex-col">
          <button>ストーリーにいいねする</button>
          <button>ストーリーを購入する</button>
        </div>
      </div>
    </div>
  );
}
