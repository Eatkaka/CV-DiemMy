import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/my.jpg';

export default function Profile() {
	const styled ={
		cursor : 'pointer',

	};
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Diễm My' />
					<div className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</div>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
				Hoàng Thị Diễm My
					</span>
					<p>Front End Web Developer</p>
				</div>
				<div className='card-reveal'>
					
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<a target="_blank" href="https://www.facebook.com/profile.php?id=100008815335270"
						style={styled}>						
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'/>
                    </a>
		
					   <img src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-mat-cuoi-dep-cute-cam-xuc.jpg"
					    alt="" style={{"height":"50px","width":"100px"}} />
					</p>
				</div>
			</div>
		</div>
	);
}
