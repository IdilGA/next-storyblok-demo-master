import { storyblokEditable } from "@storyblok/react/rsc";
import { useState, useEffect } from "react";
import "./kalender.css";

const Kalender = ({ blok }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Controleer de blok data vanuit Storyblok
  useEffect(() => {
    console.log("Blok data:", blok); // Zorg ervoor dat je de blok data kunt zien in de console
  }, [blok]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const events = [
    { id: 1, name: "Event 1", date: "2024-10-15", subject: "Sport" },
    { id: 2, name: "Event 2", date: "2024-10-18", subject: "Muziek" },
    { id: 3, name: "Event 3", date: "2024-10-15", subject: "Sport" },
    { id: 4, name: "Event 4", date: "2024-10-20", subject: "Zakelijk" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesDate = selectedDate ? event.date === selectedDate : true;
    const matchesSubject = selectedSubject
      ? event.subject === selectedSubject
      : true;
    return matchesDate && matchesSubject;
  });

  return (
    <div className="kalender" {...storyblokEditable(blok)}>
      <h1 className="kalender_titel">{blok.titel}</h1>
      <button className="filter_button" onClick={toggleFilters}>
        {showFilters ? "Verberg Filters" : "Filteren"}
        <i
          className="fa-solid fa-sliders"
          style={{ marginLeft: "8px", color: "white" }}
        ></i>
      </button>

      {showFilters && (
        <>
          <div className="filters">
            <label>
              Filter op datum:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </label>

            <label>
              Filter op onderwerp:
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Alle Onderwerpen</option>
                <option value="Sport">Sport</option>
                <option value="Muziek">Muziek</option>
                <option value="Zakelijk">Zakelijk</option>
              </select>
            </label>
          </div>

          <div className="events">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <p key={event.id}>
                  {event.name} - {event.date} - {event.subject}
                </p>
              ))
            ) : (
              <p>Geen evenementen gevonden</p>
            )}
          </div>
        </>
      )}

    </div>
  );
};

export default Kalender;
