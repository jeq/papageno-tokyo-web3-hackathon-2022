import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../src/utils/RecoveryStory.json";
import checkIfWalletIsConnected from "../../components/wallet/CheckWallet";
import Link from "next/link";

export default function Create() {
  //状態変数たち
  const [valueTitle, setValueTitle] = useState(""); //タイトル
  const [valueBody, setValueBody] = useState(""); //本文
  const [valueTags, setValueTags] = useState(""); //タグ

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x3204D4B38A904669298BB85937693bBa4e9c9128";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  const postStory = async () => {
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
        const storyTxn = await storyPortalContract.createStory(
          valueTitle,
          valueTags.split(","),
          valueBody,
          {
            gasLimit: 8000000,
          }
        );
        console.log("ミントしています。。", storyTxn.hash);
        await storyTxn.wait();
        console.log("ミントが完了しました。", storyTxn.hash);
        console.log("Signerは、", signer);
      } else {
        console.log("ETHオブジェクトがありません", ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { }, []);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div className="container lg:w-5/12 mx-auto my-20 text-gray-700">
      <p className="text-2xl font-bold text-center mb-10">
        あなたの立ち直った経験を書こう
      </p>
      <div className="sm:col-span-2 mb-6">
        <label className="inline-block text-sm sm:text-lg font-semibold	mb-2">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={valueTitle}
          onChange={(e) => setValueTitle(e.target.value)}
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-slate-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>
      <div className="sm:col-span-2 mb-6">
        <label className="inline-block text-sm sm:text-lg font-semibold	mb-2">
          本文
        </label>
        <textarea
          type="text"
          id="body"
          name="body"
          value={valueBody}
          onChange={(e) => setValueBody(e.target.value)}
          className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-slate-300 rounded outline-none transition duration-100 px-3 py-2 h-500"
        />
      </div>
      <div className="sm:col-span-2 mb-12">
        <label className="inline-block text-sm sm:text-lg font-semibold	mb-2">
          タグ（カンマ区切り）
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={valueTags}
          onChange={(e) => setValueTags(e.target.value)}
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-slate-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>

<<<<<<< HEAD
      {/* <button
        // onClick={saveStory}
        className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
      >
        ストーリーを保存する
      </button> */}
=======
>>>>>>> develop
      <button
        onClick={postStory}
        className="block w-full text-sm md:text-base font-semibold text-center text-white rounded outline-none px-8 py-3 mb-5 bg-slate-500 drop-shadow	mt-4 lg:mt-0 hover:bg-slate-600 focus-visible:ring ring-slate-300 transition duration-100"
      >
        ストーリーを出品する
      </button>
      <ul className="text-center">
        <li>
          <Link
          // 削除確認画面へ
            href="#"
            className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
          >
            ストーリーを削除する
          </Link>
        </li>
        <li>
          <Link
            href="createnew"
            className="inline-block mb-4 hover:border-b gray-900 border-gray-400 delay-50 ease-in-out"
          >
            ひとつ前の画面に戻る
          </Link>
        </li>
      </ul>
    </div>
  );
}
