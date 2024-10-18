import React from "react";

const Home = ({ story }) => {
  if (!story) return <div>Loading...</div>;

  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          className="hero-image"
          src={story.content.hero_image.filename}
          alt={story.content.hero_title}
        />
        <h1 className="hero-title">{story.content.hero_title}</h1>
      </section>

      {/* Artikelen Sectie */}
      <section className="articles-section">
        <h2>{story.content.artikelen_title}</h2>
        <div className="articles-grid">
          {story.content.artikelen.map((artikel) => (
            <div className="article-card" key={artikel._uid}>
              <img
                className="article-image"
                src={artikel.image.filename}
                alt={artikel.title}
              />
              <h3>{artikel.title}</h3>
              <p>{artikel.summary}</p>
              <a href={artikel.link.url}>Lees meer</a>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>{story.content.sidebar_title}</h2>
        <ul>
          {story.content.sidebar_links.map((link) => (
            <li key={link._uid}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </aside>

      <Footer />
    </div>
  );
};

export default Home;
