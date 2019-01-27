import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return(
		<nav className="nav-wrapper green darken-1 mynavbar">
			<div className="container">
				<Link to="/" className="brand-logo black-text maintitle">HI LIB</Link>
				<div className="right">
					<span className="myLink3"> CHETAN BHAGAT {"  "}  </span>
					<span className="myLink3"> AMISH TRIPATHI {" "} </span>
					<span className="myLink3"><Link to="/authors"> MORE</Link></span>
			
				</div>
			</div>
		</nav>
	)
}

export default Navbar;