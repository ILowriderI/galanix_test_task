import SendRequest from "../SendRequest/SendRequset";
import Table from "../Table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import styles from "./App.module.scss";

function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [jsonData, setJsonData] = useState([]);
  const inputValue = useSelector((state) => state.inputValueReducer.value);

  const handleCheckboxChange = (index) => {
    const updatedData = [...jsonData];
    updatedData[index].selected = !updatedData[index].selected;
    setJsonData(updatedData);
    localStorage.setItem("storageJsonData", JSON.stringify(updatedData));
    const count = updatedData.filter((item) => item.selected).length;
    setSelectedCount(count);
    localStorage.setItem("storageSelected", JSON.stringify(count));
  };

  const onClickResetData = () => {
    setJsonData([]);
    setSelectedCount(0);
    localStorage.clear();
  };

  const onClikSendRequest = () => {
    axios
      .get(`http://universities.hipolabs.com/search?name=${inputValue}`)
      .then(({ data }) => {
        setJsonData(data);
        localStorage.setItem("storageJsonData", JSON.stringify(data));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {}, [jsonData]);
  useEffect(() => {
    if (localStorage.getItem("storageJsonData") !== null) {
      setJsonData(JSON.parse(localStorage.getItem("storageJsonData")));
      setSelectedCount(JSON.parse(localStorage.getItem("storageSelected")));
    }
  }, []);

  return (
    <div>
      <div className={styles.upper_box}>
        <SendRequest onSendRequest={onClikSendRequest} />
        <p>Selected: {selectedCount}</p>
      </div>
      <Table data={jsonData} onCheckboxChange={handleCheckboxChange} />
      <div className={styles.reset}>
        <button onClick={onClickResetData}>Reset</button>
      </div>
    </div>
  );
}

export default App;
