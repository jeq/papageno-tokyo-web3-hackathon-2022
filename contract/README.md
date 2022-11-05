## Contract

### ライブラリインストインストール

```sh
npm install
```

### Alchemy

[Alchemy](https://dashboard.alchemy.com/)にアクセスし、アプリを作成し`VIEW KEY`のURLを控えておいてください。

### 環境変数

`.env`ファイルを作成し、`.env.sample`を参考に環境変数を追加してください。
先ほどの[Alchemy](https://dashboard.alchemy.com/)のURLとウォレットのPRIVATE KEY。

### テスト

```sh
npx hardhat run scripts/run.js
```

- `SVG data`と`Token URI`が出力されます。

### デプロイ

```sh
npx hardhat run scripts/deploy.js --network goerli
```

- *テストネットでもガス代0.1ethくらいかかるので気をつけてください。
