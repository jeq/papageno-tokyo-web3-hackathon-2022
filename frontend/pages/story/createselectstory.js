import dynamic from "next/dynamic";
import CardBorderdLink from "../../components/story/CardBorderdLink";
import Link from "next/link";

export default function CreateStory() {
  return (
    <div className="text-gray-700">
      <div className="lg:w-7/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">どのストーリーから二次創作を始めますか</p>
        <div className="mb-10 mx-10 bg-opacity-50">
          <CardBorderdLink></CardBorderdLink>
        </div>
      </div>
      <div className="lg:w-7/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">（リカバリーストーリーを一つも持っていない場合）二次創作のためのストーリーを持っていません</p>
        <ul className="text-center">
          <li>
            <Link
              href="createnew"
              className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
              >
              ひとつ前の画面に戻る
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
              >
              ストーリーを探しに行く
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
