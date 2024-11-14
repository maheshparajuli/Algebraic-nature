import React from "react";


function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Welcome to Our Awesome App!</h1>
        <p className="subtitle">
          Your one-stop solution for [describe what the app does, e.g., "organizing tasks and boosting productivity"].
        </p>
        <button className="button" onClick={() => alert("Let's Get Started!")}>
          Get Started
        </button>
      </header>
      <section className="features-section">
        <div className="feature">
          <h3>Feature One</h3>
          <p>Discover the best tools for managing your tasks effectively.</p>
        </div>
        <div className="feature">
          <h3>Feature Two</h3>
          <p>Track your progress and stay on top of your goals with ease.</p>
        </div>
        <div className="feature">
          <h3>Feature Three</h3>
          <p>Collaborate with friends or coworkers and achieve more together.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
