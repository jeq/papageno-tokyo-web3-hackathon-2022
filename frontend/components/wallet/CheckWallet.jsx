// window.ethereumへのアクセス確認
export default async function checkIfWalletIsConnected() {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Metamaskをインストールしてください");
      return;
    } else {
      console.log("Metamaskが接続されています。", ethereum);
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("認証されたアカウントがあります");
    } else {
      console.log("認証されたアカウントがありません");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("接続しました。", accounts[0]);
      setCurrentAccount(accounts[0]);
    }
  } catch (error) {
    console.log(error);
  }
}
