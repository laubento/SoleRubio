import styles from "./sectionTwo.module.css";

const SectionTwo = ({ backImages }) => {
 
  return (
    <main className={styles.container}>    

      <div className={styles.imagesContainer}>
      {backImages?.map((el, index) => 
        <img src={backImages[index]} key={index} id={el.key} alt="image" className={styles.photo} />
       )}
        </div>
    </main>
  );
};

export default SectionTwo;
