export default function HeaderNav() {
  return (
    <Link href="single">
      <a className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100 hover:shadow-3xl">
        <img
          className="w-full"
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="text-gray-700 font-bold text-xl mb-2">タイトル</div>
          <p className="text-gray-700 text-base">著者の名前</p>
        </div>
        <div className="px-6 pb-2 flex items-center">
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
          <span className="inline-block text-yellow-500 h-6 ml-1">3</span>
        </div>
        <div className="px-6 pt-2 pb-2">
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-gray-600 transition delay-50 duration-300 ease-in-out">
            #統合失調症
          </span>
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-gray-600 transition delay-50 duration-300 ease-in-out">
            #メンタルヘルス
          </span>
        </div>
      </a>
    </Link>
  );
}
