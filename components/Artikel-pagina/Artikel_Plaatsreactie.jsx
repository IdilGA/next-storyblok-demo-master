import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_plaatsreactie.css";


const Artikel_Plaatsreactie = ({ blok }) => (
  <div className="Plaatsreactie_Layout" {...storyblokEditable(blok)}>
    <div className="Plaatsreactie_container">
      <div>
        <h1>{blok.Plaatsreactie_Titel}</h1>
      </div>
    <div className="input_container">
      <div>
    <form className="personal_container">
      <input type="text" className="Naam_input" placeholder="Naam" />
      <input type="email" className="Email_input"  name="email" placeholder="E-mailadres"/>
    </form>
      </div>
    <div>
    <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here"></textarea>
    </div>
    </div>
    <div className="button_container">
      <button type="submit" className="verstuur_button">verstuur</button>
    </div>
    </div>
  </div>
  
);
 
 
export default Artikel_Plaatsreactie;
