import React, {useState,useContext}   from 'react';
import {context}                      from '../context.js';
import Display                        from './Display.js';

const Friends = () => {
	const {dispatch}         = useContext(context);
	const [search,setSearch] = useState('');
	const [blank,setBlank]   = useState(false);

	const handleclick = (e) => {

		setBlank(false);

		if(search !== '') {
			dispatch({type:'ADD_FRIEND',payload:search})
		}
		else {
			setBlank(true);
		}

		setSearch('');
	}

	return(
		<div className='Friends'>
			<div className='search'>
				<div>
					<input className='input' type='text' className='input' value={search} placeholder='enter a friend' 
						onChange={e => setSearch(e.target.value)}/>
				</div>
				<div className='pluss'>
					<img src={require('./plus-flat.png')} className='plus' alt='plus'
						onClick={handleclick}/>
				</div>
				<div className='delete'>
					<img src={require('./data-delete-icon.png')} className='delete' alt='plus'
						onClick={e=>dispatch({type:'REMOVE_FRIEND'})}/>
				</div>
			</div>
			{blank ? <div className='invalid'> Please enter a name </div> : null}
			<Display/>
		</div>
		);
};

export default Friends;
