import styles from "./sectionOne.module.css";
import backgroundImg from "../../../../public/backstage.png";
// import imgOne from "../../../../public/image1.jpg";
// import img2 from "../../../../public/image2.jpg";
import Image from "next/image";

const SectionOne = ({ backImages }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.gridContainer}> */}

      {/* {backImages.length === 8 && ( */}
      <div className={styles.grid}>
        <img src={backImages[0]} alt="image" className={styles.photo1} />
        <h2 className={styles.title1}>FOTOGRAFIA</h2>
        <img src={backImages[1]} alt="image" className={styles.photo2} />
        <h2 className={styles.title2}>ADVERTISING</h2>
        <img src={backImages[2]} alt="image" className={styles.photo3} />
        <img src={backImages[3]} alt="image" className={styles.photo4} />
        <img src={backImages[4]} alt="image" className={styles.photo5} />
        <h2 className={styles.title3}>BOOKS</h2>
        <img src={backImages[5]} alt="image" className={styles.photo6} />
        <h2 className={styles.title4}>EDITORIAL</h2>
        <img src={backImages[6]} alt="image" className={styles.photo7} />
        <img src={backImages[7]} alt="image" className={styles.photo8} />

        <Image
          src={backgroundImg}
          width="100%"
          height={30}
          className={styles.background}
          alt=""
          style={{ opacity: "0.5", margin: "3rem", position: "fixed" }}
        />
      </div>
    </div>
  );
};

export default SectionOne;
