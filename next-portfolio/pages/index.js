import About from "./about";
import Achievements from "./achievements";
import Footer from "./footer";
import Header from "./header/Header";
import HomePage from "./home/Home"; 
import Projects from "./projects";
import Qualification from "./qualification";
import ScrollUp from "./scrollUp";
import Skills from "./skills";

export default function Index() { 
    return (
        <>
            <Header />
            <HomePage />
            <About />
            <Skills />
            <Projects />
            <Qualification />
            <Achievements />
            <Footer />
            <ScrollUp />
        </>
    );
}
