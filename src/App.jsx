import React, { lazy, Suspense } from "react";
import Header from "./components/Header";

// Lazy load components for faster initial load
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Simple loading fallback
const Loading = () => <div style={{ minHeight: "100vh" }} />;

function App() {
  return (
    <div className="app-container">
      {/* Floating Geometric Shapes */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>

      <Header />

      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
