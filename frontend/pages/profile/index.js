import Head from "next/head";
import Link from "next/link";
import Profile from "../../components/Profile";
import List from "../../components/story/List";
import React, { useState, useEffect } from "react";
import checkIfWalletIsConnected from "../../components/wallet/CheckWallet";
import { ethers } from "ethers";
import abi from "../../src/utils/RecoveryStory.json";

export default function ShowProfile() {
  // 状態変数たち
  const [myProfile, setMyProfile] = useState([]); //プロフィール
  const [currentAccount, setCurrentAccount] = useState(""); //ウォレットアドレス

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x1F5Ea3Cf10e8a4f6feAF152C50e3214B673eDCc8";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  //ウォレットアドレスを取得
  const getprofileAddress = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("ウォレットアドレスを取得します");
      console.log(account);
      setCurrentAccount(account);
    } else {
      console.log("認証されたアカウントがありません");
    }
  };

  //自分のプロフィール情報を表示
  const viewMyProfile = async () => {
    if (typeof window !== "undefined") {
      const { ethereum } = window;

      try {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const myContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          /* コントラクトからgetUserProfileメソッドを呼び出す */
          console.log("I am" + currentAccount);
          const arrayProfile = await myContract.getUserProfile(currentAccount);
          console.log(arrayProfile);

          //配列を分割して変数に格納
          let [profileName, profileBiography, profileAvatar, profileAddress] =
            arrayProfile;

          //objectに変換
          const objectProfile = {
            profileName,
            profileBiography,
            profileAvatar,
            profileAddress,
          };

          /* React Stateにデータを格納する */
          setMyProfile(objectProfile);
        } else {
          console.log("ETHオブジェクトがありません");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getprofileAddress();
    viewMyProfile();
  }, []);

  return (
    <>
      <Head>
        <title>プロフィール</title>
        <meta name="description" content="プロフィールのページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto my-10 px-10 flex text-gray-700">
          <div className="lg:w-4/12 px-6">
            <Profile
              profileName={myProfile.profileName}
              profileAvatar={myProfile.profileAvatar}
              profileBiography={myProfile.profileBiography}
              profileAddress={myProfile.profileAddress}
            ></Profile>
            <div className="flex flex-col">
              <Link
                href="/profile/edit/"
                className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
                type="button"
                data-modal-toggle="defaultModal"
              >
                プロフィールを編集する
              </Link>
            </div>
          </div>
          <div className="lg:w-8/12 px-6">
            <div className="flex items-center mx-4">
              <div
                className="
                border-b-2 px-10 py-1 text-slate-500 border-slate-500 cursor-pointer hover:text-slate-500 hover:border-slate-500 hover:font-semibold
                font-bold"
              >
                ホーム
              </div>
              <div className="border-b px-10 py-1 text-gray-400 border-gray-400 cursor-pointer hover:text-slate-500 hover:border-slate-500 hover:border-b-2 hover:font-semibold transition duration-100 ease-in-out">
                作成した
              </div>
              <div className="border-b px-10 py-1 text-gray-400 border-gray-400 cursor-pointer hover:text-slate-500 hover:border-slate-500 hover:border-b-2 hover:font-semibold transition duration-100 ease-in-out">
                いいねした
              </div>
              <div className="border-b px-10 py-1 text-gray-400 border-gray-400 cursor-pointer hover:text-slate-500 hover:border-slate-500 hover:border-b-2 hover:font-semibold transition duration-100 ease-in-out">
                所有している
              </div>
            </div>
            <div className="py-6">
              <div className="">
                <List></List>
                <List></List>
                <List></List>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
