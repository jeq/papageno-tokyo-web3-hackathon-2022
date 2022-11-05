// window.ethereumへのアクセス確認
export default async function checkIfWalletIsConnected() {
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
    } else {
      console.log("認証されたアカウントがありません");
    }
  } catch (error) {
    console.log(error);
  }
}
