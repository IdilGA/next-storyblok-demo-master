import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./evenementen_intro.css";
import { useEffect, useState } from "react";

const Evenementen_Intro = ({ blok }) => {
  // Timer logica
  const calculateTimeLeft = () => {
    const eventDate = new Date(blok.event_date);
    const currentTime = new Date();
    const difference = eventDate - currentTime;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="evenementen_intro" {...storyblokEditable(blok)}>

    <h1 className="pagina_titel">{blok.pagina_titel}</h1>

      <div className="evenement_afbeelding_container">
        
        <img
          className="evenement_afbeelding"
          src={blok.intro_afbeelding?.filename}
          alt={blok.intro_afbeelding?.alt || "Card One Image"}
          
        />

        
        
        <div className="evenement_buttons">
          <a href={blok.button_1_url} className="evenement_button button_1">
            {blok.button1_text}
          </a>
          <a href={blok.button_2_url} className="evenement_button button_2">
            {blok.button2_text}
          </a>
        </div>
      </div>

      {/* Nieuw blok onder de afbeelding */}
      <div className="extra_blok">
        <div className="extra_blok_left">
          <div className="word grote_titel">{blok.woord1}</div>
          <div className="word kleine_titel">{blok.woord2}</div>
          <div className="word beschrijving">{blok.woord3}</div>
        </div>
        <div className="extra_blok_right">
          <div className="timer">
            <div className="timer_element">
              {timeLeft.days} <span>Dagen</span>
            </div>
            <div className="timer_element">
              {timeLeft.hours} <span>Uren</span>
            </div>
            <div className="timer_element">
              {timeLeft.minutes} <span>Min</span>
            </div>
            <div className="timer_element">
              {timeLeft.seconds} <span>Sec</span>
            </div>
          </div>
        </div>
      </div>

    {/* De lijn met het fade-effect */}
<hr className="lijn_onder_blok" />

    </div>
  );
};

export default Evenementen_Intro;
