import Head from "next/head";
import Card from "../components/story/Card";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../src/utils/RecoveryStory.json";
import checkIfWalletIsConnected from "../components/wallet/CheckWallet";

export default function Home() {
  //フィルタリング
  const [allStories, setAllStories] = useState([]);
  const [showedStories, setShowedStories] = useState([]); // List 形式で表示するストーリーデータ。

  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x3204D4B38A904669298BB85937693bBa4e9c9128";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
              icatchSvg: story.icatchSvg,
              createDate: new Date(story.createDate * 1000),
              updateDate: new Date(story.updateDate * 1000),
              numLike: story.numLike.toNumber(),
              storyId: story.storyId,
              authorAdress: story.authorAdress,
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
  getAllStories();

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
          <span className="inline-block rounded-full px-6 py-2 bg-blue-900 text-white mr-3 cursor-pointer mb-3">
            <div className="flex">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
          <span className="inline-block rounded-full px-6 py-2 bg-blue-900 text-white cursor-pointer">
            <div className="flex">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">統合失調症</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">ケガ</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">メンタルヘルス</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">職場</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">子育て</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">ライフスタイル</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">音楽</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">統合失調症</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">ADHD</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">マンガ</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">家族</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">自閉症スペクトラム</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">恋愛</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
            <div className="flex">思い出</div>
          </span>
          <span className="inline-block rounded-full px-6 py-2 mb-3 border border-gray-500 text-gray-800 mr-3 cursor-pointer">
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
                key={story}
              ></Card>
            );
          })}
      </section>
    </section>
  );
}
