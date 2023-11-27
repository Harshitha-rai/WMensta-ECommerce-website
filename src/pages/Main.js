import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/Wmlogo.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../asset/main.css';
const Main = () => {
  return (
    <div className='main'>
        <div className='card-logo'> 
            <img src={Logo} alt='logo'/>
            <h1>WMensta</h1>
        </div>
        <div className='card-container'>
            <div className='main-card'>
                <Link to='./women' style={{
                    textDecoration: 'none',
                    width:'500px', 
                    height:'200px', 
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'space-between',
                    color:'black',
                    padding:'20px'}}>
                    <div className='card-content'>
                        <h1>Women</h1>
                        <p>Explore the latest Dresses trends for Women</p>
                        <p className='store'>Enter store{<ArrowForwardIosIcon style={{height: '13px'}}/>}</p>
                    </div>
                    <div className='card-img'>
                        <img src='https://images.pexels.com/photos/7691041/pexels-photo-7691041.jpeg?auto=compress&cs=tinysrgb&w=600' alt='women'/>
                    </div>
                </Link>
            </div>

            <div className='main-card'>
                <Link to='./men' style={{textDecoration: 'none', width:'500px', height:'200px', display:'flex', alignItems:'center', justifyContent:'space-between', color:'black', padding:'20px'}}>
                    <div className='card-content'>
                        <h1>Men</h1>
                        <p>Explore the latest Dresses trends for Men</p>
                        <p className='store'>Enter store{<ArrowForwardIosIcon style={{height: '13px'}}/>}</p>
                    </div>
                    <div className='card-img'>
                        <img src='https://images.pexels.com/photos/7083927/pexels-photo-7083927.jpeg?auto=compress&cs=tinysrgb&w=600' alt='men'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Main