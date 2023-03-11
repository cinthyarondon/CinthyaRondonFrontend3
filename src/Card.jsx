//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({userName, petName}) {
  return (
    <div>
      <h3>Registro de mascotas</h3>
      <h4>Tu nombre: {userName}</h4>
      <h4>Tu mascota: {petName}</h4>
    </div>
  );
}

export default Card;
