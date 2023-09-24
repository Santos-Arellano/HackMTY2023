import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recetas, setRecetas] = useState([]);
  const [showContent, setShowContent] = useState(false);

  const obtenerRecetas = () => {
    // Realiza una solicitud GET para obtener las recetas guardadas
    fetch('http://localhost:4000/api/proyecto/recetas-guardadas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Al recibir los datos de la respuesta, actualiza el estado 'recetas'
        setRecetas(data);
      })
      .catch((error) => {
        // Manejar errores si la solicitud no fue exitosa
        console.error('Error al obtener las recetas:', error);
      });
  };

  const borrarReceta = (id) => {
    // Realiza una solicitud DELETE para borrar la receta por su ID
    fetch(`http://localhost:4000/api/proyecto/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        // Llama a obtenerRecetas para actualizar la lista de recetas después de borrar una receta
        obtenerRecetas();
      })
      .catch((error) => {
        // Manejar errores si la solicitud no fue exitosa
        console.error('Error al borrar la receta:', error);
      });
  };

  useEffect(() => {
    // Llama a obtenerRecetas inmediatamente cuando se carga el componente
    obtenerRecetas();

    // Programa obtenerRecetas para que se ejecute cada X segundos (por ejemplo, cada 10 segundos)
    const intervalId = setInterval(() => {
      obtenerRecetas();
    }, 10000); // Cambia 10000 a la cantidad de milisegundos que desees (10 segundos en este ejemplo)

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento vacío asegura que esto solo se ejecute una vez al cargar el componente

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='recipe-list'>
      <h1 onClick={toggleContent}>Recetas Guardadas</h1>
      <ul style={{ display: showContent ? 'block' : 'none' }}>
        {recetas.map((Receta, index) => (
          <li key={index}>
            <h2>{Receta.Nombre}</h2>
            <p>{Receta.Receta}</p>
            <button onClick={() => borrarReceta(Receta.ID)}>Borrar Receta</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;