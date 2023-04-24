import error from "../media/404.svg";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <img src={error} alt="404" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>

      <NavLink to={`/Kasa-OCR/`}>
        <span>Retourner sur la page d’accueil</span>
      </NavLink>
    </section>
  );
};

export default Error;
