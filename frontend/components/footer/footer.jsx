import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

// const Footer = () => {
//     return (
//         <footer className="footer-container">
//             <div className="footer-width-maker">
//                 <div className="footer-navbar">
//                     <div className="area-item-container">
//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>

//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>
//                     </div>
//                     <div className="area-item-container">
//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>
                        
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>

//                     </div>
//                     <div className="area-item-container">
//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>
                        
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <Link to={`/searches/manhattan`}>Manhattan</Link>
//                         <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                         <Link to={`/searches/queens`}>Queens</Link>
//                         <Link to={`/searches/bronx`}>Bronx</Link>

//                     </div>
//                     <div className="footer-nav-item">
//                         <Link to={`/blog`}>BLOG</Link>
//                         <Link to={`/hiring`}>WE'RE HIRING</Link>
//                         <Link to={`/submit`}>SUBMIT YOUR LISTINGS</Link>
//                         <Link to={`/searches/all`}>BROWSE ALL HOMES</Link>

//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <Link to={`/blog`}>BLOG</Link>
//                         <Link to={`/hiring`}>WE'RE HIRING</Link>
//                         <Link to={`/submit`}>SUBMIT YOUR LISTINGS</Link>
//                         <Link to={`/searches/all`}>BROWSE ALL HOMES</Link>
//                     </div>
//                 </div>
//             </div>

//             <div className="footer-separator"></div>

//             <ul className="favicons">
//                 <li>
//                     <a className="github-link" href="https://github.com/MackZumarraga">
//                         <img src="http://www.github.com/favicon.ico"/>
//                     </a>
//                 </li>
//                 <li>
//                     <a className="github-link" href="https://www.linkedin.com/in/mackzumarraga/">
//                         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="linked-in-favicon"/>
//                     </a>
//                 </li>
//                 <li>
//                     <a className="github-link" href="https://medium.com/@mackinjoshzumarraga">
//                         <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" className="medium-favicon"/>
//                     </a>
//                 </li>
//             </ul>

//             <div className="footer-text">IdentiStreet is a clone of StreetEasy.com. Created by Mackinjosh Zumarraga 2022</div>

//             <div className="footer-image-container">
//                 <img src={window.skyline} alt="" className="footer-image"/>
//             </div>
//         </footer>
//     )
// };



class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        debugger
        this.props.updateFilter('location', e.currentTarget.value)
        this.props.fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    }

    render() {

        return (
            <footer className="footer-container">
                <div className="footer-width-maker">
                    <div className="footer-navbar">
                        <div className="area-item-container">
                            <button id="area-item-title" value="Manhattan" onClick={this.handleClick}>Manhattan</button>
                            <button value="Roosevelt Island" onClick={this.handleClick}>Roosevelt Island</button>
                            <button value="Financial District" onClick={this.handleClick}>Financial District</button>
                            <button value="Soho" onClick={this.handleClick}>Soho</button>
                            <button value="Hudson Square" onClick={this.handleClick}>Hudson Square</button>
                            <button value="Little Italy" onClick={this.handleClick}>Little Italy</button>
    
                            <br/>
                            <br/>
                            <br/>
                            <br/>
    
                            <button id="area-item-title" value="Brooklyn" onClick={this.handleClick}>Brooklyn</button>
                            <button value="Greenpoint" onClick={this.handleClick}>Greenpoint</button>
                            <button value="Williamsburg" onClick={this.handleClick}>Williamsburg</button>
                            <button value="East Williamsburg" onClick={this.handleClick}>East Williamsburg</button>
                            <button value="Fort Greene" onClick={this.handleClick}>Fort Greene</button>
                            <button value="Boreum Hill" onClick={this.handleClick}>Boreum Hill</button>
                        </div>
                        <div className="area-item-container">
                            <button id="area-item-title" value="Queens" onClick={this.handleClick}>Queens</button>
                            <button value="Astoria" onClick={this.handleClick}>Astoria</button>
                            <button value="Ditmars-Steinway" onClick={this.handleClick}>Ditmars-Steinway</button>
                            <button value="Long Island City" onClick={this.handleClick}>Long Island City</button>
                            <button value="Hunters Point" onClick={this.handleClick}>Hunters Point</button>
                            <button value="Sunnyside" onClick={this.handleClick}>Sunnyside</button>
                            
                            <br/>
                            <br/>
                            <br/>
                            <br/>
    
                            <button id="area-item-title" value="Bronx" onClick={this.handleClick}>Bronx</button>
                            <button value="Mott Haven" onClick={this.handleClick}>Mott Haven</button>
                            <button value="North New York" onClick={this.handleClick}>North New York</button>
                            <button value="Melrose" onClick={this.handleClick}>Melrose</button>
                            <button value="Port Morris" onClick={this.handleClick}>Port Morris</button>
                            <button value="Claremont" onClick={this.handleClick}>Claremont</button>
    
                        </div>
                        <div className="area-item-container">
                            <button id="area-item-title" value="Staten Island" onClick={this.handleClick}>Staten Island</button>
                            <button value="North Shore" onClick={this.handleClick}>North Shore</button>
                            <button value="Arlington" onClick={this.handleClick}>Arlington</button>
                            <button value="Elm Park" onClick={this.handleClick}>Elm Park</button>
                            <button value="Howland Hook" onClick={this.handleClick}>Howland Hook</button>
                            <button value="Park Hill" onClick={this.handleClick}>Park Hill</button>
                            
                            <br/>
                            <br/>
                            <br/>
                            <br/>
    
                            <button id="area-item-title" value="New Jersey" onClick={this.handleClick}>New Jersey</button>
                            <button value="Cliffside Park" onClick={this.handleClick}>Cliffside Park</button>
                            <button value="Edgewater" onClick={this.handleClick}>Edgewater</button>
                            <button value="Fort Lee" onClick={this.handleClick}>Fort Lee</button>
                            <button value="Jersey City" onClick={this.handleClick}>Jersey City</button>
                            <button value="Journal Square" onClick={this.handleClick}>Journal Square</button>
    
                        </div>
                    </div>
                </div>
    
                <div className="footer-separator"></div>
    
                <ul className="favicons">
                    <li>
                        <a className="github-link" href="https://github.com/MackZumarraga" target="_blank">
                            <img src="http://www.github.com/favicon.ico"/>
                        </a>
                    </li>
                    <li>
                        <a className="github-link" href="https://www.linkedin.com/in/mackzumarraga/" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="linked-in-favicon"/>
                        </a>
                    </li>
                    <li>
                        <a className="github-link" href="https://angel.co/u/mackinjosh-zumarraga" target="_blank">
                            <img src="https://img.icons8.com/nolan/344/angelist.png" className="angel-favicon"/>
                        </a>
                    </li>
                </ul>
    
                <div className="footer-text">IdentiStreet is a clone of StreetEasy.com. Created by Mackinjosh Zumarraga 2022</div>
    
                <div className="footer-image-container">
                    <img src={window.skyline} alt="" className="footer-image"/>
                </div>
            </footer>
        )
    }
};


export default withRouter(Footer);