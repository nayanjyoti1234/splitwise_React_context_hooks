import React        from 'react';
import { NavLink }  from 'react-router-dom';

const Navbar = () => {
	return(
		<div className='navbar'>
			<div className='splitwise'>Splitwise</div>
			<div className='links'>
				<div className='addgroups'>	
					<NavLink to='/addgroups'>Add or Remove Group</NavLink>
				</div>
				<div className='ho'>
					<NavLink to='/'>Group Transactions</NavLink>
				</div>
				<div className='friends'>
					<NavLink to='/friends'>User-tranactions in a group</NavLink>
				</div>
				<div className='groups'>	
					<NavLink to='/groups'>Add amount</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
