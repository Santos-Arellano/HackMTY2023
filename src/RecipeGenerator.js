import React, { useState } from 'react';
import search_icon from '../src/components/assets/assets/search.png'


function RecipeGenerator() {
  const [platillo, setPlatillo] = useState('');
  const [receta, setReceta] = useState('');
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const generarReceta = async () => {
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        prompt: `Dime cual es la receta para preparar ${platillo} con un máximo de 200 palabras.`,
        max_tokens: 1000, // Ajusta este valor según tus necesidades
      }),
    });

    const data = await response.json();
    setReceta(data.choices[0].text);
  };

  const guardarReceta = async () => {
    // Crear un objeto con los datos que deseas enviar
    const datosAEnviar = {
      platillo: platillo,
      receta: receta,
    };
  
    // Realizar la solicitud POST para guardar la receta
    const response = await fetch('http://localhost:4000/api/proyecto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosAEnviar),
    });
  
    if (response.ok) {
      setGuardadoExitoso(true);
  
      // Después de un tiempo, restablecer guardadoExitoso a false para permitir guardar otra receta
      setTimeout(() => {
        setGuardadoExitoso(false);
      }, 5000); // Restablecer después de 5 segundos (ajusta este valor según tus necesidades)
    } else {
      // Manejar errores si la solicitud no fue exitosa
      console.error('Error al guardar la receta');
    }
  };
  
  return (
    <div className='container'>
      <h1>Generador de Recetas</h1>
      <div className='top-bar'>
        <input type="text" placeholder="Ingresa el platillo" value={platillo} className='textInput' onChange={(e) => setPlatillo(e.target.value)}/>
        <div className='search-icon' onClick={() => {generarReceta()}}>
          <img src={search_icon} alt=""/>
        </div>
      </div>
      {receta && (
        <div className='container-receta'>
          <h2>Receta:</h2>
          <p>{receta}</p>
          {!guardadoExitoso ? (
            <div className='button_save'>
              <button onClick={() => guardarReceta()}>Guardar Receta</button>
            </div>
          ) : (
            <div>
              <p>Receta guardada exitosamente.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeGenerator;

