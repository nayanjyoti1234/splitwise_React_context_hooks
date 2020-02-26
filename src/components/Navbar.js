import React        from 'react';
import { NavLink }  from 'react-router-dom';

const Navbar = () => {
	return(
		<div className='navbar'>
			<div className='splitwise'>Splitwise</div>
			<div className='links'>
				<div className='ho'>
					<NavLink to='/'>Overall Transactions</NavLink>
				</div>
				<div className='friends'>
					<NavLink to='/friends'>Add Friend</NavLink>
				</div>
				<div className='groups'>	
					<NavLink to='/groups'>Add amount</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
