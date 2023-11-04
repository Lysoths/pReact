import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";

function App() {
  const menu = ["Home", "AboutMe?", "Projects", "Contact"];
  return (
    <>
      <div className="container">
        <div className="inline-container">
          <div className="left-side">
            <div className="content">
              <h1>AboutMe?</h1>
              <p>
                Hello! I'm a software developer with a deep passion for the
                world of programming. My primary expertise lies in C#,
                JavaScript, TypeScript, and .NET. I also have a keen interest in
                developing web applications using the React framework. In this
                fast-paced world where technologies are constantly evolving, I'm
                always ready to learn new skills and expand my existing
                knowledge. I believe software development is the perfect blend
                of problem-solving and creativity, and I'm always excited to
                work in this field.
              </p>
              <br />
              <br />
              <div className="inline-content">
                <p>example</p> <p>example</p> <p>example</p> <p>example</p>
              </div>
            </div>
            <div className="corner3"></div>
          </div>
          <div className="right-side">
            <h1>Projects</h1>
            <div className="right-content">
              {menu.map((item) => (
                <span>{item}</span>
              ))}
            </div>
            <div className="corner4"></div>
          </div>
        </div>
        <div className="corner1"></div>
        <div className="corner2"></div>
      </div>
    </>
  );
}

export default App;
