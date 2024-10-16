
import { storyblokEditable } from "@storyblok/react"; // Zorg dat je de Storyblok React-pakket gebruikt
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "./slide";

const ImageRow = ({ blok }) => {
  return (
    <div style={styles.container} {...storyblokEditable(blok)}>
      <img src={blok.image1.filename} alt="Image 1" style={styles.image} />
      <img src={blok.image2.filename} alt="Image 2" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',  // Plaatsing aan de linkerkant
    gap: '20px',                   // Ruimte tussen de afbeeldingen
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default ImageRow;
