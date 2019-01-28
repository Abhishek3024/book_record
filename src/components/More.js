import React,{Component} from 'react';
import {connect} from 'react-redux';

class More extends Component{
	
	render(){
		const {authors} = this.props;
		console.log(this.props);
		return (
			<div className="container">
			<div className="row">
				<h1 className="grey-text subtitle center">Know Your Authors...</h1>
				{Object.keys(authors).map((id) =>(
					<div key={id} className="col m6">
					<div class="card myCard grey lighten-4">
						<div className="card-title">
							<p className="center maintitle">{authors[id].name}</p>
						</div>
    					<div class="center card-content">
      						<img className="myimg3" src={authors[id].image} alt={authors[id].name} />
    					</div>
    					<div class="card-tabs">
      						<ul class="tabs tabs-fixed-width">
        						<li class="tab grey lighten-2 myLink3"><a href="#test4">Early Life</a></li>
        						<br />
        						<li class="tab grey lighten-2 myLink3"><a href="#test6">Professional Life</a></li>
      						</ul>
    					</div>
    					<div class="card-content grey lighten-4">
      						<div id="test4"><p className="myLink5">Early Life </p><br /><p>{authors[id].earlylife}</p></div>
      						<div id="test6"><p className="myLink5">Professional Life</p><br/><p>{authors[id].career}</p></div>
    					</div>
  					</div>
  					</div>
					))
				}
			</div>
			</div>
		);	
	}	
}

const mapStateToProps = (state) =>{
	return {
		authors: state.authors
	}
}

export default connect(mapStateToProps)(More);