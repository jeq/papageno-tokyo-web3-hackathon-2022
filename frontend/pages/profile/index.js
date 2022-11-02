import Head from "next/head";
import Link from "next/link";
import Profile from "../../components/Profile";
import List from "../../components/story/List";

export default function ShowProfile() {
  return (
    <>
      <Head>
        <title>プロフィール</title>
        <meta name="description" content="プロフィールのページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto flex">
          <div className="lg:w-4/12">
            <Profile></Profile>
            <div className="flex flex-col">
              <Link
                href="/profile/edit/"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                data-modal-toggle="defaultModal"
              >
                プロフィールを設定する
              </Link>
              <button>設定・ウォレット</button>
            </div>
          </div>
          <div className="lg:w-8/12 pl-8">
            <div className="flex items-center">
              <div className="border-b px-3 py-1 text-green-800 border-green-800 cursor-pointer hover:text-green-800 hover:border-green-800">
                ホーム
              </div>
              <div className="border-b px-3 py-1 text-gray-300 border-gray-300 cursor-pointer hover:text-green-800 hover:border-green-800">
                作成した
              </div>
              <div className="border-b px-3 py-1 text-gray-300 border-gray-300 cursor-pointer hover:text-green-800 hover:border-green-800">
                いいねした
              </div>
              <div className="border-b px-3 py-1 text-gray-300 border-gray-300 cursor-pointer hover:text-green-800 hover:border-green-800">
                所有している
              </div>
            </div>
            <div className="py-6">
              <List></List>
              <List></List>
              <List></List>
              <List></List>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
