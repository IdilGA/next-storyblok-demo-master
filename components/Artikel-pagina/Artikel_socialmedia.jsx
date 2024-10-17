import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_socialmedia.css";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"



const Artikel_socialmedia = ({ blok }) => (
  <div className="socialmedia_layout" {...storyblokEditable(blok)}>
    <h1>{blok.socialmedia_titel}</h1>
    <div className="socialmedia_container">
    <img
        src={blok.X_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Instagram_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Facebook_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Linkedin_icon.filename}
        style={{ width: '35px' }}
      />
    </div>

    {/* <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion> */}

  </div>
  
);
 
 
export default Artikel_socialmedia;
