import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_socialmedia.css";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"



const Artikel_socialmedia = ({ blok }) => (
  <div className="Plaatsreactie_Layout" {...storyblokEditable(blok)}>
    <div>
    <img
        src={blok.Luisteren_icon.filename}
        style={{ width: '21px' }}
      />
      <img
        src={blok.Luisteren_icon.filename}
        style={{ width: '21px' }}
      />
      <img
        src={blok.Luisteren_icon.filename}
        style={{ width: '21px' }}
      />
      <img
        src={blok.Luisteren_icon.filename}
        style={{ width: '21px' }}
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
