import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../src/utils/RecoveryStory.json";
import CheckWallet from "../../components/CheckWallet";

export default function Create() {
  //状態変数たち
  const [currentAccount, setCurrentAccount] = useState(""); //パブリックウォレット
  const [valueTitle, setValueTitle] = useState(""); //タイトル
  const [valueBody, setValueBody] = useState(""); //本文
  const [valueTags, setValueTags] = useState(""); //タグ

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x7949D579463D19b9ff3cf51fEb66a51e1fa610DA";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  const Editor = dynamic(import("../../components/editor/Index"), {
    ssr: false,
  });

  // window.ethereumへのアクセス確認
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Metamaskを持っているか確認してください");
        return;
      } else {
        console.log("Metamaskが接続されています。", ethereum);
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("認証されたアカウントがあります");
        setCurrentAccount(account);
      } else {
        console.log("認証されたアカウントがありません");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          ["統合失調症", "メンタルヘルス"],
          valueBody,
          "svgs",
          {
            gasLimit: 600000,
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
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="sm:col-span-2">
        <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={valueTitle}
          onChange={(e) => setValueTitle(e.target.value)}
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>
      <Editor setValueBody={setValueBody} />
      <button
        onClick={postStory}
        className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      >
        投稿する
      </button>
    </div>
  );
}
