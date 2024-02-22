import { links } from './data'; // Adjust the import statement to use named exports

import Scrollspy from 'react-scrollspy';
import Nav from './Nav';
import './floating-nav.css';

const FloatingNav = () => {
  return (
    <ul id="floating_nav">
      <Scrollspy className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'contact']} currentClassName='active'>
        {
          links.map(item => <Nav key={item.id} item={item} />)
        }
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
