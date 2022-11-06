import dynamic from "next/dynamic";
import Link from "next/link";


export default function CreateStory() {
  return (
    <div className="text-gray-700">
      <div className="lg:w-7/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">どちらのストーリーを書きますか</p>
        <div className="mb-10 mx-10 bg-opacity-50">
          <Link
            href="create"
            className="block border-solid border border-gray-400 rounded-lg p-4 w-full bg-white mb-8 hover:shadow-3xl hover:drop-shadow-md delay-50 duration-300 ease-in-out"
          >
            <span className="inline-block align-middle rounded-full px-6 py-2 bg-cyan-700 text-white mr-3 cursor-pointer">
              <div className="flex">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                リカバリー
              </div>
            </span>
            <span className="text-2xl align-middle">
              立ち直った経験をリカバリーストーリーとしてを書く
            </span>
          </Link>
          <Link
            href="createselectstory"
            className="block border-solid border border-gray-400 rounded-lg p-4 w-full bg-white mb-8 hover:shadow-3xl hover:drop-shadow-md delay-50 duration-300 ease-in-out"
          >
            <span className="inline-block align-middle rounded-full px-6 py-2 bg-rose-500 text-white mr-3 cursor-pointer">
              <div className="flex">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                プロセス
              </div>
            </span>
            <span className="text-2xl align-middle">
              誰かのストーリーから二次創作を作る
            </span>
          </Link>
          <div className="text-center">
            <Link
              href="/"
              className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
