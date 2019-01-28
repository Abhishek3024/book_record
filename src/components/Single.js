import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialIcon  from 'material-icons-react';
import { increment } from '../actions/actionCreators';

class Single extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favorite: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
        this.setState({
			favorite: true
		});

        this.props.increment(this.props.book.id);
    }

	render() {
		const { book } = this.props;

		return (
			<div className="container center">
				<p className="grey-text subtitle center">{book.title}</p>
				<div className="row">
					<div className="col m12">
						<div className="card grey lighten-4">
							<div className="card-image">
								<img className="activator myimg2" src={book.image_url} alt={book.title} />
							</div>
							<div className="card-content grey lighten-3">
								<a className="activator myLink3">{book.title} - Introduction -></a>
							</div>
							<div className="horizontal card-reveal">
								<img src={book.image_url} alt={book.title}/>
								<span className="card-title card-stacked grey-text myLink5 text-darken-4">
									{book.title}
									<span className="right red-text">
										<MaterialIcon icon="close" />
									</span>
								</span>
								<p className="myLink6 grey-text card-action">
									{book.description}
									<span className="right">
										{!this.state.favorite ? 
											<i className="material-icons"  onClick={this.handleSubmit}>
												favorite_border
											</i> : 
											<i className="material-icons blue-text">
												favorite
											</i>
										}
									</span>
								</p>	
							</div>
						</div>
					</div>
				</div>
			</div>   
		);
	}
}

const mapStateToProps = (state,ownProps) => {
	const id = ownProps.match.params.id;
	const books = state.books
	const book = books ? books[id] : null
	return {
		book:book
	}
}



export default connect(mapStateToProps, { increment })(Single);