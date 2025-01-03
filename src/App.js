import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
    <>
    <Header />
    <main className="main">
        <Home />
        <About />
        <Skill />
        <Contact />
    </main>

    </>
    )
}

export default App