import React from 'react';
// import { withRouter } from 'react-router';


class ListingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.listing
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.createListing(this.state)
        // console.log(this.state)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
        // return event => this.setState({[field]: event.target.value})
    }

    // updateCheck(field, event) {
    //     if (event.currentTarget.checked) {
    //         return this.setState({[field]: true})
    //     } else {
    //         return this.setState({[field]: false})
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>ADDRESS</h1>
                    <label>Area
                        <select value={this.state.area} onChange={this.update('area')}>
                            <option value={undefined}>Select Area</option>
                            <option value="Manhattan" onChange={this.update('area')}>Manhattan</option>
                            <option value="Brooklyn" onChange={this.update('area')}>Brooklyn</option>
                            <option value="Queens" onChange={this.update('area')}>Queens</option>
                            <option value="Bronx" onChange={this.update('area')}>Bronx</option>
                            <option value="Staten Island" onChange={this.update('area')}>Staten Island</option>
                            <option value="New Jersey" onChange={this.update('area')}>New Jersey</option>
                        </select>
                    </label>

                    <label>Neighborhood
                        <input type="text" value={this.state.neighborhood} onChange={this.update('neighborhood')}/>
                    </label>
                    
                    <label>Address
                        <input type="text" value={this.state.address} onChange={this.update('address')}/>
                    </label>
                    
                    <label>Unit #
                        <input type="text" />
                    </label>


                    <h1>SIZE/DESCRIPTION</h1>
                    <label>Type
                        <select value={this.state.category} onChange={this.update('category')}>
                            <option value="Rental">Rental</option>
                            <option value="House">House (Coming Soon)</option>
                        </select>
                    </label>
                    
                    <label>Size
                        <input type="text" value={this.state.square_feet} onChange={this.update('square_feet')} /> &nbsp;ft^2
                    </label>
                    
                    <label>Bedrooms
                        <input type="text" value={this.state.bedrooms} onChange={this.update('bedrooms')} />
                    </label>
                    
                    <label>Bathrooms
                        <input type="text" value={this.state.baths} onChange={this.update('baths')} />
                    </label>

                    <label>Description
                        <textarea value={this.state.description} onChange={this.update('description')}></textarea>
                    </label>


                    <h1>PRICE</h1>
                    <label>Monthly rent $
                        <input type="text" value={this.state.price} onChange={this.update('price')}/>
                    </label>

                    <label>Available On
                        <input type="date" value={this.state.leasing_launch_date} onChange={this.update('leasing_launch_date')}/>
                    </label>


                    <h1>AMENITIES</h1>
                    <label className="container">Outdoor Space
                    <input type="checkbox" value={!this.state.outdoor_space} onChange={this.update('outdoor_space')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Dishwasher
                    <input type="checkbox" value={!this.state.dishwasher} onChange={this.update('dishwasher')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Washer Dryer In Unit
                    <input type="checkbox" value={!this.state.washer_dryer_in_unit} onChange={this.update('washer_dryer_in_unit')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Washer Dryer In Building
                    <input type="checkbox" value={!this.state.washer_dryer_in_building} onChange={this.update('washer_dryer_in_building')}/>
                    <span className="checkmark"></span>
                    </label>


                    <label className="container">Furnished
                    <input type="checkbox" value={!this.state.furnished} onChange={this.update('furnished')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Fireplace
                    <input type="checkbox" value={!this.state.fireplace} onChange={this.update('fireplace')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Central Air
                    <input type="checkbox" value={!this.state.central_air} onChange={this.update('central_air')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">City View
                    <input type="checkbox" value={!this.state.city_view} onChange={this.update('city_view')}/>
                    <span className="checkmark"></span>
                    </label>


                    <label className="container">Park View
                    <input type="checkbox" value={!this.state.park_view} onChange={this.update('park_view')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Skyline View
                    <input type="checkbox" value={!this.state.skyline_view} onChange={this.update('skyline_view')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Water View
                    <input type="checkbox" value={!this.state.water_view} onChange={this.update('water_view')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Elevator
                    <input type="checkbox" value={!this.state.elevator} onChange={this.update('elevator')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Doorman
                    <input type="checkbox" value={!this.state.doorman} onChange={this.update('doorman')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Gym
                    <input type="checkbox" value={!this.state.gym} onChange={this.update('gym')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Garage Parking
                    <input type="checkbox" value={!this.state.garage_parking} onChange={this.update('garage_parking')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Pets Allowed
                    <input type="checkbox" value={!this.state.pets_allowed} onChange={this.update('pets_allowed')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Swimming Pool
                    <input type="checkbox" value={!this.state.swimming_pool} onChange={this.update('swimming_pool')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Broker Fee
                    <input type="checkbox" value={!this.state.broker_fee} onChange={this.update('broker_fee')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="container">Guarantors Accepted
                    <input type="checkbox" value={!this.state.guarantors_accepted} onChange={this.update('guarantors_accepted')}/>
                    <span className="checkmark"></span>
                    </label>

                    <label>Listing Agent
                        <input type="text" value={this.state.listing_agent} onChange={this.update('listing_agent')}/>
                    </label>

                    <button type="submit" >Submit</button>
                </form>

            </div>
        )
    }
};

export default ListingForm;