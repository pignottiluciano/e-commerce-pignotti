import CarouselComponent from "../Carousel";
import styles from "./home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function homeContainer() {
  return (
    <div>
      <section className={styles.section}>
        <CarouselComponent />
      </section>
    </div>
  );
}

export default homeContainer;
