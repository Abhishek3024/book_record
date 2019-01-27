import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Home from './Home';

function mapStateToProps(state){
	return{
		books:state.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}

const Main = connect(mapStateToProps,mapDispatchToProps)(Home);

export default Main;