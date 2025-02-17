import clsx from "clsx";
import Container from "../../components/Container/Container";
import styles from "./Home.module.css";
import ArrowIcon from "../../components/svg/ArrowIcon";
import GlassIcon from "../../components/svg/GlassIcon";
import CutleryIcon from "../../components/svg/CutleryIcon";
import GeoIcon from "../../components/svg/GeoIcon";
import CarIcon from "../../components/svg/CarIcon";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import { NavLink } from "react-router";

const cards = [
  { id: 1, title: "Заказать еду", icon: <CutleryIcon />, className: "bgFood" },
  {
    id: 2,
    title: "Забронировать столик",
    icon: <GlassIcon />,
    className: "bgLunch",
  },
  { id: 3, title: "Экскурсии", icon: <GeoIcon />, className: "bgExcursion" },
  { id: 4, title: "Заказать такси", icon: <CarIcon />, className: "bgTaxi" },
];

const Home = () => {
  return (
    <NavLink to={"/login"}>
      <Container>
        <div className={styles.container}>
          <section className={styles.slider}>
            <div className={styles.sliderContent}>
              <div className={styles.sliderTop}>Роман­тический уикенд</div>
              <div className={styles.sliderBottom}>
                <div className={styles.sliderPoints}>
                  <div className={styles.point}></div>
                  <div className={clsx(styles.point, styles.active)}></div>
                  <div className={styles.point}></div>
                  <div className={styles.point}></div>
                  <div className={styles.point}></div>
                  <div className={styles.point}></div>
                  <div className={styles.point}></div>
                </div>
                <button className={styles.sliderBtn}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </section>
          <div className={styles.welcome}>
            <span>Добро пожаловать, </span>
            <span className={styles.welcomeName}>Иванов Иван!</span>
          </div>
          <main className={styles.main}>
            {cards.map((card) => (
              <Card
                key={card.id}
                className={card.className}
                icon={card.icon}
                title={card.title}
              />
            ))}
          </main>
          <Nav />
        </div>
      </Container>
    </NavLink>
  );
};

export default Home;
