import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav class="container mx-auto flex items-center justify-between flex-wrap py-6">
      <Link href="/" class="flex items-center flex-shrink-0 mr-6 text-gray-800">
        <span class="font-semibold text-xl tracking-tight">Story Box</span>
      </Link>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-800 hover:text-gray-800 hover:border-gray-800">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/1000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div className="flex items-center">
          <span className="mr-4">
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
          </span>
          <Link
            href="/profile/"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-orange-500 hover:bg-gray-800 mt-4 lg:mt-0"
          >
            ストーリーを書く
          </Link>
        </div>
      </div>
    </nav>
  );
}
