import React,{ useContext,useState }   from 'react';
import { context }                     from '../context.js';

const Display = () => {
	const { state,dispatch } = useContext(context);
	const [inform,setInform] = useState(false);

	return(
		<div className='inform'>
			<div className='list-type1'>
				<div className='splitwise'>Click to  check transaction for specific user</div>
				<ol>
					{state.friends.map(item=>
					<div className='display'>
						<div onClick={e=>setInform(item)}>{item}</div>
					</div>
					)}
				</ol>
			</div>
			{inform?
			<div className='userinfo'>
				<div className='splitwise'>
					User Information
				</div>
				<div className='userinformation'>
					{inform}
				</div>
				<div className='userinformation1'>
					<div className='splitwise'>Transaction</div>
					<div>{state.amount.map(item=>
						{return item.give === inform ? 
						<div className='togive'>{inform} has to give {item.amount} to {item.recieve}</div>:null}
						)}
					</div>
					<div>{state.amount.map(item=>
						{return item.recieve === inform ? 
						<div className='torecieve'>{inform} has to get {item.amount} from {item.give}</div>:null}
						)}
					</div>
				</div>
			</div>
			:null}
		</div>
		);
}

export default Display;
