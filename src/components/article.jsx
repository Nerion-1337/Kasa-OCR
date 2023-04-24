import { NavLink } from "react-router-dom";

const article = (data) =>{
    return(
        <NavLink key={data.id} to={`/Kasa-OCR/housing/${data.id}`}>
        <article>
    <figure><img src={data.cover} alt={data.title} />
    <figcaption>{data.title}</figcaption>
    </figure>
</article>
</NavLink>
    )};

    export default article;