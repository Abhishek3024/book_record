import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Single from './components/Single';
import {connect} from 'react-redux';
import More from './components/More';


class App extends Component {
  render() {
    return (
    		<Router>
    			<Fragment>
					<Navbar />
					<Route exact path ='/' component = {Main} />
					<Route exact path = "/view/:id" component = {Single} />
					<Route exact path = "/authors" component = {More} />
					<Footer />
				</Fragment>
			</Router>
    );
  }
}

const mapStateToProps = (state) => {
	return{
		books: state.books,
		authors: state.authors
	}
}

export default connect(mapStateToProps)(App);