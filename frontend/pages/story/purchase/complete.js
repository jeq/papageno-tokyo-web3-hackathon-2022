import Image from "next/image";
import CardBorderdLink from "../../../components/story/CardBorderdLink";
import Link from "next/link";

export default function Completed() {
  return (
    <div className="text-gray-700">
      <div className="lg:w-6/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">
          購入ありがとうございます！
          <br />
          あなたが「ストーリー名」のオーナーになりました
        </p>
        <div className="mb-10">
          <CardBorderdLink></CardBorderdLink>
        </div>
        <ul className="text-center">
          <li>
            <Link
              href="/profile"
              className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
            >
              購入したストーリーの一覧を見る
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
            >
              HOME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
