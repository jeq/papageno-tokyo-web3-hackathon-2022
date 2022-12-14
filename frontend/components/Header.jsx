import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap py-6">
      <Link
        href="/"
        className="flex items-center flex-shrink-0 mr-6 text-gray-800"
      >
        <span className="font-semibold text-3xl tracking-tight text-gray-700">Story Box</span>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 hover:text-gray-800 hover:border-gray-800">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/1000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="flex items-center">
          <Link href="/profile/" className="mr-4">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
          <Link
            href="/story/createnew/"
            className="
            inline-block text-base text-white px-4 py-2 drop-shadow	leading-none border rounded border-slate-500 bg-slate-500 hover:bg-slate-600 mt-4 lg:mt-0"
          >
            ストーリーを書く
          </Link>
        </div>
      </div>
    </nav>
  );
}
