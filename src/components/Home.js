import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends Component{
  render(){

  	const {books} = this.props;

    return(
    	
        <div className="container">
            <div className="row">
                <p className="grey-text subtitle center">Books For You...</p>
            	{Object.keys(books).map((id) => (
                    <div key={id} className="col m4">
                        <div className="card large grey lighten-3">
                            <div className="card-image">
                                <Link to={`/view/${id}`}>
                                    <img src={books[id].image_url} alt={books[id].title} />
                                </Link>
                            </div>
                            <div className="card-title title">
                                <span>{books[id].title}</span>
                            </div>
                            <div className="card-action">
                                <p className="center red-text">&hearts; {books[id].likes}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    	 	
    );
  }
}

const mapStateToProps = (state) =>{
	return{
		books: state.books
	}
}


export default connect(mapStateToProps)(Home);