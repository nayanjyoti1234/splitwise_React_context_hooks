import React, { useState,useContext }   from 'react';
import { context }                      from '../context.js';
import uuidv4                           from 'uuid/v4';

const Groups = () => {
	const [amount,setAmount]   = useState('');
	const [give,setGive]       = useState('');
	const [recieve,setRecieve] = useState('');
	const [submit,setSubmit]   = useState('');
	const [valid,setValid]     = useState(false);
	const [sameName,setSame]   = useState(false);
	const {state,dispatch}     = useContext(context);
	console.log('groups',state);

	const handleclick = (e) => {
		setValid(false);
		setSubmit(false);
		setSame(false);
		e.preventDefault();
		const {friends} = state;
		const id = uuidv4();
		console.log('==friend',friends);
		if((friends.indexOf(give) > -1 && friends.indexOf(recieve) > -1)&&(give !== recieve)) {
			dispatch({type:'ADD_AMOUNT',payload:{amount,give,recieve,id}})
			setSubmit(true);
		}
		else{
			if(give !== recieve)
				setValid(true);
			else
				setSame(true);
		}
	}


	return(
		<div className='Groups'>
			<input type='number' placeholder='enter the amount' value={amount} onChange={e=>setAmount(e.target.value)}/>
			<input type='text' placeholder='whom to give' value={give} onChange={e=>setGive(e.target.value)}/>
			<input type='text' placeholder='who will get' value={recieve} onChange={e=>setRecieve(e.target.value)}/>
			<input type='Submit' onClick={handleclick}/>
			{valid     ? <div className='invalid'>please enter the valid users</div>:null}
			{sameName  ? <div className='invalid'>Sender and Reciever cannot be same</div>:null}
			{submit    ? <div className='submit'>Amount added successfully</div>:null}
		</div>
	);
};

export default Groups;
