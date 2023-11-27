import React from 'react';
import '../asset/footer.css';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-info'>
            <ul>
              <li><h4>SHOP</h4></li>
              <li><Link to='/men' style={{textDecoration: 'none', color: 'black'}}>Men</Link></li>
              <li><Link to='/women' style={{textDecoration: 'none', color: 'black'}}>Women</Link></li>
            </ul>
          </div>

          <div className='footer-info'>
            <ul>
              <li><h4>HELP</h4></li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Customer Service</li>
              <li>Legal & Privacy</li>
            </ul>
          </div>

          <div className='footer-info'>
            <ul>
              <li><h4>CORPORATE INFO</h4></li>
              <li>Career at WMensta</li>
              <li>About WMensta</li>
              <li>Corporate governance</li>
            </ul>
          </div>
        </div>

        <div className='footer-icons'>
          <p>{<FacebookOutlinedIcon />}</p>
          <p>{<InstagramIcon />}</p>
          <p>{<YouTubeIcon />}</p>
        </div>

        <div className='footer-title'>
          <span className='copy'>&copy; 2023 www.wmensta.com. All rights reserved.</span>
          <Link to='/' style={{textDecoration: 'none', marginTop:'10px'}}>
            <h2> WMensta</h2>
          </Link>
          <span>INDIA</span>
        </div>
      </div> 
    </div>
  )
}

export default Footer