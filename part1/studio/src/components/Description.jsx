import styles from './Description.module.css';
import React from 'react';

let authorLink = "https://www.southernliving.com/old-fashioned-pancakes-7482955"
let authorPhoto = "https://www.southernliving.com/thmb/TEscLBLI0_0ahUS0A4DPd1K5evI=/94x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/let CatherineJessee-5c967e50dafa475a9c5be5cc45180322.jpg"
let authorName = "Author: Catherine Jessee - Updated November 16, 2023"

function RecipeAuthor() {
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Pancake Author's Picture" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Old Fashion Pancake recipie</a> 
           </div>
        </div>
     );
}

     class RecipeDescription extends React.Component {
        render() {
          return (
          <div>
            <div>
          <h1>Recipe Title</h1>;
          <p>Short recipe description</p>
          </div>
          <RecipeAuthor />
        </div>
          );
      }
     }
export default RecipeDescription;