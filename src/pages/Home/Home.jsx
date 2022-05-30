import React from "react";
import "./Home.css";
import "../../index.css";
import Content from "../../components/Content/Content";
export default function Home() {
  return (
    <Content>
      <section className="hero">
        <h1 className="text-lg">
          Hello, I'm <span className="text-secondary">Miloš Marejka</span>
        </h1>
        <h2 className="text-md">
          I'm a <span className="text-secondary">Full Stack Developer</span>
        </h2>
        <div className="btn-section">
          <button className="btn btn-secondary">Hire me</button>
          <button className="btn btn-primary">Contact me</button>
        </div>
      </section>
    </Content>
  );
}
