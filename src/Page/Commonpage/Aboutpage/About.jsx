import React from 'react'
import bcimg from '../../../Images/people-business-meeting-high-angle.jpg'
import './About.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calender from '../../../Compontents/Calender';
function About() {
  return (
    <div className='about'>
<div className='backgroundimgabout'><img src={bcimg} alt="bcimg"/></div>
<div className='aboutcontent'>
{/* <form>
    <h1>Login</h1>
    <input type='text' placeholder='UserID'/>
    <input type='password' placeholder='Password'/>
    <button>Submit</button>

 
    currentMonth={new Date().getMonth()}
</form> */}
<div className='currentmonth'><Calender /></div>
{/* <div className='nextmonth'><Calender currentMonth={new Date().getMonth()+1}/></div> */}

</div>
    </div>
  )
}

export default About;