export default function List() {
  return (
    <div className="container mx-auto mb-6 flex px-4 rounded-lg py-4 hover:cursor-pointer hover:bg-gray-100 transition duration-100 ease-in-out">
      <div className="lg:w-8/12">
        <div className="mb-3">
          <span className="text-gray-400">
          ［
          <svg className="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          下書き］
          </span>
          本文が入るまたしばらくだめたたというぎてしまいはもうじぶんがたろな。生意気ましうんうはたら本文が入るまたしばらくだめたたというぎてしまいはもうじぶんがたろな。生意気ましうんうはたら
        </div>
        <div className="mb-3 text-xs">
          <span className="rounded-full border-cyan-700 py-0.5 px-2 mr-2 text-white bg-cyan-700">リカバリー</span>
          <span className="rounded-full border-rose-500 py-0.5 px-2 mr-2 text-white bg-rose-500">プロセス</span>
          <span className="rounded-full border py-0.5 px-2 mr-2">統合失調症</span>
          <span className="rounded-full border py-0.5 px-2 mr-2">統合失調症</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block rounded-full text-sm text-rose-400 font-semibold transition delay-50 duration-300 ease-in-out">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
          </span>
          <span className="ml-1 text-sm">99</span>
        </div>
      </div>
      <div className="lg:w-4/12 ml-6">
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
