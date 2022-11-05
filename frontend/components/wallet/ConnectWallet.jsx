import { useState } from "react";

export default function connectWallet() {
  const [modalIsOpen, setIsOpen] = useState(false);

  // モーダルを開く処理
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false);
  };

  return console.log("success");
  // <Modal
  //   // isOpenがtrueならモダールが起動する
  //   isOpen={modalIsOpen}
  //   // モーダルが開いた後の処理を定義
  //   onAfterOpen={afterOpenModal}
  //   // モーダルを閉じる処理を定義
  //   onRequestClose={closeModal}
  // >
  //   <h2>Hello</h2>
  //   <button onClick={closeModal}>close</button>
  //   {console.log("success")}
  // </Modal>
}
