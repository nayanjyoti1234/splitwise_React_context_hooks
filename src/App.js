import React,{ Component }            from 'react';
import Navbar                         from './components/Navbar';
import Home                           from './components/Home';
import Groups                         from './components/Groups';
import Friends                        from './components/Friends';
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
							<Route path='/' component={Home} exact/>
							<Route path='/friends' component={Friends}/>
							<Route path='/groups' component={Groups}/>
						</ContextProvider>
					</div>
				</BrowserRouter>
			</div>

			);
}
}

export default App;
