import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import ImageItem from "../ImageItem/ImageItem";
import { dataImages } from "../../data/imageData";

const Main = () => {
  const [imeges, setImages] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const formatCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getDate()}.${
      now.getMonth() + 1
    }.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    setCurrentDate(formattedDate);
  };
  const intervalId = setInterval(formatCurrentDate, 60000);

  const filterImages = () => {
    if (localStorage.getItem("imgId") !== null) {
      const storageIds = JSON.parse(localStorage.getItem("imgId"));
      const filteredData = dataImages.filter(
        ({ id }) => !storageIds.includes(id)
      );
      return filteredData;
    } else {
      return dataImages;
    }
  };

  useEffect(() => {
    formatCurrentDate();

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const data = filterImages();
    setImages(data);
  }, [imeges]);

  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <div>Current date : {currentDate}</div>
        <div>Count images : {imeges.length}</div>
      </div>
      <div className={styles.images_container}>
        {imeges.map((el) => {
          return <ImageItem key={el.id} imgItem={el.img} id={el.id} />;
        })}
      </div>
    </main>
  );
};

export default Main;


