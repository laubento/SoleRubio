import styles from "./sectionOne.module.css";
import backgroundImg from "../../../../public/backstage.png";
// import imgOne from "../../../../public/image1.jpg";
// import img2 from "../../../../public/image2.jpg";
import Image from "next/image";

const SectionOne = ({ backImages }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.photo1}>
          <img src={backImages[0]} alt="image"
          //className={styles.photo1} 
          />
        </div>
        <h2 className={styles.title1}>FOTOGRAFIA</h2>
   
          <img src={backImages[0]} alt="image" className={styles.photo2} />

      
        <h2 className={styles.title2}>ADVERTISING</h2>
        <img src={backImages[0]} alt="image" className={styles.photo3} />
        <img src={backImages[0]} alt="image" className={styles.photo4} />
        <h2 className={styles.title3}>BOOKS</h2>
        <img src={backImages[0]} alt="image" className={styles.photo5} />
        <img src={backImages[0]} alt="image" className={styles.photo6} />
        <h2 className={styles.title4}>EDITORIAL</h2>
        <img src={backImages[0]} alt="image" className={styles.photo7} />
        <img src={backImages[0]} alt="image" className={styles.photo8} />

        <Image
          src={backgroundImg}
          width={900}
          height={200}
          className={styles.background}
          alt=""
        //style={{ background: 'yellow', opacity: "0.3", margin: "1rem", position: "fixed" }}
        />
      </div>
      {/* <div className={styles.background}>
        <span >BACKSTAGE</span>
      </div> */}
    </div>
  );
};
export default SectionOne;
