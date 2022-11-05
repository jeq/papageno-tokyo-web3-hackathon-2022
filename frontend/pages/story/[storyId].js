import { useRouter } from "next/router";
import Image from "next/image";
import Markdown from "../../components/Markdown";
import Profile from "../../components/Profile";
import { ethers } from "ethers";
import abi from "../../src/utils/RecoveryStory.json";
import Link from "next/link";
import checkIfWalletIsConnected from "../../components/wallet/CheckWallet";

export default function Single() {
  //遷移前からのデータ取得
  const router = useRouter();

  // コントラクト接続の設定
  const contractAddress = "0xf348308B4b58ddb83d934D7d8f86350C51476b16";
  const contractABI = abi.abi;

  //ストーリー情報
  const storyInfo = {
    title: router.query.title,
    body: router.query.body,
    tags: router.query.tags,
    numLike: router.query.numLike,
    authorAddress: router.query.authorAddress,
    storyId: router.query.storyId,
  };

  const addLike = async () => {
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
        const storyTxn = await storyPortalContract.addLike(
          router.query.storyId,
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
    <div className="container mx-auto flex">
      <div className="lg:w-7/12">
        <div className="max-w-full pb-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
            alt="Mountain"
            layout="fill"
            width="1200"
            height="628"
          ></img>
        </div>
        <Markdown
          storyTitle={storyInfo.title}
          storyBody={storyInfo.body}
          storyTags={storyInfo.tags}
          authorAddress={storyInfo.authorAddress}
          numLike={storyInfo.numLike}
        ></Markdown>
      </div>
      <div className="lg:w-5/12 fixed right-0 px-6">
        <Profile></Profile>
        <div className="flex flex-col">
          <button onClick={addLike}>ストーリーにいいねする</button>
          <Link
            href={{ pathname: `/story/purchase/confirm/`, query: storyInfo }}
          >
            ストーリーを購入する
          </Link>
        </div>
      </div>
    </div>
  );
}
