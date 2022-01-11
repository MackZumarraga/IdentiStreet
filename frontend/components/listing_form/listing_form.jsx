import React from 'react';
// import { withRouter } from 'react-router';


class ListingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "address": "222 XYZ Avenue, New York NY 44444",
            "area": "Brooklyn",
            "neighborhood": "Williamsburg",
            "latitude": 40.5,
            "longitude": -73.5,
            "category": "rental",
            "image_url": "https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg",
            "price": 2000,
            "bedrooms": 2,
            "baths": 2,
            "description": "This laid-back brownstone comes with a polished interior. Located in the heart of west village.",
            "square_feet": 360,
            "dollars_per_sq_ft": 133,
            "broker_fee": true,
            "outdoor_space": true,
            "dishwasher": true,
            "washer_dryer_in_unit": true,
            "washer_dryer_in_building": true,
            "guarantors_accepted": true,
            "furnished": true,
            "fireplace": true,
            "central_air": true,
            "city_view": true,
            "park_view": true,
            "skyline_view": true,
            "water_view": true,
            "elevator": true,
            "doorman": true,
            "gym": true,
            "garage_parking": true,
            "pets_allowed": true,
            "swimming_pool": true,
            "leasing_launch_date": "10/25/2021",
            "listing_agent": "Sparta Associates"
        }  
    }

    render() {
        return (
            <div>
                <form>
                    <h1>ADDRESS</h1>
                    <label>Borough
                        <select>
                            <option value="0">Manhattan</option>
                            <option value="1">Brooklyn</option>
                            <option value="2">Queens</option>
                            <option value="3">Bronx</option>
                            <option value="4">Staten Island</option>
                            <option value="5">New Jersey</option>
                        </select>
                    </label>
                    
                    <label>Address
                        <input type="text" />
                    </label>
                    
                    <label>Unit #
                        <input type="text" />
                    </label>


                    <h1>SIZE/DESCRIPTION</h1>
                    <label>Type
                        <select>
                            <option value="0">Rental</option>
                            <option value="1">House (Coming Soon)</option>
                        </select>
                    </label>
                    
                    <label>Size
                        <input type="text" /> &nbsp;ft^2
                    </label>
                    
                    <label>Bedrooms
                        <input type="text" />
                    </label>
                    
                    <label>Bathrooms
                        <input type="text" />
                    </label>

                    <label>Description
                        <textarea></textarea>
                    </label>


                    <h1>PRICE</h1>
                    <label>Monthly rent $
                        <input type="text" />
                    </label>

                    <label>Available On
                        <input type="date" id="birthday" name="birthday"/>
                    </label>


                    <h1>AMENITIES</h1>
                    <label class="container">Outdoor Space
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Dishwasher
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Washer Dryer In Unit
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Washer Dryer In Building
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>


                    <label class="container">Furnished
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Fireplace
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Central Air
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">City View
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>


                    <label class="container">Park View
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Skyline View
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Water View
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Elevator
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Doorman
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Gym
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Garage Parking
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Pets Allowed
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Swimming Pool
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </form>

            </div>
        )
    }
};

export default ListingForm;