import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.svg';
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" srcset="" className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active-link' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active-link' to='skills' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active-link' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active-link' to='contactPage' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Contact</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt="" srcset="" className='desktopMenuImg' />
            Contact Me
            </button>    
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active-link' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active-link' to='skills' spy={true} smooth={true} offset={-90} duration={500} className='ListItem' onClick={()=>setShowMenu(false)} >About</Link>
            <Link activeClass='active-link' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active-link' to='contactPage' spy={true} smooth={true} offset={-70} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar 