export default function BookList() {
   let pageTitle = "Better Section Heading";
   let book1 = "https://sp.yimg.com/ib/th?id=OPHS.yNAHfOQVY5ml4g474C474&o=5&pid=21.1&w=174&h=174";
   let book2 = "https://sp.yimg.com/ib/th?id=OPHS.cKy7VrA%2bHEeFiA474C474&o=5&pid=21.1&w=174&h=174";
   let book3 = "https://sp.yimg.com/ib/th?id=OPHS.tM0hw5WV5Os1Dg474C474&o=5&pid=21.1&w=174&h=174";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Identity by Nora Roberts" />
         <img src={book2} alt="Burried Secrets by T.J. Brearton" />
         <img src={book3} alt="Against All Odds by Alex Kershaw" />
      </div>      
   );
}