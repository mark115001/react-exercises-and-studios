export default function HobbyLinks() {
   let pageTitle = "Better Hobbies Section";
   let hobby1 = "https://bowling.com";
   let hobby2 = "https://allrecipies.com";
   let hobby3 = "https://myfavoritewesite.com";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <a href={hobbyLinks[0]}>Link text 1</a>
         <a href={hobbyLinks[1]}>Link text 2</a>
         <a href={hobbyLinks[2]}>Link text 3</a>
      </div>      
   );
}