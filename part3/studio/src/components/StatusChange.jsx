import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNote] = useState("")
   const [recipeStatus, setRecipeStatus] = useState(false)

   const handleChange = (event) => {
      setNote(event.target.value)
   }
   

   const handleSubmit = (event) => {
      event.preventDefault()
      setRecipeStatus(true)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

            <p>{notes}</p>
    
         {recipeStatus ? "I have tried this recipe and loved it" : "I have not tried this recipe"}
            {/* <p>I have not tried this recipe</p> */}
      </div>
   );
}
