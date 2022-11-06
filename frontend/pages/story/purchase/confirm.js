import Image from "next/image";
import CardBorderdLink from "../../../components/story/CardBorderdLink";
import Link from "next/link";

export default function Completed(props) {
  //ストーリー情報
  const storyInfo = {
    title: props.title,
    storyId: props.storyId,
  };

  const purchaseStory = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // ABIを参照
        const storyPortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const storyTxn = await storyPortalContract.purchaseStory(
          storyInfo.storyId,
          {
            gasLimit: 8000000,
          }
        );
        console.log("記録しています。。", storyTxn.hash);
        await storyTxn.wait();
        console.log("記録が完了しました。", storyTxn.hash);
        console.log("Signerは、", signer);
      } else {
        console.log("ETHオブジェクトがありません", ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-gray-700">
      <div className="lg:w-5/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">
          本当にこのストーリーを購入しますか？
        </p>
        <p className="text-center text-lg mb-1">現在の価格 0.01ETH</p>
        <p className="text-center mb-10">いいねが増えるごとに価格が上がります</p>
        <Link
          href={{ pathname: `/story/purchase/complete`, query: storyInfo }}
          onClick={purchaseStory}
          className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
        >
          購入する
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
  );
}
