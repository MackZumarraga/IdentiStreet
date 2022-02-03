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

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    };

    update(filter) {
        debugger
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    }

    render() {

        return (
            <div className="nav-search-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                  <input type="text" placeholder='e.g. neighborhood, borough' className="search-bar-input" onChange={this.update('location')}></input>
                  <button className="search-button">
                      <span className="search-button-space">Search</span>
                  </button>
                </form>
            </div>
        )
    }
};

export default withRouter(NavBarSearch);
    