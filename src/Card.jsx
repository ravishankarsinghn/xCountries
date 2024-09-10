import "./Card.css";

function Card({country}) {

  return (<div className="card">
    <div className="container_img">
      <img src={country.flag} alt={country.name}/>
    </div>
    <p className="card_title">{country.name}</p>
  </div>)
}

export default Card;