import cn from "classnames";
import btn from "../../img_task/cross.png";
import styles from "./Modal.module.scss";

const Modal = ({ active, img, setEctive }) => {
  return (
    <div className={active ? cn(styles.modal, styles.active) : styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <img className={styles.modal_image} src={img} alt={img.id} />
        <div>
          <img
            className={styles.btn}
            onClick={() => setEctive()}
            src={btn}
            alt="close"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
