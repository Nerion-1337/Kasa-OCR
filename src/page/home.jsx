import banner from "../media/banner-home.svg";
import { Housing_data } from "../components/fetch.jsx";
import article from "../components/article";

const Home = () => {
  let housingData = Housing_data();

  if (!housingData) {
    console.log(housingData);
  } else {
    return (
      <main className="home">
        <section className="bannerHome">
          <img
            src={banner}
            alt="Représente une nature avec rocher, arbre et mers"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </section>
        <section className="framework">
          {housingData.map((data) => article(data))}
        </section>
      </main>
    );
  }
};

export default Home;
