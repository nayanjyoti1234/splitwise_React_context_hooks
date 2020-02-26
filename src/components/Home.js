import React, {useState,useContext}   from 'react';
import {context}                      from '../context.js';

const Home = () => {
	const {state,dispatch}   = useContext(context);
	const [search,setSearch] = useState('');
	console.log(state.amount);

	return(
		<div className='home'>
			<div className='search1'>
				<div className='transaction'>Click on transactions to settle it</div>
				<div className='list-type1'>
					<ol>
						{state.amount.map(amount=>
						<div className='display' onClick={e => {dispatch({type:'REMOVE_AMOUNT', key:amount.id})}}>
							<div>{amount.give} has to give {amount.amount} to {amount.recieve}</div>
						</div>
						)}
					</ol>
				</div>
			</div>
		</div>
		);
};

export default Home;
