export default function List() {
  return (
    <div className="container mx-auto flex py-4">
      <div className="lg:w-7/12">
        <div>
          本文が入るまたしばらくだめたたというぎてしまいはもうじぶんがたろな。生意気ましうんうはたら本文が入るまたしばらくだめたたというぎてしまいはもうじぶんがたろな。生意気ましうんうはたら
        </div>
        <div>
          <span className="rounded-full py-1 px-3">リカバリー</span>
          <span className="rounded-full py-1 px-3">統合失調症</span>
          <span className="rounded-full py-1 px-3">統合失調症</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block rounded-full text-sm text-yellow-500 hover:text-white hover:bg-yellow-500 font-semibold cursor-pointer transition delay-50 duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />{" "}
            </svg>
          </span>
          <span className="ml-1">99</span>
        </div>
      </div>
      <div className="lg:w-5/12 ml-6">
        <div className="max-w-full pb-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
            alt="Mountain"
            layout="fill"
            width="1200"
            height="628"
          ></img>
        </div>
      </div>
    </div>
  );
}
