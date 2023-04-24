import banner from "../media/banner-about.svg";
import { Collaps } from "../components/collaps.jsx";

const About = () => {
  return (
    <>
      <section className="bannerHome">
        <img
          src={banner}
          alt="Représente une nature avec rocher, arbre et mers"
        />
      </section>
      <section className="content about">
        <Collaps
          title="Fiabilité"
          data=<p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes.</p>
        />

        <Collaps
          title="Respect"
          data=<p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme.</p>
        />

        <Collaps
          title="Service"
          data=<p>"Nos équipes se tiennent à votre disposition pour vous fournir une 
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                    la moindre question.</p>
        />

        <Collaps
          title="Sécurité"
          data=<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                    pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont 
                    bien respectés. Nous organisons également des ateliers sur la sécurité 
                    domestique pour nos hôtes.</p>
        />
      </section>
    </>
  );
};

export default About;
