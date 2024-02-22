import AboutImage from '../../assets/1668786368814.jpeg';
import CV from '../../assets/Rumen_Nikolaev_CV.pdf';
import {HiDownload} from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className='container about__container'>
                <div className="about__left">
                    <div className='about__portrait'>
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }

                    </div>
                        <p>
                        I'm Rumen Nikolaev a Front-End Developer. I am a student at the New Bulgarian University, Bachelor of Informatics and am currently completing my first year of study. I graduated from the High School of Natural Sciences and Mathematics in the town of Silistra with a profile in Information Technology. 
                        </p>
                        <p>
                        In high school education, various projects and tasks for development with HTML and CSS were regularly given. This ignited my interest and through books and various materials on the Internet I began to independently supplement and enrich my knowledge. Over time, I became acquainted with the JavaScript programming language, participated in various school projects and also managed to obtain some certificates listed in my CV.

                        </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>

                   
                </div>
            </div>
        </section>
    )
}

export default About;