import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import { useState } from "react";

function App() {
  const menu = ["Home", "About", "Contact"];
  const [activeHeader, setActiveHeader] = useState("Home");
  const ex = ".";

  const menuHandler = (item) => {
    setActiveHeader(item);
  };
  const aboutMeText =
    "Hello! I'm a software developer with a deep passion for the world of programming. My primary expertise lies in C#, JavaScript, TypeScript, and .NET. I also have a keen interest in developing web applications using the React framework. In this fast-paced world where technologies are constantly evolving, I'm always ready to learn new skills and expand my existing knowledge. I believe software development is the perfect blend of problem-solving and creativity, and I'm always excited to work in this field.";

  const homeText =
    " I'm a passionate software developer who thrives in the realm of programming. My primary focus revolves around C#, JavaScript, TypeScript, and .NET. Additionally, I harbor a deep fascination for crafting web applications with the React framework.\n\nIn a rapidly evolving tech landscape, I remain committed to perpetual learning and broadening my skill set.";

  const text = () => {
    if (activeHeader == "Home") {
      return homeText;
    } else if (activeHeader == "About") {
      return aboutMeText;
    } else {
      return Contact();
    }
  };

  const renk1 =
    "linear-gradient(135deg, rgb(130, 94, 205) 0%, rgb(61, 138, 84) 50%, rgb(130, 94, 205) 100%)";
  const renk2 =
    "linear-gradient(135deg, rgb(197, 55, 175) 0%, rgb(131, 129, 103) 50%, rgb(197, 55, 175) 100%)";
  const renk3 =
    "linear-gradient(135deg, rgb(136, 77, 155) 0%, rgb(218, 141, 106) 50%, rgb(136, 77, 155) 100%)";
  const [renk, setRenk] = useState(renk1);

  const colorChanger = () => {
    if (renk == renk1) {
      setRenk(renk2);
    } else if (renk == renk2) {
      setRenk(renk3);
    } else {
      setRenk(renk1);
    }
  };
  const contactStyles = {
    contactTitle: {
      color: "white",
      fontSize: "24px", // İstediğiniz boyutu ayarlayın.
      // Diğer stil ayarlarını burada ekleyebilirsiniz.
    },
    contactDescription: {
      color: "white",
      // Diğer stil ayarlarını burada ekleyebilirsiniz.
    },
    contactLink: {
      color: "white",
      textDecoration: "none", // Bağlantı alt çizgisini kaldırmak için.
      fontWeight: "bold", // Kalın metin yapmak için.
    },
    noListStyle: {
      listStyle: "none", // Sırasız liste öğelerinin başındaki noktaları kaldır
    },
    margin: {
      marginBottom: "10px", // Paragraf ve liste öğeleri arasına margin-bottom ekler
    },
    background: {
      background: renk,
    },
  };
  const Contact = () => {
    return (
      <div>
        <h1 style={contactStyles.contactTitle}>Contact Me</h1>
        <p
          style={{
            ...contactStyles.contactDescription,
            ...contactStyles.margin,
          }}
        >
          Feel free to reach out to me through the following channels:
        </p>
        <ul
          style={{
            ...contactStyles.centerAlign,
            ...contactStyles.noListStyle,
            ...contactStyles.margin,
          }}
        >
          <li>
            <a
              href="https://github.com/Lysoths"
              target="_blank"
              style={contactStyles.contactLink}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ogzhner/"
              target="_blank"
              style={contactStyles.contactLink}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ERouzzy"
              target="_blank"
              style={contactStyles.contactLink}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ogzhner/"
              target="_blank"
              style={contactStyles.contactLink}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="container">
        <div className="inline-container">
          <div
            className="ayar"
            onClick={() => colorChanger()}
            style={{
              ...contactStyles.background,
            }}
          ></div>
          <div className="left-side">
            <div className="content">
              <h1>{activeHeader}</h1>
              <p>{text()}</p>
            </div>
            <div
              className="corner3"
              style={{
                ...contactStyles.background,
              }}
            ></div>
          </div>
          <div className="right-side">
            <h1>{ex}</h1>
            <div className="right-content">
              {menu.map((item, i) => (
                <span key={i} onClick={() => menuHandler(item)}>
                  {item}
                </span>
              ))}
            </div>
            <div
              className="corner4"
              style={{
                ...contactStyles.background,
              }}
            ></div>
          </div>
        </div>
        <div
          className="corner1"
          style={{
            ...contactStyles.background,
          }}
        ></div>
        <div
          className="corner2"
          style={{
            ...contactStyles.background,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
