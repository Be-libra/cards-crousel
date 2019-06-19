import React from 'react';
import './Header.css';
const Header =({onClickprofile})=> {
	
		return(
			<div>
				<div className='bg' >
				<div className='heading'>
					<h1 className='f1 white ph3'>Friendship</h1>
					<p className='f2 baskervile white ph3 mv0 '>"Walk with a friend in dark ,</p>
					<p className='f2 baskervile white ph3 mv0'>than walk alone in light."</p>
					</div> 
					<div>
					</div>
						<div className="tc pa4 ">
						  <img onClick={()=>onClickprofile('cards')} src="http://tachyons.io/img/logo.jpg" 
						  className="profile br-100 pa1 ba b--white-90 h4 w4 grow pointer"
						   alt="avatar"/>
						</div>
					</div>			
			</div>
			);
	}





export default Header;