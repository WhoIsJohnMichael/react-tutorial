export const Planet = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name + " image"} height={"200px"} width={"200px"} />
      <h1>{props.name}</h1>
      <p>{props.isGasPlanet ? "Gaseous Planet" : "Terrestrial Planet"}</p>
    </div>
  );
}