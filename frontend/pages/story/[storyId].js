import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
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
  const contractAddress = "0x9a16D30960ABE49cBf72D506859Ef51836E3103D";
  const contractABI = abi.abi;

  //ストーリー情報
  const storyInfo = {
    title: router.query.title,
    body: router.query.body,
    tags: router.query.tags,
    numLike: router.query.numLike,
    authorAddress: router.query.authorAddress,
    storyId: router.query.storyId,
    tokenId: router.query.tokenId,
  };

  // 著者のプロフィールを保存する状態変数
  const [authorProfile, setAuthorProfile] = useState([]);

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
        const storyTxn = await storyPortalContract.buyNft(
          storyInfo.tokenId,
          storyInfo.storyId,
          {
            gasLimit: 8000000,
          }
        );
        console.log("記録しています。。", storyTxn.hash);
        await storyTxn.wait();
        console.log("記録が完了しました。", storyTxn.hash);
        alert("いいねしました。ありがとうございます！");
        console.log("Signerは、", signer);
      } else {
        console.log("ETHオブジェクトがありません", ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const buyStory = async () => {
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
        const storyTxn = await storyPortalContract.buyNft(storyInfo.storyId, {
          gasLimit: 8000000,
        });
        console.log("記録しています。。", storyTxn.hash);
        await storyTxn.wait();
        console.log("記録が完了しました。", storyTxn.hash);
        alert("いいねしました。ありがとうございます！");
        console.log("Signerは、", signer);
      } else {
        console.log("ETHオブジェクトがありません", ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAuthorProfile = async () => {
    if (typeof window !== "undefined") {
      const { ethereum } = window;

      try {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const storyContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          /* コントラクトからgetUserProfileメソッドを呼び出す */
          const arrayProfile = await storyContract.getUserProfile(
            storyInfo.authorAddress
          );

          //配列を分割して変数に格納
          let [authorName, authorBiography, authorAvatar, authorAddress] =
            arrayProfile;

          //objectに変換
          const objectProfile = {
            authorName,
            authorBiography,
            authorAvatar,
            authorAddress,
          };

          /* React Stateにデータを格納する */
          setAuthorProfile(objectProfile);
        } else {
          console.log("ETHオブジェクトがありません");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getAuthorProfile();
  }, []);

  console.log(authorProfile.authorName);

  return (
    <div className="container mx-auto flex px-10 text-gray-700">
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
      <div className="lg:w-5/12 px-10 sticky right-0">
        <div className="font-bold">このストーリーを書いた人</div>
        <Profile
          profileName={authorProfile.authorName}
          profileAvatar={authorProfile.authorAvatar}
          profileBiography={authorProfile.authorBiography}
          profileAddress={authorProfile.authorAddress}
        ></Profile>
        <div className="flex flex-col">
          <button
            onClick={addLike}
            className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
          >
            <svg
              className="inline-block w-6 h-6 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            ストーリーにいいねする
          </button>
          <Link
            onClick={buyNft}
            href={{ pathname: `/story/purchase/confirm/`, query: storyInfo }}
            className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
            type="button"
            data-modal-toggle="defaultModal"
          >
            <svg
              className="inline-block w-6 h-6 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            ストーリーを購入する
          </Link>
        </div>
      </div>
    </div>
  );
}
