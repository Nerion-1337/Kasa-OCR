export const tag = (data) =>{
    return(
    <div className="tag" key={data}><span>{data}</span></div>
)}

export const list = (data) =>{
    return(
    <li key={data}>{data}</li>
)}

export const Rating = (rating) => {

    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ratingIcon`}
          data-active={i <= rating ? "true" : "false"}
        ></i>
      );
    }
  
    return <div className="rating" key={`1`}>{stars}</div>;
  };

  export const banner = (data, index) =>{
    return(
    <img src={data} alt="représente une piece du logement" key={`banner-${index}`}/>
  )}