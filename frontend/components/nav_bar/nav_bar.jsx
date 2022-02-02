import React from 'react';
import NavBarOptions from "./nav_bar_options"
import NavBarSearch from "./nav_bar_search"
import NavBarFilterBox from './nav_bar_filterbox';

// export default () => (
//   <div className="menu-filter-width-maker">
//     <div className="menu-filter-container">
//       <div className="nav-menu-container">
//         <NavBarOptions/>
//         <NavBarSearch/>
//       </div>
//       <NavBarFilterBox/>
//     </div>
//   </div>
// )

class NavBar extends React.Component {


  render() {
      const {minPrice, maxPrice, location, bedrooms, updateFilter} = this.props

      return (
        <div className="menu-filter-width-maker">
          <div className="menu-filter-container">
            <div className="nav-menu-container">
              <NavBarOptions/>
              <NavBarSearch/>
            </div>
            <NavBarFilterBox
              minPrice={minPrice}
              maxPrice={maxPrice}
              location={location}
              bedrooms={bedrooms}
              updateFilter={updateFilter}
            />
          </div>
        </div>
      )
  }
};

export default NavBar;