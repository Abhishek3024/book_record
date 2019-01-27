import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
	return(	
      <div className="myfooter">
        <footer className="page-footer green lighten-1">
        	<div className="container">
               <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text myLink4">Here we welcomes you in Hi Lib.</h5>
                <p className="black-text text-lighten-4  myLink3">You can use to add different Books...</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text myLink">Important Links</h5>
                <div className="row1">
                	<Link className="myLink2" to="/">Premarliries</Link> <span className="black-text">|</span> <Link className=" myLink2" to="/computer">Computer Science</Link> <span className="black-text">|</span> <Link className=" myLink2" to="/information">Information Technology</Link> <span className="black-text">|</span> <Link className="myLink2" to="/electronics">Electronics</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container black-text">
            © 2018 Copyright PokeTimes
            </div>
          </div>
        </footer>
      </div>
   	);
}

export default Footer;