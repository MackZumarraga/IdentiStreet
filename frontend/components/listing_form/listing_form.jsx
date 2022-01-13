import React from 'react';
import { withRouter } from 'react-router';


class ListingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.listing
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.createFormData = this.createFormData.bind(this)
    }

  

    handleSubmit(e) {
        e.preventDefault();
        

        const address = this.state.address
        const addressString = address.split(" ").join("+")
        const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=${window.googleAPIKey}`
        
             
        const response = $.ajax({
            method: 'GET',
            url: requestUrl
        })


        let formatted_address, newLatitude, newLongitude
        response.then(
            () => {
                formatted_address = response.responseJSON.results[0].formatted_address
                newLatitude = response.responseJSON.results[0].geometry.location.lat
                newLongitude = response.responseJSON.results[0].geometry.location.lng
                
                this.setState({
                    address: formatted_address,
                    latitude: newLatitude,
                    longitude: newLongitude
                })
            }, 
            () => {
                console.log("ERROR: Geocoding request failed")
            }
        ).then(
            () => {
                this.createFormData(e);                
                // this.props.createListing(this.createFormData).then(this.props.history.push(`/search`));                
            })
    };



    createFormData(e) {
        e.preventDefault();

        const {image_urls} = this.state
        debugger

        const formData = new FormData();
        debugger

        // formData.append('listing[image_urls]', this.state.image_urls)
        formData.append('listing[address]', this.state.address);
        formData.append('listing[area]', this.state.area);
        formData.append('listing[neighborhood]', this.state.neighborhood);
        formData.append('listing[latitude]', this.state.latitude);
        formData.append('listing[longitude]', this.state.longitude);
        formData.append('listing[category]', this.state.category);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[bedrooms]', this.state.bedrooms);
        formData.append('listing[baths]', this.state.baths);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[square_feet]', this.state.square_feet);
        formData.append('listing[dollars_per_sq_ft]', this.state.dollars_per_sq_ft);
        formData.append('listing[broker_fee]', this.state.broker_fee);
        formData.append('listing[outdoor_space]', this.state.outdoor_space);
        formData.append('listing[dishwasher]', this.state.dishwasher);
        formData.append('listing[washer_dryer_in_unit]', this.state.washer_dryer_in_unit);
        formData.append('listing[washer_dryer_in_building]', this.state.washer_dryer_in_building);
        formData.append('listing[guarantors_accepted]', this.state.guarantors_accepted);
        formData.append('listing[furnished]', this.state.furnished);
        formData.append('listing[fireplace]', this.state.fireplace);
        formData.append('listing[central_air]', this.state.central_air);
        formData.append('listing[city_view]', this.state.city_view);
        formData.append('listing[park_view]', this.state.park_view);
        formData.append('listing[skyline_view]', this.state.skyline_view);
        formData.append('listing[water_view]', this.state.water_view);
        formData.append('listing[elevator]', this.state.elevator);
        formData.append('listing[doorman]', this.state.doorman);
        formData.append('listing[gym]', this.state.gym);
        formData.append('listing[garage_parking]', this.state.garage_parking);
        formData.append('listing[pets_allowed]', this.state.pets_allowed);
        formData.append('listing[swimming_pool]', this.state.swimming_pool);
        formData.append('listing[leasing_launch_date]', this.state.leasing_launch_date);
        formData.append('listing[listing_agent]', this.state.listing_agent);
        // formData.append('listing[image_urls]', null

        for (let i = 0; i < image_urls.length; i++) {
            debugger
            formData.append('listing[photos][]', image_urls[i])
        }

        // for (let i = 0; i < Object.values(this.state).length; i++) {
            
        //     let key = Object.keys(this.state)[i]
        //     let value = Object.values(this.state)[i]
            
        //     formData.append(`listing[${key}]`, value)
            
        // };

        debugger
        // this.props.createListing(formData).then(() => this.props.history.push(`/search`))
        // this.props.createListing(formData).then(resp => this.props.history.push(`/listing/${resp.id}`))
        this.props.createListing(formData)
        .then(resp => this.props.history.push(`/listing/${Object.keys(resp.listing)[0]}`))
        // .then(resp => console.log((resp.listing.id)))
    }



    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
        // return event => this.setState({[field]: event.target.value})
    }

    
    handleFile(e) {
        debugger
        console.log(this.state.image_urls)
        this.setState({image_urls: e.target.files});
        console.log("after", this.state.image_urls)
        debugger
    }

    
    
    // renderErrors() {
    //     debugger
    //     return(
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li className="error-li" key={i}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
           
    //     )
    // };


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

                    {/* <div>
                        {this.renderErrors()}
                        <br/>
                    </div> */}

                    <label>Upload Photos
                        <input 
                            type="file" 
                            onChange={this.handleFile} 
                            multiple
                        />
                    </label>
                    
                    <button type="submit" >Submit</button>
                </form>


            </div>
        )
    }
};

export default withRouter(ListingForm);