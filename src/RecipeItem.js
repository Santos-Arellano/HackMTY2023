import React from 'react';

function RecipeItem({ nombre, receta }) {
  return (
    <div className='recipe-item'>
      <h2>{nombre}</h2>
      <p>{receta}</p>
    </div>
  );
}

export default RecipeItem;