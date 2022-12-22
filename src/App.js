import carmen from "./carmen.svg";
import React, { useState } from "react";
import Jobs from "./Jobs";
import Categories from "./Categories";
import data from "./cv.js";
import "./sass/App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [jobs, setJobs] = useState(data);
  const currentJob = jobs[current];

  const changeCurrentJob = (index) => {
    setCurrent(index);
  };

  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <section>
          <br />
          <h2>.work experience & education.</h2>
          <Categories items={jobs} changeCurrentJob={changeCurrentJob} />
          <br />
          <br />
          <Jobs items={currentJob} />
          <br />
        </section>
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
