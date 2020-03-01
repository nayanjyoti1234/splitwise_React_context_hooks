import React, { useState,useContext }   from 'react';
import { context }                      from '../context.js';
import uuidv4                           from 'uuid/v4';

const Groups = () => {
	const [amount,setAmount]          = useState('');
	const [give,setGive]              = useState('');
	const [recieve,setRecieve]        = useState('');
	const [grouping,setGroup]         = useState('');
	const [submit,setSubmit]          = useState(false);
	const [noamount,setNoamount]      = useState(false);
	const [valid,setValid]            = useState(false);
	const [groupvalid,setGroupvalid]  = useState(false);
	const [sameName,setSame]          = useState(false);
	const {state,dispatch}            = useContext(context);
	console.log('groups',state);

	const handleclick = (e) => {
		setValid(false);
		setSubmit(false);
		setSame(false);
		setNoamount(false);
		setGroupvalid(false);
		e.preventDefault();
		const {groups,group} = state;
		console.log(groups);
		const id = uuidv4();
		if(group.indexOf(grouping) < 0) {
			setGroupvalid(true);
		}
		else if(amount === ''){
			setNoamount(true);
		}
		else if (give === '' || recieve === '') {
			setValid(true);
		}
		else if (recieve === give) {
			setSame(true);
		}
		else{
			dispatch({type:'ADD_AMOUNT',payload:{grouping,amount,give,recieve,id}})
			setSubmit(true);
		}
		setAmount('');
		setGive('');
		setRecieve('');
		setGroup('');
	}


	return(
		<div className='Groups'>
			<input className='text' type='text' placeholder='enter the group' value={grouping} onChange={(e)=>{setGroup(e.target.value);
				setSubmit(false)}}/>
			<input className='number' type='number' placeholder='enter the amount' value={amount} onChange={e=>setAmount(e.target.value)}/>
			<input className='text' type='text' placeholder='the sender name..' value={give} onChange={e=>setGive(e.target.value)}/>
			<input className='text' type='text' placeholder='the reciever name..' value={recieve} onChange={e=>setRecieve(e.target.value)}/>
			<input className='Submit' type='Submit' onClick={handleclick}/>
			{valid       ? <div className='invalid'>please enter the sender and reciever name</div>:null}
			{sameName    ? <div className='invalid'>Sender and Reciever cannot be same</div>:null}
			{submit      ? <div className='submit'>Amount added successfully</div>:null}
			{groupvalid  ? <div className='invalid'>Group does not exist</div>:null}
			{noamount ? <div className='invalid'>please fill the amount</div>:null}
		</div>
	);
};

export default Groups;
