import Head from "next/head";
import Profile from "../../components/Profile";
import { ethers } from "ethers";
import abi from "../../src/utils/RecoveryStory.json";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Edit() {
  //状態変数たち
  const [valueName, setValueName] = useState(""); //名前
  const [valueBiography, setValueBiography] = useState(""); //bio
  const [valueAvatar, setValueAvavatar] = useState(""); //avatar

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x1F5Ea3Cf10e8a4f6feAF152C50e3214B673eDCc8";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  const editProfile = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // ABIを参照
        const profileContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const profileTxn = await profileContract.createUserProfile(
          valueName,
          valueBiography,
          valueAvatar,
          {
            gasLimit: 8000000,
          }
        );
        console.log("ミントしています。。", profileTxn.hash);
        await profileTxn.wait();
        console.log("ミントが完了しました。", profileTxn.hash);
        console.log("Signerは、", signer);
      } else {
        console.log("ETHオブジェクトがありません", ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
              />
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                プロフィール
              </label>
              <input
                name="name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                value={valueBiography}
                onChange={(e) => setValueBiography(e.target.value)}
              />
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                画像
              </label>
              <input
                type="radio"
                name="example"
                value={valueAvatar}
                onClick={(e) => setValueAvatar(1)}
              />
              <Image
                src="https://gateway.pinata.cloud/ipfs/QmPF8Tgt9Ro1QkAmm5oeT4ysjceHfLPTAjxKgSoNY2Q8Xx"
                width={100}
                height={100}
              />
              <input
                type="radio"
                name="example"
                value={valueAvatar}
                onClick={(e) => setValueAvatar(2)}
              />
              <Image
                src="https://gateway.pinata.cloud/ipfs/QmajCEJgDtGqPAgSALbN74zqJcCN7TrpAxgutBs4FwZnoZ"
                width={100}
                height={100}
              />
              <input
                type="radio"
                name="example"
                value={valueAvatar}
                onClick={(e) => setValueAvatar(3)}
              />
              <Image
                src="https://gateway.pinata.cloud/ipfs/QmX5dTmMNYSJ37ZjmgTL2wycnuqPeH1CWSbr3vFL87M47C"
                width={100}
                height={100}
              />
              <input
                type="radio"
                name="example"
                value={valueAvatar}
                onClick={(e) => setValueAvatar(4)}
              />
              <Image
                src="https://gateway.pinata.cloud/ipfs/QmbFHVPH1VcUjiju9KAf8cknkAyXXDEehe23hdaHc8i54A"
                width={100}
                height={100}
              />
              <input
                type="radio"
                name="example"
                value={valueAvatar}
                onClick={(e) => setValueAvatar(5)}
              />
              <Image
                src="https://gateway.pinata.cloud/ipfs/QmZ1p634cxLqBtU98EYYNisVBVyYFshvkCQcPSStjYbbBS"
                width={100}
                height={100}
              />
            </div>
            <button onClick={editProfile}>保存する</button>
          </div>
        </div>
      </main>
    </>
  );
}
