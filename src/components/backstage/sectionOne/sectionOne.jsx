import styles from "./sectionOne.module.css";
import backgroundImg from "../../../../public/backstage.png";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kQvXF7jbfxwx7pXi4FhgI1aRWzVZhsJhUi9ZvDYz_nZkHApysCIYbnOKp_coGdzzZxg&usqp=CAU"
          alt=""
          className={styles.photo1}
        />
        <div className={styles.title1}>
          <h2 style={{ position: "inherit", fontSize: '1.2rem' }}>FOTOGRAFIA</h2>
        </div>

        <img
          src="https://i0.wp.com/fashionablymale.net/wp-content/uploads/2020/11/Mariano-Ontanon-by-Sole-Rubio-Dromo-Hombre8.jpg?resize=819%2C1024&ssl=1"
          alt=""
          className={styles.photo2}
        />
          <h2 className={styles.title2}>ADVERTISING</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwrfObKHZjRzWJNo8IKAqmocJjXGrQUvZX-yvWAI9w86pWPvWfYguZYZwu0QpK4XTib4&usqp=CAU"
          alt=""
          className={styles.photo3}
        />
          <h2 className={styles.title3}>BOOKS</h2>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kQvXF7jbfxwx7pXi4FhgI1aRWzVZhsJhUi9ZvDYz_nZkHApysCIYbnOKp_coGdzzZxg&usqp=CAU"
          alt=""
          className={styles.photo4}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kQvXF7jbfxwx7pXi4FhgI1aRWzVZhsJhUi9ZvDYz_nZkHApysCIYbnOKp_coGdzzZxg&usqp=CAU"
          alt=""
          className={styles.photo5}
        />
        <img
          src="https://i0.wp.com/fashionablymale.net/wp-content/uploads/2020/11/Mariano-Ontanon-by-Sole-Rubio-Dromo-Hombre8.jpg?resize=819%2C1024&ssl=1"
          alt=""
          className={styles.photo6}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwrfObKHZjRzWJNo8IKAqmocJjXGrQUvZX-yvWAI9w86pWPvWfYguZYZwu0QpK4XTib4&usqp=CAU"
          alt=""
          className={styles.photo7}
        />
          <h2 className={styles.title4}>EDITORIAL</h2>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwrfObKHZjRzWJNo8IKAqmocJjXGrQUvZX-yvWAI9w86pWPvWfYguZYZwu0QpK4XTib4&usqp=CAU"
          alt=""
          className={styles.photo8}
        />
      </div>

      <Image
        src={backgroundImg}
        width={100}
        height={"auto"}
        className={styles.background}
        alt=""
        // style={{ opacity: "0.5", margin: "3rem", position: 'fixed' }}
      />
    </div>
  );
};

export default SectionOne;
