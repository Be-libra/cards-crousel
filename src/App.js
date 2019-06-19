import React,{Component} from "react";
import Header from './components/Header';
import Deck from "./components/Deck";
import './styles/Deck.css';

class App extends Component {
	constructor(){
		super()
		this.state={
		route:'home'
	}
}

	onClickprofile=(route)=>{
		if(route!=='home'){
			this.setState({route});
		}
	}
	render(){
	return(
		this.state.route==='home'?
	<div>
		<Header onClickprofile={this.onClickprofile} />	
		</div>
		:
	
		<div className='view'>
			<h2 className='ph2 underline'>Refresh to go back</h2>
			<Deck />
			</div>
	);}
}

export default App;
