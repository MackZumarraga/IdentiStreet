import React from 'react';
// import { Link } from 'react-router-dom';

export default () => (
    <div className="advanced-search"> 
        ADVANCED OPTIONS
        <h1 className="form-section-title">SIZE/DESCRIPTION</h1>
        <div className="form-section-content">                       
            <label className="form-section-content-input">Bathrooms
                {/* <input type="text" value={this.state.baths} onChange={this.update('baths')} /> */}
                <input type="text"/>
            </label>
        </div>

        <h1 className="form-section-title">AMENITIES</h1>
        <div className="form-section-content-amenities">
            <label className="amenities-label">
            {/* <input type="checkbox" value={!this.state.outdoor_space} onChange={this.update('outdoor_space')}/> */}
            <input type="checkbox"/>
            <span className="checkmark"></span>
            Outdoor Space
            </label>

            {/* <label className="amenities-label">
            <input type="checkbox" value={!this.state.dishwasher} onChange={this.update('dishwasher')}/>
            <span className="checkmark"></span>
            Dishwasher
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.washer_dryer_in_unit} onChange={this.update('washer_dryer_in_unit')}/>
            <span className="checkmark"></span>
            Washer Dryer In Unit
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.washer_dryer_in_building} onChange={this.update('washer_dryer_in_building')}/>
            <span className="checkmark"></span>
            Washer Dryer In Building
            </label>


            <label className="amenities-label">
            <input type="checkbox" value={!this.state.furnished} onChange={this.update('furnished')}/>
            <span className="checkmark"></span>
            Furnished
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.fireplace} onChange={this.update('fireplace')}/>
            <span className="checkmark"></span>
            Fireplace
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.central_air} onChange={this.update('central_air')}/>
            <span className="checkmark"></span>
            Central Air
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.city_view} onChange={this.update('city_view')}/>
            <span className="checkmark"></span>
            City View
            </label>


            <label className="amenities-label">
            <input type="checkbox" value={!this.state.park_view} onChange={this.update('park_view')}/>
            <span className="checkmark"></span>
            Park View
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.skyline_view} onChange={this.update('skyline_view')}/>
            <span className="checkmark"></span>
            Skyline View
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.water_view} onChange={this.update('water_view')}/>
            <span className="checkmark"></span>
            Water View
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.elevator} onChange={this.update('elevator')}/>
            <span className="checkmark"></span>
            Elevator
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.doorman} onChange={this.update('doorman')}/>
            <span className="checkmark"></span>
            Doorman
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.gym} onChange={this.update('gym')}/>
            <span className="checkmark"></span>
            Gym
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.garage_parking} onChange={this.update('garage_parking')}/>
            <span className="checkmark"></span>
            Garage Parking
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.pets_allowed} onChange={this.update('pets_allowed')}/>
            <span className="checkmark"></span>
            Pets Allowed
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.swimming_pool} onChange={this.update('swimming_pool')}/>
            <span className="checkmark"></span>
            Swimming Pool
            </label>

            <label className="amenities-label">
            <input type="checkbox" value={!this.state.broker_fee} onChange={this.update('broker_fee')}/>
            <span className="checkmark"></span>
            Broker Fee
            </label> */}

            {/* <label className="amenities-label" className="container">Guarantors Accepted
            <input type="checkbox" value={!this.state.guarantors_accepted} onChange={this.update('guarantors_accepted')}/>
            <span className="checkmark"></span>
            </label>*/}

        </div>
    </div>
);
