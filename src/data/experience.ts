/* Langauge Logo Imports */
import PythonLogo from "../assets/language-logos/python.png";
import CppLogo from "../assets/language-logos/cpp.png";
import HtmlLogo from "../assets/language-logos/html.png";
import TypescriptLogo from "../assets/language-logos/typescript.png";
import CssLogo from "../assets/language-logos/css.png";
import JsLogo from "../assets/language-logos/javascript.png";

/* Framework Logo Imports */
import NodeLogo from "../assets/framework-logos/nodejs.png";
import ExpressLogo from "../assets/framework-logos/expressjs.png";
import ReactLogo from "../assets/framework-logos/reactjs.png";
import TailwindLogo from "../assets/framework-logos/tailwind.png";
import VueLogo from "../assets/framework-logos/vue.png";
import FlaskLogo from "../assets/framework-logos/flask.png";

/* Tool Logo Imports */
import GitLogo from "../assets/tool-logos/git.png";
import VscodeLogo from "../assets/tool-logos/vscode.png";
import LinuxLogo from "../assets/tool-logos/linux.png";
import MongodbLogo from "../assets/tool-logos/mongodb.png";
import DockerLogo from "../assets/tool-logos/docker.png";
import AwsLogo from "../assets/tool-logos/aws.png";

/*
 * Experience Data
 *
 * This data is used to display the experience of the user.
 * Order of the data is important.
 *
 * Format:
 * {
 *  title: string ( Name of the language/framework/tool ),
 *  years: number ( Years of experience ),
 *  color: string ( Color of the progress bar ),
 *  percent: number ( Percentage of experience ),
 * }
 */
export const languageExperience = [
  {
    title: "JavaScript",
    years: 3,
    color: "#ff8800",
    percent: 80,
  },
  {
    title: "HTML/CSS",
    years: 3,
    color: "#52b788",
    percent: 80,
  },
  {
    title: "C/C++",
    years: 2,
    color: "#6c757d",
    percent: 60,
  },
  {
    title: "Python",
    years: 2,
    color: "#ffbc42",
    percent: 60,
  },
  {
    title: "TypeScript",
    years: 1,
    color: "#006ba6",
    percent: 40,
  },
  {
    title: "SQL",
    years: 1,
    color: "#c9184a",
    percent: 30,
  },
];

export const frameworkExperience = [
  {
    title: "Node.js",
    years: 3,
    color: "#68a063",
    percent: 60,
  },
  {
    title: "React",
    years: 2,
    color: "#61dafb",
    percent: 60,
  },
  {
    title: "Express.js",
    years: 2,
    color: "#000000",
    percent: 60,
  },
  {
    title: "Tailwind CSS",
    years: 1,
    color: "#38b2ac",
    percent: 40,
  },
  {
    title: "Flask",
    years: 1,
    color: "#000000",
    percent: 20,
  },
  {
    title: 'Vue.js',
    years: 1,
    color: '#42b883',
    percent: 20,
  }
];

export const toolsExperience = [
  {
    title: "Git/GitHub",
    years: 3,
    color: "#f34f29",
    percent: 80,
  },
  {
    title: "VS Code",
    years: 3,
    color: "#007acc",
    percent: 80,
  },
  {
    title: "Linux",
    years: 3,
    color: "#f5f5f5",
    percent: 80,
  },
  {
    title: "MongoDB",
    years: 2,
    color: "#13aa52",
    percent: 60,
  },
  {
    title: "Docker",
    years: 1,
    color: "#0db7ed",
    percent: 20,
  },
  {
    title: "AWS",
    years: 1,
    color: "#ff9900",
    percent: 20,
  },
];

export const languageLogos = [
  PythonLogo,
  CppLogo,
  HtmlLogo,
  TypescriptLogo,
  CssLogo,
  JsLogo,
];

export const frameworkLogos = [
  NodeLogo,
  ExpressLogo,
  ReactLogo,
  TailwindLogo,
  VueLogo,
  FlaskLogo,
];

export const toolLogos = [
  GitLogo,
  VscodeLogo,
  LinuxLogo,
  MongodbLogo,
  DockerLogo,
  AwsLogo,
];
