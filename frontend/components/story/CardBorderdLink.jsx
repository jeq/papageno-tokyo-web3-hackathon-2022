import Link from "next/link";

export default function CardBorderedLink() {
  return (
    <Link
      href="/story/single"
      className="hover:shadow-3xl block border-solid border border-gray-400 rounded-lg p-4 bg-white hover:drop-shadow-md delay-50 duration-300 ease-in-out"
    >
      <div className="flex">
        <div className="w-8/12 mr-2">
          <div className="mb-3 flex items-center">
            本文が入るまたしばらくだめたたというぎてしまいはもうじぶんがたろな。生意気ましうんうはたら本文が入るまたし
          </div>
          <div className="mb-3 flex items-center">
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
          <div className="mb-3">
            <span className="inline-block rounded-full px-3 py-1 text-sm border mr-2 mb-2 cursor-pointer">
              #統合失調症
            </span>
            <span className="inline-block rounded-full px-3 py-1 text-sm border mr-2 mb-2 cursor-pointer">
              #メンタルヘルス
            </span>
            <p className="text-gray-700 text-base flex items-center">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              著者の名前
            </p>
          </div>
        </div>
        <div className="w-4/12 items-center bg-blue-50 p-3 font-bold text-xl">
          <p className="text-cyan-700">
            これは４４文字タイトルが入るタイトルが入るタイトルが入るタイトルが入るタイトルが入るタイ
          </p>
        </div>
      </div>
    </Link>
  );
}
