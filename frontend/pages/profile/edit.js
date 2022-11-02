import Head from "next/head";
import Profile from "../../components/Profile";

export default function EditProfile() {
  return (
    <>
      <Head>
        <title>プロフィールの編集</title>
        <meta name="description" content="プロフィールの編集" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto">
          <div className="w-6/12 mx-auto">
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                名前
              </label>
              <input
                name="name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                プロフィール
              </label>
              <input
                name="name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>保存する</div>
          </div>
        </div>
      </main>
    </>
  );
}
