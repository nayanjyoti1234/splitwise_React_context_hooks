import React, {useState,useContext}   from 'react';
import {context}                      from '../../context.js';
import Displaybarcode                 from './Displaybarcode.js';

const Barcode = () => {
	const {state,dispatch}         =  useContext(context);
	const [groupname,setGroupname] = useState('');
	const [username,setUsername]   = useState('');
	const [blank,setBlank]         = useState(false);
	const [Group,setGroup]         = useState(false);
	const [display,setDisplay]     = useState(false);

	const handleclick = (e) => {
		e.preventDefault();

		const {group} = state;

		setBlank(false);
		setGroup(false);
		setDisplay(false);


		if((groupname !== '' || username !== '')||(groupname !== '' && username !== '')) {
			if(group.indexOf(groupname) > -1){
				setDisplay(true);
			}
			else{
				setGroup(true);
			}
		}
		else {
			setBlank(true);
		}

	}

	const handlechange = (e) => {
		e.preventDefault();
		setGroupname(e.target.value)
		setBlank(false);
		setGroup(false);
		setDisplay(false);
	}

	return(
		<div className='Friends'>
			<div className='search'>
					<input className='input2'  type='text' value={groupname} placeholder='enter groupname' 
						onChange={handlechange}/>
					<img src={require('../images/search.png')} className='plus' alt='plus'
						onClick={handleclick}/>
			</div>
			{blank ? <div className='invalid'> Please enter a name </div> : null}
			{Group ? <div className='invalid'> Please enter a valid groupname </div> : null}
			{display && groupname ? <Displaybarcode group={groupname}/>:null}
		</div>
		);
};

export default Barcode;
