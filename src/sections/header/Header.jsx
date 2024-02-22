import HeaderImage from '../../assets/1668786368814.jpeg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className='container header__container'>
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Rumen Nikolaev</h3>
        <p>
        I' m a frontend developer
I'm a web Designer. My expertise is to create and website design, graphic design, and many more...
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#porfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)

          }
        </div>
      </div>
    </header>
  )
}

export default Header;