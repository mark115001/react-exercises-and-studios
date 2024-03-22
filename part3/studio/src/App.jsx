// import { useState } from 'react';
import './App.css'
import BoardAssignment from './components/BoardAssignment';
import StatusChange from './components/StatusChange';
import RecipeDisplay from './components/Recipe'; 

function App() {

  return (
    <>
      {/* <h1>React 3 - Studio</h1> */}
      <div className="App">
        <RecipeDisplay />
        <div className="recipePhotoBlock">
          <BoardAssignment />
          <StatusChange />
        </div>
      </div>
    </>
  )
}

export default App
