import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";


const data = [
    {
        id: 1, icon: <FaHtml5 />, title: 'HTML5', desc: "HTML is the standard markup language for Web pages. With HTML you can create your own Website."
    },
    {
        id: 2, icon: <FaCss3Alt />, title: 'CSS3', desc: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
    },
    {
        id: 3, icon: <IoLogoJavascript />, title: 'JavaScript', desc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web."
    },
    {
        id: 4, icon: <FaBootstrap />, title: 'Bootstrap', desc: 'Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.'
    },
    {
        id: 5, icon: <PiFileSqlDuotone />, title: 'SQL', desc: 'SQL stands for Structured Query Language, which is a standard language used for managing relational databases.'
    },
    {
        id: 6, icon: <IoLogoReact />, title: 'React', desc: 'SQL stands for Structured Query Language, which is a standard language used for managing relational databases.'
    }
]


export default data;