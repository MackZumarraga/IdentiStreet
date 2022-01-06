import React from 'react';
import NavBarOptions from "./nav_bar_options"
import NavBarSearch from "./nav_bar_search"
import NavBarFilterBox from './nav_bar_filterbox';

export default () => (
  <div className="menu-filter-width-maker">
    <div className="menu-filter-container">
      <div className="nav-menu-container">
        <NavBarOptions/>
        <NavBarSearch/>
      </div>
      <NavBarFilterBox/>
    </div>
  </div>
)
