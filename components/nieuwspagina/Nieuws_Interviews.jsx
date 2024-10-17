import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Interviews.css";
 
const Nieuws_Interviews = ({ blok }) => (
  <div className="Nieuws_Interviews" {...storyblokEditable(blok)}>
    <h1 className="Nieuws_Interviewtitel">{blok.Nieuws_Interviewtitel}</h1>
    <img className="Nieuws_Interviewlijn" src={blok.Nieuws_Interviewlijn.filename}/>
  </div>
);
 
 
export default Nieuws_Interviews;