import { Housing_data, Data_id } from "../components/fetch.jsx";
import { useParams } from "react-router-dom";
import { tag, list, Rating } from "../components/housing.jsx";
import { Carousel } from "../components/carousel.jsx";
import { Collaps } from "../components/collaps.jsx";
import Error from "./error.jsx";

const Housing = () => {
  let housingData = Housing_data();
  let { uid } = useParams();
  let user = Data_id(uid);

  if (!housingData || !user) {
    console.log("1-" + housingData + " 2-" + user);
  } else {
    if (user.length > 0) {
      const [region, city] = user.map((data) => data.location)[0].split("-");
      const [first, last] = user.map((data) => data.host.name)[0].split(" ");

      return (
        <main className="housing">
          <Carousel user={user} />

          <section className="card">
            <div className="titleName">
              <div className="titleLocation">
                <h1>{user.map((data) => data.title)}</h1>
                <span>
                  {city}, {region}
                </span>
              </div>
              <div className="namePicture">
                <div className="name">
                  <span>{first}</span>
                  <span>{last}</span>
                </div>
                <img
                  src={user.map((data) => data.host.picture)}
                  alt="Tête de profile du bailleur"
                />
              </div>
            </div>

            <div className="tagRating">
              <div className="allTag">
                {user.map((data) => data.tags.map((datas) => tag(datas)))}
              </div>

              {user.map((data) => Rating(data.rating))}
            </div>
          </section>

          <section className="content">
            <Collaps
              title="Description"
              data=<p>{user.map((data) => data.description)}</p>
            />

            <Collaps
              title="Équipements"
              data=<ul>{user.map((data) =>
                data.equipments.map((datas) => list(datas))
              )}</ul>
            />
          </section>
        </main>
      );
    } else {
      return(
      <Error/>
      )
    }
  }
};

export default Housing;
