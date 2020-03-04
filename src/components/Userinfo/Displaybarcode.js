import React,{ useContext,useState }   from 'react';
import Barcode1                        from 'qrcode.react';
import { context }                     from '../../context.js';

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


	return(	
		<div>
			{flag? 
			<div className='userinfo1'>
				<div>
					<Barcode1  className='barcode1' value={props.group} 
						bgColor="#FFFFFF" renderAs='canvas' level='H' includeMargin={false}/>
				</div>
				<div className='barcodetext'>Please Scan QRcode</div>
			</div>
			:null}
		</div>
		);
}

export default Display;
