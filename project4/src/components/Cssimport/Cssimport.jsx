import styles from "./Cssimport.module.css";

const Cssimport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles["card-header"]}>Title Here</h1>
        <p className={["card-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut
          natus aspernatur amet dolorem atque itaque minima cumque, ad culpa
          ducimus non, quod corrupti veritatis corporis perspiciatis voluptates
          iste nobis?
        </p>
        <a href="" className={styles.cardLink}>
          Click Me
        </a>
      </div>
    </div>
  );
};
export default Cssimport;
