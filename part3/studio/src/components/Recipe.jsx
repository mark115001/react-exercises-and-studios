// import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.southernliving.com/catherine-jessee-7255494";
   let authorPhoto =
   "https://www.southernliving.com/thmb/Rwkij6IM1iWMkQVE1VCm9OfwY84=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CatherineJessee-5c967e50dafa475a9c5be5cc45180322.jpg";
 let authorName = "Catherine Jessee";


   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", "height" : "200px", "width" : "200px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

   const RecipeIngredients = () => {
      const ingredients = [
        "All purpose flour",
        "Granulated sugar",
        "Baking powder",
        "Kosher salt",
        "Baking soda",
        "Ground cinnamon",
        "Whole milk",
        "Unsalted butter",
        "Vanilla extract",
        "Eggs",
        "Salted butter",
        "Maple syrup"
      ];

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul style={{display: "table", textAlign: "left"}}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
            <li>{ingredients[9]}</li>
            <li>{ingredients[10]}</li>
            <li>{ingredients[11]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>REACT Part3 - Studio - PANCAKES</h1>
            <p>Made from Scratch Pancake Recipe</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.southernliving.com/thmb/IdYkJW5TQeboO5P30uqIwGBe2JQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Old-Fashioned-Pancakes-SEO50-2256-c4bb42e70d434d608aa42ba7930b905a.jpg"
      alt="Old-Fashioned Pancakes" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
