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
            gasLimit: 800000,
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
      <div className="lg:w-6/12 mx-auto my-20">
        <p className="text-2xl font-bold text-center mb-10">
          本当にこのストーリーを購入しますか？
        </p>
        <Link
          href={{ pathname: `/story/purchase/complete`, query: storyInfo }}
          onClick={purchaseStory}
        >
          購入する
        </Link>
      </div>
    </div>
  );
}
