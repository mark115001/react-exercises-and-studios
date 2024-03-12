// import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Description';
import RecipePhoto from './components/Description';

function App() {

  return (
    <>
      <div className="App">
        <div>
        <RecipePhoto class="recipePhotoBlock" />
        </div>
        <div className="recipePhotoBlock">
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  );
}

export default App