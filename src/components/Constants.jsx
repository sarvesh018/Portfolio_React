import c from "../assets/c.png"
import cpp from "../assets/cpp.png"
import java from "../assets/java.png"
import reactjs from "../assets/reactjs.png"
import html from "../assets/html.png"
import monogodb from "../assets/mongodb.png"
import nodejs from "../assets/nodejs.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import javascript from "../assets/javascript.png"
import mui from "../assets/mui.png"
import ub_express from "../assets/UB_Express.png"
import expense from "../assets/expense_tracker.png"
import weather from "../assets/weather.png"
import email from "../assets/email.png";
import loc from "../assets/loc.png";
import phone from "../assets/phone.png";
import sql from "../assets/sql.svg";


export const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  export const works = ["Full Stack Developer", "Leetcoder", "Competitive Programmer"];

  export const skills = [
    {
      id: 1, 
      link: "Java",
      logoSrc: java,
    }, 
    {
      id: 2, 
      link:"C++",
      logoSrc: cpp,
    },
    {
      id: 3,
      link: "Reactjs",
      logoSrc: reactjs,
    },
    {
      id: 4,
      link: "Nodejs",
      logoSrc: nodejs,
    },
    {
      id: 5,
      link: "C",
      logoSrc: c,
    },
    {
      id: 6,
      link: "Monogodb",
      logoSrc: monogodb,
    },
    {
      id: 7,
      link: "Tailwind",
      logoSrc: tailwind,
    },
    {
      id: 8,
      link: "HTML",
      logoSrc: html,
    },
    {
      id: 9,
      link: "JavaScript",
      logoSrc: javascript,
    },
    {
      id: 10,
      link: "CSS",
      logoSrc: css,
    },
    {
      id: 11,
      link: "MUI",
      logoSrc: mui,
    },
    {
      id:12, 
      link: "sql", 
      logoSrc: sql,
    }
 ];

 export const projects = [
  {
    id: 1, title: "UB-Express", technologies: "Reactjs | Nodejs | Expressjs | Mongodb", 
    desc: "A food delivery platform to streamline and enhance the process of ordering food.",
    code: "https://github.com/sarvesh018/Food_Delivery_Application",
    srcImg: ub_express,
  },
  {
    id: 2, title: "Expense Tracker", technologies: "Reactjs | Material UI", 
    desc: "Streamline financial management for effective budgeting and planning.",
    code: "https://github.com/sarvesh018/Weather_Forecast",
    srcImg: expense,
  },
  {
    id: 3, title: "Weather Forecast", technologies: "HTML | CSS | JavaScript", 
    desc: "Provide precise and up-to-date weather forecasts through a user-centric application.",
    code: "https://github.com/sarvesh018/expense-tracker",
    srcImg: weather,
  }
 ];

 export const contact = [
  {id:1, src:phone, head:"Call Me:", text:"+91 8827034174"},
  {id:2, src:email, head:"Email Me:", text:"sarveshc111@gmail.com"},
  {id:3, src:loc, head:"Location:", text:"Indore, M.P"},
 ]