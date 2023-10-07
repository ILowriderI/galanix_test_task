import Modal from "../Modal/Modal";
import { useState } from "react";
import btn from "../../img_task/remove.png";
import styles from "./ImageItem.module.scss";

const ImageItem = ({ imgItem, id,}) => {
  const [active, setEctive] = useState(false);

  const addIdTolist = () => {
    let arr = JSON.parse(localStorage.getItem("imgId")) || [];
    arr.push(id);
    localStorage.setItem("imgId", JSON.stringify(arr));
    
  };
  return (
    <div className={styles.container}>
      <div onClick={() => setEctive(true)} className={styles.item}>
        <img className={styles.image} src={imgItem} alt={id} />
        <div>
          <Modal img={imgItem} active={active} setEctive={setEctive} />
        </div>
      </div>
      <div className={styles.btn}>
        <img onClick={addIdTolist} src={btn} alt="remove" />
      </div>
    </div>
  );
};

export default ImageItem;
