// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

// いくつかの OpenZeppelin のコントラクトをインポート。
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// utils ライブラリをインポートして文字列の処理を行う。
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// Base64.solコントラクトからSVGとJSONをBase64に変換する関数をインポート。
import { Base64 } from "./libraries/Base64.sol";

// インポートした OpenZeppelin のコントラクトを継承。
// 継承したコントラクトのメソッドにアクセスできるようになる。
contract Story is ERC721URIStorage {

  // OpenZeppelin が tokenIds を簡単に追跡するために提供するライブラリを呼び出しています
  using Counters for Counters.Counter;

  // _tokenIdsを初期化（_tokenIds = 0）
  Counters.Counter private _tokenIds;

  // SVGコードを作成。
  // 変更されるのは、表示される単語だけ。
  // すべてのNFTにSVGコードを適用するために、baseSvg変数を作成。
  string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: #02B2B4; font-family: 'Hiragino Maru Gothic Pro'; font-size: 24px; }</style><rect width='100%' height='100%' fill='#E9E4DF' /><text x='50%' y='50%' className='base' dominant-baseline='middle' text-anchor='middle'>";

  // NFT トークンの名前とそのシンボルを渡します。
  constructor() ERC721 ("RecoveryStoryNFT", "RSN") {
    console.log("This is my Recovery Story contract.");
  }

  // シードを生成する関数を作成します。
  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }

  // ユーザーが NFT を取得するために実行する関数です。
  function mintNFT() public {

    // 現在のtokenIdを取得します。tokenIdは0から始まります。
    uint256 newItemId = _tokenIds.current();

    string memory recoveryStoryTitle = unicode"私のリカバリーストーリー";

    // 3つの単語を連結して、<text>タグと<svg>タグで閉じる。
    string memory finalSvg = string(abi.encodePacked(baseSvg, recoveryStoryTitle, "</text></svg>"));
	  // NFTに出力されるテキストをターミナルに出力。
	  console.log("\n----- SVG data -----");
    console.log(finalSvg);
    console.log("--------------------\n");

    // JSONファイルを所定の位置に取得し、base64としてエンコードします。
    string memory json = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "',
                    // NFTのタイトルを生成される言葉に設定。
                    recoveryStoryTitle,
                    '", "description": "My Recovery Story", "image": "data:image/svg+xml;base64,',
                    //  data:image/svg+xml;base64 を追加し、SVG を base64 でエンコードした結果を追加。
                    Base64.encode(bytes(finalSvg)),
                    '"}'
                )
            )
        )
    );

    // データの先頭に data:application/json;base64 を追加。
    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

	  console.log("\n----- Token URI ----");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    // msg.sender を使って NFT を送信者に Mint。
    _safeMint(msg.sender, newItemId);

    // tokenURIを更新。
    _setTokenURI(newItemId, finalTokenUri);

 	  // NFTがいつ誰に作成されたかを確認。
	  console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

    // 次の NFT が Mint されるときのカウンターをインクリメントする。
    _tokenIds.increment();
  }
}
