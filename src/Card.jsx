function Card({userName, petName}) {
  return (
    <div className="form">
      <hr></hr>
      <br/>
      <h4>Registro de mascotas</h4>
      <label>Tu nombre: {userName}</label> <br/>
      <label>Tu mascota: {petName}</label>
    </div>
  );
}

export default Card;
