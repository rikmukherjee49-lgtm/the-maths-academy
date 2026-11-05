import SetsChapter from './SetsChapter';
import React, { useState } from 'react';

const class11 = [
  'Sets, Relations & Functions', 'Trigonometric Functions', 'Complex Numbers',
  'Quadratic Equations', 'Permutations & Combinations', 'Binomial Theorem',
  'Sequences & Series', 'Straight Lines', 'Conic Sections', 'Limits & Derivatives',
  'Statistics', 'Probability'
];

const class12 = [
  'Relations & Functions', 'Inverse Trigonometric Functions', 'Matrices',
  'Determinants', 'Continuity & Differentiability', 'Applications of Derivatives',
  'Integrals', 'Applications of Integrals', 'Differential Equations',
  'Vector Algebra', 'Three-Dimensional Geometry', 'Probability'
];

function ChapterList({ title, chapters, number, onSelect }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="class-panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">JEE MATHEMATICS</span>
          <h3>{title}</h3>
          <p>{chapters.length} chapters · Main + Advanced preparation</p>
        </div>
        <span className="class-number">{number}</span>
      </div>
      <div className="chapter-list">
  {(expanded ? chapters : chapters.slice(0, 4)).map((chapter, i) => (
    <button
      className="chapter-row"
      key={chapter}
      onClick={() => onSelect(chapter)}
    >
      <span className="chapter-index">
        {String(i + 1).padStart(2, '0')}
      </span>
      <span>{chapter}</span>
      <span className="arrow">↗</span>
    </button>
  ))}
</div>
      <button className="text-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show fewer chapters ↑' : 'View all chapters →'}
      </button>
    </section>
  );
}

export default function App() {
  const [track, setTrack] = useState('Both exams');
  const [activeChapter, setActiveChapter] = useState(null);

if (activeChapter === 'Sets, Relations & Functions') {
  return <SetsChapter onBack={() => setActiveChapter(null)} />;
}
  return (
    <div>
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">∑</span><span>The Maths <b>Academy</b></span></a>
        <nav>
          <a href="#courses">Courses</a>
          <a href="#tracks">JEE Tracks</a>
          <a href="#features">Why us</a>
        </nav>
        <a className="nav-cta" href="#courses">Explore courses <span>↗</span></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="pill"><span className="live-dot"></span> MATHEMATICS FOR IIT JEE</div>
            <h1>Understand deeply.<br /><em>Solve brilliantly.</em></h1>
            <p className="hero-text">A structured mathematics learning space for students preparing for JEE Main and JEE Advanced — from first principles to challenging problems.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#courses">Explore chapters <span>→</span></a>
              <a className="secondary-button" href="#tracks">Explore learning tracks</a>
            </div>
            <div className="hero-note"><span>✓</span> Concept-first learning <span>✓</span> Main + Advanced practice</div>
          </div>
          <div className="math-art" aria-label="Decorative mathematical formulas">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="formula formula-a">∫ f(x) dx</div>
            <div className="formula formula-b">a² + b² = c²</div>
            <div className="formula formula-c">eⁱπ + 1 = 0</div>
            <div className="formula formula-d">lim x → 0</div>
            <div className="art-center">∑</div>
            <div className="art-caption">THINK · EXPLORE · MASTER</div>
          </div>
        </section>

        <section className="stats">
          <div><strong>02</strong><span>Focused classes</span></div>
          <div><strong>01</strong><span>Unified learning platform</span></div>
          <div><strong>∞</strong><span>Ways to understand maths</span></div>
          <div><strong>2-in-1</strong><span>JEE Main + Advanced</span></div>
        </section>

        <section className="section" id="courses">
          <div className="section-heading">
            <div><span className="eyebrow">YOUR LEARNING PATH</span><h2>Choose your class</h2></div>
            <p>Explore the complete chapter roadmap for Classes 11 and 12.</p>
          </div>
          <div className="class-grid">
            <ChapterList
  title="Class 11 Mathematics"
  chapters={class11}
  number="11"
  onSelect={setActiveChapter}
/>
            <ChapterList
  title="Class 12 Mathematics"
  chapters={class12}
  number="12"
  onSelect={setActiveChapter}
/>
          </div>
        </section>

        <section className="tracks-section" id="tracks">
          <div className="section-heading light-heading">
            <div><span className="eyebrow">TWO PATHS · ONE FOUNDATION</span><h2>Prepare for both exams</h2></div>
            <p>Build strong fundamentals, then practise at the level your target exam demands.</p>
          </div>
          <div className="track-grid">
            <article className="track-card">
              <span className="track-tag">TRACK 01</span><h3>JEE Main</h3>
              <p>Build speed, accuracy and confidence with focused objective practice.</p>
              <ul><li>Single-correct questions</li><li>Numerical-value practice</li><li>Timed chapter tests</li></ul>
            </article>
            <article className="track-card advanced">
              <span className="track-tag">TRACK 02</span><h3>JEE Advanced</h3>
              <p>Develop deeper problem-solving skills through multi-concept challenges.</p>
              <ul><li>Multiple-correct questions</li><li>Numerical and matching types</li><li>Advanced problem sets</li></ul>
            </article>
          </div>
          <div className="track-selector">
            <label htmlFor="track">Your preparation focus</label>
            <select id="track" value={track} onChange={e => setTrack(e.target.value)}>
              <option>Both exams</option><option>JEE Main</option><option>JEE Advanced</option>
            </select>
            <span>Selected: <b>{track}</b></span>
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-heading">
            <div><span className="eyebrow">LEARN WITH CLARITY</span><h2>More than a question bank</h2></div>
            <p>Each chapter will bring concepts, examples, visual learning and assessment together.</p>
          </div>
          <div className="feature-grid">
            <article><span>01</span><h3>Concept lessons</h3><p>Clear explanations, definitions and logical development of each topic.</p></article>
            <article><span>02</span><h3>Formula library</h3><p>Important results, identities and revision-ready formula sheets.</p></article>
            <article><span>03</span><h3>Interactive maths lab</h3><p>Explore graphs, geometric ideas and mathematical behaviour visually.</p></article>
            <article><span>04</span><h3>Practice & tests</h3><p>Separate Main and Advanced practice with feedback and performance insights.</p></article>
          </div>
        </section>
      </main>

      <footer><a className="brand footer-brand" href="#"><span className="brand-mark">∑</span><span>The Maths <b>Academy</b></span></a><p>Think clearly. Practise purposefully. Achieve more.</p><span>© 2026 The Maths Academy</span></footer>
    </div>
  );
}