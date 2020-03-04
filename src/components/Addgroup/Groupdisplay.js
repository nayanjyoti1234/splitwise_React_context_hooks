import React,{ useContext,useState,useEffect }   from 'react';
import { context }                     from '../../context.js';


const Groupdisplay = () => {
	const { state,dispatch } = useContext(context);
	const [inform,setInform] = useState(false);
	var array = [];
	var array1 = [];

	const creategroup = () => {
		if(inform !== false){
		for (var i=0;i< state.amount.length;i++){
			array = {...state.amount[i]};
			if(array1.indexOf(array.give) < 0 && inform === array.grouping)
				array1.push(array.give)
			if(array1.indexOf(array.recieve) < 0 && inform === array.grouping)
				array1.push(array.recieve)
				console.log(array1)
			}
		}
	}
	return(
		state.group.length > 0 ?
		<div className='inform'>
			<div className='list-type1'>
				<div className='splitwise'>Click on the group to check number of user in the group</div>
				<ol>
					{state.group.map(item=>
					<div className='display' onClick={e=>setInform(item)}>{item}</div>
					)}
				</ol>
			</div>
			
			{inform  ?
			<div className='userinfo'>
				<div className='splitwise'>
					Users in the group {inform}
				</div>
				{creategroup()}
				<div className='groupinformation1'>
						{
						array1.map(item=> 
						<div>{item}</div>)
						}
						{
								 array1.length > 0 ? null: <div>No users in the group</div>
						}
					</div>
			</div>
			:null}
		</div>:null
		);
}

export default Groupdisplay;
