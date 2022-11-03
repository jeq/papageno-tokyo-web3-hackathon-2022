import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/story/Card";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../src/utils/RecoveryStory.json";

export default function Home() {
  // パブリックウォレットを保存するための状態変数
  const [currentAccount, setCurrentAccount] = useState("");
  // すべてのstoriesを保存する状態変数
  const [allStories, setAllStories] = useState([]);
  // デプロイされたコントラクトアドレスを保持
  const contractAddress = "0x7949D579463D19b9ff3cf51fEb66a51e1fa610DA";
  // コントラクトからすべてのstoriesを取得するメソッド
  // ABIの内容
  const contractABI = abi.abi;

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
          /* コントラクトからgetNftメソッドを呼び出す */
          const stories = await storyContract.getNft();
          /* UI側に必要な情報を取得 */
          const storiesCleaned = stories.map((story) => {
            return {
              storyTitle: story.storyTitle,
              tags: story.tags,
              numLike: numLike,
              storyBody: story.storyBody,
              authorAdress: story.authorAdress,
            };
          });

          /* React Stateにデータを格納する */
          setAllStories(storiesCleaned);
        } else {
          console.log("ETHオブジェクトがありません");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  getAllStories();

  //Cardに必要な情報をuseStateで渡す

  return (
    <section className="container mx-auto">
      <section id="icatch" className="">
        <h2 className="text-5xl font-bold mb-10">Story Box</h2>
        <div className="mb-10">
          立ち直った経験を「リカバリーストーリー」と、そのストーリーをもとにしたノンフィクションアートの制作過程を見届ける「プロセスストーリー」を購入することができるNFTマーケットプレイスです。
        </div>
      </section>
      <section id="sort" className="py-5">
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
        <Card
          title={"タイトル1"}
          tags={["統合失調症", "メンタルヘルス"]}
          authorAddress={"x0111111"}
          numLike={3}
        ></Card>
        <Card
          title={"タイトル2"}
          tags={["統合失調症", "メンタルヘルス"]}
          authorAddress={"x0111111"}
          numLike={5}
        ></Card>
        <Card
          title={"タイトル3"}
          tags={["統合失調症", "メンタルヘルス"]}
          authorAddress={"x0111111"}
          numLike={7}
        ></Card>
      </section>
    </section>
  );
}
