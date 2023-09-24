import React from 'react';
import './App.css';
import RecipeGenerator from './RecipeGenerator';
import RecipeList from './recetasGuardadas';

function App() {
  return (
    <div className="App">
      <RecipeGenerator />
      <RecipeList />
    </div>
  );
}

export default App;
