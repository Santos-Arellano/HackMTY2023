warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/.gitignore b/.gitignore[m
[1mdeleted file mode 100644[m
[1mindex 4d29575..0000000[m
[1m--- a/.gitignore[m
[1m+++ /dev/null[m
[36m@@ -1,23 +0,0 @@[m
[31m-# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.[m
[31m-[m
[31m-# dependencies[m
[31m-/node_modules[m
[31m-/.pnp[m
[31m-.pnp.js[m
[31m-[m
[31m-# testing[m
[31m-/coverage[m
[31m-[m
[31m-# production[m
[31m-/build[m
[31m-[m
[31m-# misc[m
[31m-.DS_Store[m
[31m-.env.local[m
[31m-.env.development.local[m
[31m-.env.test.local[m
[31m-.env.production.local[m
[31m-[m
[31m-npm-debug.log*[m
[31m-yarn-debug.log*[m
[31m-yarn-error.log*[m
[1mdiff --git a/HackMTY2023 b/HackMTY2023[m
[1mindex 434041a..c201f47 160000[m
[1m--- a/HackMTY2023[m
[1m+++ b/HackMTY2023[m
[36m@@ -1 +1 @@[m
[31m-Subproject commit 434041a82cb4d11d24da58e78721c724c9dade46[m
[32m+[m[32mSubproject commit c201f47b9591b2e800ec94ed6a982bb5f83e18ab[m
[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex aa069f2..944fd60 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -4,7 +4,6 @@[m
     <meta charset="utf-8" />[m
     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />[m
     <meta name="viewport" content="width=device-width, initial-scale=1" />[m
[31m-    <meta name="theme-color" content="#000000" />[m
     <meta[m
       name="description"[m
       content="Web site created using create-react-app"[m
[1mdiff --git a/src/App.css b/src/App.css[m
[1mindex 33a6067..548b1e1 100644[m
[1m--- a/src/App.css[m
[1m+++ b/src/App.css[m
[36m@@ -1,58 +1,193 @@[m
[31m-body {[m
[31m-  font-family: Arial, sans-serif;[m
[31m-  background-color: #f4f4f4;[m
[31m-  margin: 0;[m
[31m-  padding: 0;[m
[31m-}[m
[31m-[m
[32m+[m[32m/* Estilos para el contenedor principal */[m
 .container {[m
[31m-  max-width: 800px;[m
[31m-  margin: 0 auto;[m
[32m+[m[32m  width: 70%;[m
[32m+[m[32m  margin: auto;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  background-color: #f5f5f5;[m
   padding: 20px;[m
[31m-  background-color: #fff;[m
[31m-  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);[m
[31m-  border-radius: 5px;[m
[32m+[m[32m  border: 2px solid black;[m
[32m+[m[32m  border-radius: 20px;[m
[32m+[m[32m  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);[m
[32m+[m[32m  margin-top: 40px;[m
 }[m
 [m
[31m-/* Estilos del título */[m
[31m-h1 {[m
[32m+[m[32m/* Estilos para el título */[m
[32m+[m[32m.search-container h1 {[m
   font-size: 24px;[m
   color: #333;[m
   margin-bottom: 20px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilos para la barra de búsqueda y el icono de búsqueda */[m
[32m+[m[32m.top-bar {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  gap: 14px;[m
[32m+[m[32m  padding-top: 30px;[m
[32m+[m[32m  margin-bottom: 20px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.top-bar input {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  max-width: 400px;[m
[32m+[m[32m  height: 60px;[m
[32m+[m[32m  border: 2px solid #007bff;[m
[32m+[m[32m  border-radius: 30px;[m
[32m+[m[32m  padding-left: 20px;[m
[32m+[m[32m  padding-right: 20px;[m
[32m+[m[32m  color: #333;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: 400;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.top-bar input::placeholder {[m
[32m+[m[32m  color: #aaa;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.search-icon {[m
[32m+[m[32m  width: 60px;[m
[32m+[m[32m  height: 60px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  border-radius: 50%;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  transition: background-color 0.3s;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.search-icon:hover {[m
[32m+[m[32m  background-color: #f5f5f5;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilos para el botón de guardar */[m
[32m+[m[32m.button_save button {[m
[32m+[m[32m  background-color: #007bff;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  padding: 12px 24px;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  border-radius: 20px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: 600;[m
[32m+[m[32m  transition: background-color 0.3s, transform 0.2s;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.button_save button:hover {[m
[32m+[m[32m  background-color: #0056b3;[m
[32m+[m[32m  transform: scale(1.05);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.button_save button:active {[m
[32m+[m[32m  transform: rotate(360deg);[m
 }[m
 [m
[31m-/* Estilos del input y botón */[m
[31m-input[type="text"] {[m
[32m+[m[32m.container-receta {[m
   width: 100%;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.container-receta p{[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  padding: 50px;[m
[32m+[m[32m  border: 1px solid rgb(245, 233, 218);[m
[32m+[m[32m  text-align: justify;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilos para el contenedor de recetas */[m
[32m+[m[32m.recipe-list {[m
[32m+[m[32m  width: 60%;[m
[32m+[m[32m  margin: auto;[m
[32m+[m[32m  margin-top: 3%;[m
[32m+[m[32m  font-family: Arial, sans-serif;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  background-color: #f5f5f5;[m
[32m+[m[32m  padding: 30px;[m
[32m+[m[32m  border: 2px solid black;[m
[32m+[m[32m  border-radius: 20px;[m
[32m+[m[32m  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilo para el título del acordeón */[m
[32m+[m[32m.recipe-list h1 {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  background-color: #f1f1f1;[m
   padding: 10px;[m
[31m-  margin-bottom: 10px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilo para el contenido del acordeón (oculto por defecto) */[m
[32m+[m[32m.recipe-list ul {[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  display: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilo para los elementos de la lista */[m
[32m+[m[32m.recipe-list li {[m
   border: 1px solid #ccc;[m
[31m-  border-radius: 5px;[m
[31m-  font-size: 16px;[m
[32m+[m[32m  margin: 5px 0;[m
[32m+[m[32m  padding: 10px;[m
 }[m
 [m
[31m-button {[m
[31m-  background-color: #007bff;[m
[32m+[m[32m.recipe-list button {[m
[32m+[m[32m  background-color: #eb2113;[m
   color: #fff;[m
[32m+[m[32m  padding: 12px 24px;[m
   border: none;[m
[31m-  border-radius: 5px;[m
[31m-  padding: 10px 20px;[m
[31m-  font-size: 16px;[m
[32m+[m[32m  border-radius: 20px;[m
   cursor: pointer;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: 600;[m
[32m+[m[32m  transition: background-color 0.3s, transform 0.2s;[m
 }[m
 [m
[31m-button:hover {[m
[32m+[m[32m.recipe-list button:hover{[m
   background-color: #0056b3;[m
[32m+[m[32m  transform: scale(1.05);[m
 }[m
 [m
[31m-/* Estilos de la receta */[m
[31m-h2 {[m
[31m-  font-size: 20px;[m
[31m-  color: #333;[m
[31m-  margin-top: 20px;[m
[32m+[m[32m.recipe-list button:active{[m
[32m+[m[32m  transform: rotate(360deg);[m
 }[m
 [m
[31m-p {[m
[31m-  font-size: 16px;[m
[31m-  color: #666;[m
[32m+[m[32m/* Estilos para pantallas más pequeñas */[m
[32m+[m[32m@media (max-width: 600px) {[m
[32m+[m[32m  .search-container h1 {[m
[32m+[m[32m    font-size: 20px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .top-bar {[m
[32m+[m[32m    padding-top: 20px;[m
[32m+[m[32m    margin-bottom: 10px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .button_save button {[m
[32m+[m[32m    padding: 10px 20px;[m
[32m+[m[32m    font-size: 16px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Estilos para pantallas aún más pequeñas */[m
[32m+[m[32m@media (max-width: 400px) {[m
[32m+[m[32m  .search-container h1 {[m
[32m+[m[32m    font-size: 18px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .top-bar {[m
[32m+[m[32m    padding-top: 10px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .top-bar input {[m
[32m+[m[32m    height: 50px;[m
[32m+[m[32m    font-size: 16px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .button_save button {[m
[32m+[m[32m    padding: 8px 16px;[m
[32m+[m[32m    font-size: 14px;[m
[32m+[m[32m  }[m
 }[m
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 7037d2e..15d530b 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -1,11 +1,13 @@[m
 import React from 'react';[m
 import './App.css';[m
 import RecipeGenerator from './RecipeGenerator';[m
[32m+[m[32mimport RecipeList from './recetasGuardadas';[m
 [m
 function App() {[m
   return ([m
     <div className="App">[m
       <RecipeGenerator />[m
[32m+[m[32m      <RecipeList />[m
     </div>[m
   );[m
 }[m
[1mdiff --git a/src/RecipeGenerator.js b/src/RecipeGenerator.js[m
[1mindex 08f6f64..b2bbe21 100644[m
[1m--- a/src/RecipeGenerator.js[m
[1m+++ b/src/RecipeGenerator.js[m
[36m@@ -1,19 +1,22 @@[m
 import React, { useState } from 'react';[m
[32m+[m[32mimport search_icon from '../src/components/assets/assets/search.png'[m
[32m+[m
 [m
 function RecipeGenerator() {[m
   const [platillo, setPlatillo] = useState('');[m
   const [receta, setReceta] = useState('');[m
[32m+[m[32m  const [guardadoExitoso, setGuardadoExitoso] = useState(false);[m
 [m
   const generarReceta = async () => {[m
     const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {[m
       method: 'POST',[m
       headers: {[m
         'Content-Type': 'application/json',[m
[31m-        'Authorization': 'Bearer API_KEY',[m
[32m+[m[32m        'Authorization': 'Bearer YOUR_API_KEY',[m
       },[m
       body: JSON.stringify({[m
[31m-        prompt: `Crea una receta para preparar ${platillo}.`,[m
[31m-        max_tokens: 100, // Ajusta este valor según tus necesidades[m
[32m+[m[32m        prompt: `Dime cual es la receta para preparar ${platillo} con un máximo de 200 palabras.`,[m
[32m+[m[32m        max_tokens: 1000, // Ajusta este valor según tus necesidades[m
       }),[m
     });[m
 [m
[36m@@ -21,22 +24,57 @@[m [mfunction RecipeGenerator() {[m
     setReceta(data.choices[0].text);[m
   };[m
 [m
[32m+[m[32m  const guardarReceta = async () => {[m
[32m+[m[32m    // Crear un objeto con los datos que deseas enviar[m
[32m+[m[32m    const datosAEnviar = {[m
[32m+[m[32m      platillo: platillo,[m
[32m+[m[32m      receta: receta,[m
[32m+[m[32m    };[m
[32m+[m[41m  [m
[32m+[m[32m    // Realizar la solicitud POST para guardar la receta[m
[32m+[m[32m    const response = await fetch('http://localhost:4000/api/proyecto', {[m
[32m+[m[32m      method: 'POST',[m
[32m+[m[32m      headers: {[m
[32m+[m[32m        'Content-Type': 'application/json',[m
[32m+[m[32m      },[m
[32m+[m[32m      body: JSON.stringify(datosAEnviar),[m
[32m+[m[32m    });[m
[32m+[m[41m  [m
[32m+[m[32m    if (response.ok) {[m
[32m+[m[32m      setGuardadoExitoso(true);[m
[32m+[m[41m  [m
[32m+[m[32m      // Después de un tiempo, restablecer guardadoExitoso a false para permitir guardar otra receta[m
[32m+[m[32m      setTimeout(() => {[m
[32m+[m[32m        setGuardadoExitoso(false);[m
[32m+[m[32m      }, 5000); // Restablecer después de 5 segundos (ajusta este valor según tus necesidades)[m
[32m+[m[32m    } else {[m
[32m+[m[32m      // Manejar errores si la solicitud no fue exitosa[m
[32m+[m[32m      console.error('Error al guardar la receta');[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
[32m+[m[41m  [m
   return ([m
[31m-    <div>[m
[32m+[m[32m    <div className='container'>[m
       <h1>Generador de Recetas</h1>[m
[31m-      <input[m
[31m-        type="text"[m
[31m-        placeholder="Ingresa el platillo"[m
[31m-        value={platillo}[m
[31m-        onChange={(e) => setPlatillo(e.target.value)}[m
[31m-      />[m
[31m-      <button onClick={generarReceta}>Generar Receta</button>[m
[32m+[m[32m      <div className='top-bar'>[m
[32m+[m[32m        <input type="text" placeholder="Ingresa el platillo" value={platillo} className='textInput' onChange={(e) => setPlatillo(e.target.value)}/>[m
[32m+[m[32m        <div className='search-icon' onClick={() => {generarReceta()}}>[m
[32m+[m[32m          <img src={search_icon} alt=""/>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
       {receta && ([m
[31m-        <div className='receta'>[m
[32m+[m[32m        <div className='container-receta'>[m
           <h2>Receta:</h2>[m
[31m-          <div className='receta_text'>[m
[31m-            <p>{receta}</p>[m
[31m-          </div>[m
[32m+[m[32m          <p>{receta}</p>[m
[32m+[m[32m          {!guardadoExitoso ? ([m
[32m+[m[32m            <div className='button_save'>[m
[32m+[m[32m              <button onClick={() => guardarReceta()}>Guardar Receta</button>[m
[32m+[m[32m            </div>[m
[32m+[m[32m          ) : ([m
[32m+[m[32m            <div>[m
[32m+[m[32m              <p>Receta guardada exitosamente.</p>[m
[32m+[m[32m            </div>[m
[32m+[m[32m          )}[m
         </div>[m
       )}[m
     </div>[m
[36m@@ -44,3 +82,4 @@[m [mfunction RecipeGenerator() {[m
 }[m
 [m
 export default RecipeGenerator;[m
[41m+[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex ec2585e..ad5c070 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -11,3 +11,4 @@[m [mcode {[m
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
     monospace;[m
 }[m
[41m+[m
