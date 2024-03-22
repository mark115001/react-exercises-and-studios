import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { board0 : "select board"},
      { board1 : "breakfast" },
      { board2 : "lunch" },
      { board3 : "dinner" }
    ];
  
   const [boardName, setBoardName] = useState("no boards yet")

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value="no boards yet">select board</option>
         <option value="breakfast board">breakfast</option>
         <option value="lunch board">lunch</option>
         <option value="dinner board">dinner</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
