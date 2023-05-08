import styles from "./sectionOne.module.css";
import backgroundImg from "../../../../public/backstage.png";
import imgOne from "../../../../public/image1.jpg";
import img2 from "../../../../public/image2.jpg";
import Image from "next/image";

const SectionOne = ({ images }) => {

  return (
    <div className={styles.container}>
      {/* <div className={styles.gridContainer}> */}
      <div className={styles.grid}>
        <img src={images[0]} alt="" className={styles.photo1} />
        <h2 className={styles.title1}>FOTOGRAFIA</h2>

        <img src={images[1]} alt="" className={styles.photo2} />
        <h2 className={styles.title2}>ADVERTISING</h2>
        <img src={images[2]} alt="" className={styles.photo3} />

        <img src={images[2]} alt="" className={styles.photo4} />
        <img src={images[0]} alt="" className={styles.photo5} />
       
        <h2 className={styles.title3}>BOOKS</h2>
        <img src={images[1]} alt="" className={styles.photo6} />
        <h2 className={styles.title4}>EDITORIAL</h2>
        {/* <div className={styles.photo7}> */}
        <Image
          src={images[2]}
          width={900}
          height={700}
          alt=""
          className={styles.photo7}
        />
        {/* </div> */}

        {/* <div className={styles.photo8}> */}

        <Image
          src={images[0]}
          alt=""
          width={400}
          height={500}
          className={styles.photo8}
        />
        {/* <img        
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwrfObKHZjRzWJNo8IKAqmocJjXGrQUvZX-yvWAI9w86pWPvWfYguZYZwu0QpK4XTib4&usqp=CAU"
          alt=""
          className={styles.image}
        /> */}

        {/* </div> */}
        {/* </div> */}
        <Image
          src={backgroundImg}
          width="100%"
          height={"auto"}
          className={styles.background}
          alt=""
          // style={{ opacity: "0.5", margin: "3rem", position: 'fixed' }}
        />
      </div>
    </div>
  );
};

export default SectionOne;
