import React,{ Component }            from 'react';
import Navbar                         from './components/Navbar/Navbar.js';
import Grouptransaction               from './components/Grouptransaction/Grouptransaction.js';
import Addgroup                       from './components/Addgroup/Addgroup.js';
import Usergrouptransaction           from './components/Usergrouptransaction/Usergrouptransaction.js';
import Addamount                      from './components/Addamount/Addamount.js';
import Userinfo                       from './components/Userinfo/Barcode.js';
import { BrowserRouter,Route}         from 'react-router-dom';
import ContextProvider                from './context.js';

class App extends Component{

	render(){
		return(

			<div className='comp'>
				<BrowserRouter>
					<Navbar/>
					<div>
						<ContextProvider>
							<Route path='/'                     component={Addgroup} exact/>
							<Route path='/grouptransaction'     component={Grouptransaction}/>
							<Route path='/usergrouptransaction' component={Usergrouptransaction}/>
							<Route path='/addamount'            component={Addamount}/>
							<Route path='/userinfo'             component={Userinfo}/>
						</ContextProvider>
					</div>
				</BrowserRouter>
			</div>

			);
}
}

export default App;
