import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/slice/inputSlice";
import searchIco from "../../img/searching.png";
import styles from "./SendRequest.module.scss";

const SendRequest = ({ onSendRequest }) => {
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div className={styles.form_container}>
      <input onChange={onChangeInput} type="text" placeholder="input" />

      <button onClick={onSendRequest}>
        <img src={searchIco} alt="search" />
      </button>
    </div>
  );
};

export default SendRequest;
