import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-orange-300 p-6">
      <Link href="/" class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Story Box</span>
      </Link>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-orange-100 border-orange-400 hover:text-white hover:border-white">
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
        <div class="text-sm lg:flex-grow">
          <Link
            href="/story/archive/"
            class="block mt-4 lg:inline-block lg:mt-0 text-orange-100 hover:text-white mr-4"
          >
            ストーリーを読む
          </Link>
          <Link
            href="/story/tag/"
            class="block mt-4 lg:inline-block lg:mt-0 text-orange-100 hover:text-white mr-4"
          >
            タグから探す
          </Link>
        </div>
        <div>
          <Link
            href="/profile/"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0"
          >
            マイページ
          </Link>
        </div>
      </div>
    </nav>
  );
}
