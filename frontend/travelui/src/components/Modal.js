import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

export default function Modal() {
  const [modal, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open</button>
      {modal && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.titleCloseBtn}>
              <button
                onClick={() => {
                  setModalState(false);
                }}
              >
                X
              </button>
            </div>
            <div className={styles.title}>
              <h1>Are You Sure You Want to Continue?</h1>
            </div>
            <div className={styles.body}>
              <p>The next page looks amazing. Hope you want to go there!</p>
            </div>
            <div className={styles.footer}>
              <button
                onClick={() => {
                  setModalState(false);
                }}
                id={styles.cancelBtn}
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
