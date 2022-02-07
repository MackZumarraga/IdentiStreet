import React from 'react';
import { withRouter } from 'react-router';

// export default () => (

//     <div className="nav-search-container">
//         <form className="search-form">
//           <input type="text" placeholder='e.g. address, building, agent' className="search-bar-input"></input>
//           <button className="search-button">
//               <span className="search-button-space">Search</span>
//           </button>
//         </form>
//     </div>

// )

class NavBarSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this);
    }

    // componentWillUnmount() {
    //     this.setState({location: ""})
    // }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.updateFilter('location', this.state["location"])
        this.props.fetchListings(getState().ui.filters)
        this.setState({location: ""})
        this.props.history.push("/search")
    };

    // update(filter) {
    //     debugger
    //     return e => this.props.updateFilter(filter, e.currentTarget.value)
    // }

    update() {
        debugger
        return e => this.setState({location: e.currentTarget.value})
    }

    render() {

        return (
            <div className="nav-search-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                  <input 
                    type="text" 
                    placeholder='e.g. neighborhood, borough' 
                    className="search-bar-input" 
                    value={this.state["location"]}
                    onChange={this.update()}
                    ></input>
                  <button className="search-button">
                      {/* <span className="search-button-space">Search</span> */}
                      <img src={window.search} alt="" className="search-icon"/>
                  </button>
                </form>
            </div>
        )
    }
};

export default withRouter(NavBarSearch);
    