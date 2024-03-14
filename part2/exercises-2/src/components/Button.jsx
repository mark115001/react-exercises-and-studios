import './styles.css';



function Button() {
   function onLearnMore() {
      return(
         alert("Splish Splash I was taking a bath")
      )
   }

   return ( 
         // <button>
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;