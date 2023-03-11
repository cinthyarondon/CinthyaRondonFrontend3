import {useState} from "react"
import Card from "./Card"
function App() {


  const [userName, setUserName] = useState("");
  const [petName, setPetName] = useState("");
  const [errorSelect, setErrorSelect] = useState("");
  const [send, setSend] = useState(false);
  
  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }
  const onChangePetName = (event) => {
    setPetName(event.target.value)
  }

  const completeInput = (userName, petName) => {
    if (userName === "" || petName === ""){
        setErrorSelect("Confirma que la información sea correcta! Por favor completa los datos solicitados")
        return false
    }
    else if(userName[0]== " "){
      setErrorSelect("Confirma que la información sea correcta! El nombre no debe iniciar con un espacio en blanco")
      return false
    } else if (userName.trim().length < 3){
      setErrorSelect("Confirma que la información sea correcta! El nombre debe contener al menos 3 caracteres")
      return false
    } else if (petName.trim().length < 6){
      setErrorSelect("Confirma que la información sea correcta! El nombre de tu mascota debe contener al menos 6 caracteres")
      return false
    }else{
      return true
    }      

}

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorSelect("")
    setSend(false)

    const isCompleteInput = completeInput(userName, petName)
    if (isCompleteInput){
      setSend(true)
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="form">      
          <h3>Formulario para el registro de mascotas</h3>
          <form onSubmit={handleSubmit}>
                  
          <input type="text" placeholder="Ingresa tu nombre" value={userName}
                onChange={onChangeUserName}/> <br/>
                <input type="text" placeholder="Nombre de tu mascota" value={petName}
                onChange={onChangePetName}/> <br/>
                <input type="submit" value="Enviar"/>
          </form>
          <div className="error">{errorSelect}</div>
        </div>
      
        {send && <Card userName={userName} petName={petName}/>}
        </div>
    </div>
  );
}

export default App;
