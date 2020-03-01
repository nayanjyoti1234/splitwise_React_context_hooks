import React,{ useContext,useState }   from 'react';
import { context }                     from '../context.js';

var array   = [];
var array1  = [];

const Display = (props) => {
	const { state,dispatch } = useContext(context);
	const [inform,setInform] = useState(false);
	const [flag,setFlag]     = useState(false);
	if(flag === false){
		array  = [];
		array1 = [];
		for (var i=0;i< state.amount.length;i++){
			array = {...state.amount[i]};
			console.log(array,props.group,array.grouping);
			if(array1.indexOf(array.give) < 0 && props.group === array.grouping)
				array1.push(array.give)
			if(array1.indexOf(array.recieve) < 0 && props.group === array.grouping)
				array1.push(array.recieve)
			console.log(array1)
		}
		setFlag(true);
	}


	return(	<div className='inform'>
			{flag ?
				<div className='list-type1'>
					<div className='splitwise'>Click to  check transaction for specific user</div>
					<ol>
						{array1.map(item=>
						<div className='display'>
							<div onClick={e=>setInform(item)}>{item}</div>
						</div>
						)}
					</ol>
			</div>:null}
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
						{return item.give === inform && item.grouping === props.group ? 
						<div className='togive'>{inform} has to give {item.amount} to {item.recieve}</div>:null}
						)}
					</div>
					<div>{state.amount.map(item=>
						{return item.recieve === inform && item.grouping === props.group? 
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
