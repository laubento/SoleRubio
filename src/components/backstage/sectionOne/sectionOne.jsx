import styles from "./sectionOne.module.css";
import backgroundImg from "../../../../public/backstage.png";
import Image from "next/image";

const SectionOne = ({ backImages }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.photo1}>
          <img src={backImages[0]} alt="image" />
        </div>
        <h2 className={styles.title1}>FOTOGRAFIA</h2>
        <div className={styles.photo2}>
          <img src={backImages[1]} alt="image" />
        </div>

        <h2 className={styles.title2}>ADVERTISING</h2>
        <div className={styles.photo3}>
          <img src={backImages[2]} alt="image" />
        </div>
        <div className={styles.photo4}>
          <img src={backImages[3]} alt="image" />
        </div>
        <h2 className={styles.title3}>BOOKS</h2>
        <div className={styles.photo5}>
          <img src={backImages[4]} alt="image" />
        </div>
        <div className={styles.photo6}>
          <img src={backImages[5]} alt="image" />
        </div>
        <h2 className={styles.title4}>EDITORIAL</h2>
        <div className={styles.photo7}>
          <img src={backImages[6]} alt="image" />
        </div>
        <div className={styles.photo8}>
          <img src={backImages[7]} alt="image" />
        </div>

        <Image
          src={backgroundImg}
          width={900}
          height={900}
          className={styles.background}
          alt=""
        />
      </div>
      <div className={styles.background}>
        <span >BACKSTAGE</span>
      </div>
    </div>
  );
};
export default SectionOne;
