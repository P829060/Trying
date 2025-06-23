import './About.css';

export default function About() {
  return (
    <main className="about-hero">
      <section className="intro">
        <h1 className="headline">⚽ The Icons of the Game</h1>
        <p className="tagline">Not your average list — it’s football folklore with flair.</p>
      </section>

      <section className="legend-list">
        <h2>🌟 Top Performers</h2>
        <div className="legend-grid">
          <div className="legend-card">🎩 <strong>Messi</strong><span>Physics said no — he said yes.</span></div>
          <div className="legend-card">🚀 <strong>Ronaldo</strong><span>Jumped higher than your dreams.</span></div>
          <div className="legend-card">🧙‍♂️ <strong>Maradona</strong><span>One hand, two hearts.</span></div>
          <div className="legend-card">🪩 <strong>Ronaldinho</strong><span>Laughed while nutmegging legends.</span></div>
          <div className="legend-card">🧠 <strong>Cruyff</strong><span>Invented angles where none existed.</span></div>
        </div>
      </section>

      <section className="why-section">
        <h2>🧠 Why This Exists</h2>
        <p>
          I built this because arguing about greatness is an art form. And because these players 
          aren’t just stats — they’re symbols. Their stories deserve a scrollable shrine.
        </p>
        <ul className="fun-facts">
          <li>📜 Bite-sized bios</li>
          <li>🎮 Interactive insights (coming soon)</li>
          <li>📸 Footwork, not footnotes</li>
        </ul>
      </section>

      <section className="outro">
        <h2>📬 Final Whistle</h2>
        <p>If someone’s missing, let me know — or accept that they just didn’t make the cut 😉</p>
      </section>
    </main>
  );
}
