import React, {useState,useContext}   from 'react';
import {context}                      from '../../context.js';
import Groupdisplay                   from './Groupdisplay.js';

const Addgroup = () => {
	const {state,dispatch}   = useContext(context);
	const [groups,setGroup]  = useState('');
	const [flag,setFlag]     = useState(false);
	const [error,setError]   = useState(false);
	const [error1,setError1] = useState(false);
	const [del,setDelete]    = useState(false);

	const handleclick = (e) => {

		e.preventDefault();

		setFlag(false);
		setError(false);
		setDelete(false);

		if(groups !== '') {

			if(state.group.indexOf(groups) < 0 )
				dispatch({type:'ADD_GROUP1',payload:groups})
			else
				setError(true);
		}
		else {
			setFlag(true);
		}

		setGroup('');
	}

	const handleclick1 = (e) => {

		e.preventDefault();

		setFlag(false);
		setError1(false);
		setDelete(false);

		if(groups !== '') {

			if(state.group.indexOf(groups) > -1 )
				dispatch({type:'REMOVE_GROUP',key:groups})
			else
				setError1(true);
		}
		else {
			setFlag(true);
		}

		setGroup('');
	}


	return(
		<div className='Friends'>
			<div className='search'>
				<input className='input1' type='text'  value={groups} placeholder='Add or Remove a group' 
					onChange={e => setGroup(e.target.value)}/>
				<img src={require('../images/plus-flat.png')} className='plus' alt='plus'
					onClick={handleclick}/>
				<img src={require('../images/minus1.png')} className='delete1' alt='plus'
					onClick={handleclick1}/>
				<img src={require('../images/delelte-red1.png')} className='delete' alt='plus'
					onClick={()=>{ 
					return window.confirm("Are you sure you want to delete all the groups?") === true ?
					dispatch({type:'REMOVE_DATA'}):null 
						}}/>
			</div>
			{flag   ? <div className='invalid'> Please enter a name </div> : null}
			{error  ? <div className='invalid'>Group name already taken </div> : null}
			{error1 ? <div className='invalid'>The group you want to remove does not exist </div> : null}
			<Groupdisplay/>
		</div>
		);
};

export default Addgroup;
