import Head from "next/head";
import Card from "../components/story/Card";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../src/utils/RecoveryStory.json";
import checkIfWalletIsConnected from "../components/wallet/CheckWallet";

export default function Home() {
  //タブの状態変数
  const [tabNumber, setTabNumber] = useState(); //選択されたタブの番号
  const [tabStatus, setTabStatus] = useState([
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); //選択されたタブの番号

  //フィルタリング
  const [allStories, setAllStories] = useState([]);
  const [showedStories, setShowedStories] = useState([]); // List 形式で表示するストーリーデータ。

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x9a16D30960ABE49cBf72D506859Ef51836E3103D";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  //ウォレット接続チェック
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    tabStatus[tabNumber] = !tabStatus[tabNumber];
  }, [tabNumber]);

  console.log(tabNumber);

  const getAllStories = async () => {
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
          /* コントラクトからgetAllStoriesメソッドを呼び出す */
          const stories = await storyContract.getAllStories();
          /* UI側に必要な情報を取得 */
          const storiesCleaned = stories.map((story) => {
            return {
              storyTitle: story.storyTitle,
              tags: story.tags,
              storyBody: story.storyBody,
              dataURI: story.dataURI,
              createDate: new Date(story.createDate * 1000),
              updateDate: new Date(story.updateDate * 1000),
              numLike: story.numLike.toNumber(),
              storyId: story.storyId,
              tokenId: story.tokenId,
              authorAddress: story.authorAddress,
              likeUserAdress: story.likeUserAdress,
            };
          });

          /* React Stateにデータを格納する */
          setAllStories(storiesCleaned);
          setShowedStories(storiesCleaned);
        } else {
          console.log("ETHオブジェクトがありません");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getAllStories();
  }, []);

  return (
    <section className="container mx-auto">
      <section id="icatch" className="mt-12 text-gray-700">
        <h2 className="text-7xl font-bold mb-10">Story Box</h2>
        <div className="mb-5 text-2xl">
          立ち直った経験を「リカバリーストーリー」と、そのストーリーをもとにしたノンフィクションアートの制作過程を見届ける「プロセスストーリー」を購入することができるNFTマーケットプレイスです。
        </div>
      </section>
      <section id="sort" className="py-5 mb-5">
        <section id="sort_tag flex items-center">
          <span
            onClick={() => setTabNumber(0)}
            className="inline-block rounded-full text-xl px-6 py-2 bg-cyan-700 text-white mr-3 cursor-pointer mb-3"
          >
            <div className="flex">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              リカバリー
            </div>
          </span>
          <span
            onClick={() => setTabNumber(1)}
            className="inline-block rounded-full text-xl px-6 py-2 bg-rose-500 text-white cursor-pointer"
          >
            <div className="flex">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              プロセス
            </div>
          </span>
        </section>
        <section id="sort_category flex items-center">
          <span
            onClick={() => setTabNumber(2)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[2] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">統合失調症</div>
          </span>
          <span
            onClick={() => setTabNumber(3)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[3] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">ケガ</div>
          </span>
          <span
            onClick={() => setTabNumber(4)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[4] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">メンタルヘルス</div>
          </span>
          <span
            onClick={() => setTabNumber(5)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[5] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">職場</div>
          </span>
          <span
            onClick={() => setTabNumber(6)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[6] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">子育て</div>
          </span>
          <span
            onClick={() => setTabNumber(7)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[7] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">ライフスタイル</div>
          </span>
          <span
            onClick={() => setTabNumber(8)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[8] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">音楽</div>
          </span>
          <span
            onClick={() => setTabNumber(9)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[9] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">スポーツ</div>
          </span>
          <span
            onClick={() => setTabNumber(10)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[10] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">ADHD</div>
          </span>
          <span
            onClick={() => setTabNumber(11)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[11] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">マンガ</div>
          </span>
          <span
            onClick={() => setTabNumber(12)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[12] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">家族</div>
          </span>
          <span
            onClick={() => setTabNumber(13)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[13] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">自閉症スペクトラム</div>
          </span>
          <span
            onClick={() => setTabNumber(14)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[14] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">恋愛</div>
          </span>
          <span
            onClick={() => setTabNumber(15)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[15] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">思い出</div>
          </span>
          <span
            onClick={() => setTabNumber(16)}
            className={`inline-block rounded-full text-xl px-6 py-2 mb-3 border text-gray-700 mr-3 cursor-pointer ${
              tabStatus[16] ? "border-gray-700 border-2" : "border-gray-300"
            }`}
          >
            <div className="flex">子どもの頃</div>
          </span>
        </section>
      </section>
      <section className="my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {showedStories
          .slice(0)
          .reverse()
          .map((story, index) => {
            return (
              <Card
                title={story.storyTitle}
                body={story.storyBody}
                tags={story.tags}
                authorAddress={story.authorAddress}
                numLike={story.numLike}
                storyId={story.storyId}
                tokenId={story.tokenId}
                key={story.storyId}
              ></Card>
            );
          })}
      </section>
    </section>
  );
}
