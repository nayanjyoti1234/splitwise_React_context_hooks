import React, {useState,useContext}   from 'react';
import {context}                      from '../context.js';

const Home = () => {
	const {state,dispatch}     = useContext(context);
	const [search,setSearch]   = useState('');
	const [groupname,setGroup] = useState('');
	const [flag,setFlag]       = useState('');
	const [error,setError]     = useState('');
	const [blank,setBlank]     = useState('');

	console.log(state.amount);

	const handlechange = (e) => {
		e.preventDefault();

		setGroup(e.target.value);
	}

	const handleclick = (e) => {
		e.preventDefault();

		setFlag(false);
		setError(false);
		setBlank(false);
		
		if (groupname !== '') {

			if(state.group.indexOf(groupname) > -1){
				setFlag(true)
			}
			else{
				setError(true)
			}
		}
		else {
			setBlank(true)
		}
	}

	return(
		<div>
		<div className='Friends'>
			<div className='search'>
					<input className='input2'  type='text' value={groupname} placeholder='enter groupname to check group transaction' 
						onChange={handlechange}/>
					<img src={require('./images/search.png')} className='plus' alt='plus'
						onClick={handleclick}/>
				</div>
			</div>
			{blank ? <div className='invalid'> Please enter a name </div> : null}
			{error ? <div className='invalid'> Please enter a valid groupname </div> : null}
			{flag ? <div className='home'>
			<div className='search1'>
				<div className='transaction'>Click on transactions to settle it</div>
				<div className='list-type1'>
					<ol>
						{state.amount.map(amount=>
							(groupname === amount.grouping ?
							<div className='display' onClick={e => {dispatch({type:'REMOVE_AMOUNT', key:amount.id})}}>
								<div>{amount.give} has to give {amount.amount} to {amount.recieve}</div>
							</div> : null)
						)}
					</ol>
				</div>
			</div>
		</div>:null}
</div>
		);
};

export default Home;
