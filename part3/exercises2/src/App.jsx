import HobbyIntroduction from "./Components/HobbyIntroduction"
import './App.css'
import MyProjects from "./Components/Projects"

function App() {

  return (
    <>
      <div className="hobbyHeading">
          <h1>My Hobby: Great Hobby</h1>
          <HobbyIntroduction />
          <MyProjects />
      </div>
    </>
  )
}

export default App
