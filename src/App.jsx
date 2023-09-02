import React from "react";
import "./App.css";

function App() {
  return (
    <div className="web-container">
      <header ClassName="web-header">
        <h1>FirstBuy</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="web-main">
        <section className="web-section">
          <h2>About Us</h2>
          <p>Come and shop your it needs</p>
        </section>
      </main>

      <aside className="web-aside">
        <section className="web-sectiom">
          <h2>Latest Gadgets</h2>
          <article>
            <h3>Laptop</h3>
            <p>Dell</p>
          </article>
        </section>
      </aside>

      <footer className="web-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
