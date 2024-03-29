import React from 'react';
import { withRouter } from 'react-router';
import MyProfile from '../profile/my_profile';


class ListingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.listing
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.createFormData = this.createFormData.bind(this)
        // this.handleErrors = this.handleErrors(this)
        this.addressClass = this.addressClass.bind(this)
        this.areaClass = this.areaClass.bind(this)
        this.priceClass = this.priceClass.bind(this)

        this.handleCancel = this.handleCancel.bind(this)
    }

  

    handleSubmit(e) {
        e.preventDefault();
        debugger

        // if (this.state.address === "" || 
        //     this.state.area === "" ||
        //     this.state.bedrooms === 0 ||
        //     this.state.baths === 0 ||
        //     this.state.image_urls === null) {
        //         // console.log("Some error handling happens")
        //         return null;
        // }
        this.addressClass()
        this.areaClass()
        this.priceClass()

        if (this.state.address === "" ||
            this.state.area === "" ||
            this.state.price === 0 ||
            this.state.price === "") {
            return
        }

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
                console.log(response)
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


    handleUpdate(e) {
        e.preventDefault();
        debugger

        this.addressClass()
        this.areaClass()
        this.priceClass()

        if (this.state.address === "" ||
            this.state.area === "" ||
            this.state.price === 0 ||
            this.state.price === "") {
            return
        }


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
                console.log(response)
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
        ).then(() =>{
            this.props.submitListing(this.state, this.props.listing.id)
            .then(() => this.props.history.push(`/listing/${this.props.listing.id}`))
            })
    };



    createFormData(e) {
        e.preventDefault();

        const {image_urls} = this.state
        

        const formData = new FormData();
        

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
        formData.append('listing[user_id]', this.props.currentUserId);
        

        for (let i = 0; i < image_urls.length; i++) {
            formData.append('listing[photos][]', image_urls[i])
        }

        // const listingId = this.props.listing.id
        // debugger

        // if (this.props.formType === 'Submit') {
        //     debugger
        //     this.props.submitListing(formData)
        //     .then(resp => this.props.history.push(`/listing/${Object.keys(resp.listing)[0]}`))
        // } else {
        //     this.props.submitListing(formData, listingId)
        //     // .then(resp => this.props.history.push(`/listing/${Object.keys(resp.listing)[0]}`))
        //     .then(() => this.props.history.push(`/listing/${listingId}`))
        // }

        this.props.submitListing(formData)
            .then(resp => this.props.history.push(`/listing/${Object.keys(resp.listing)[0]}`))

    
    }



    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
        // return event => this.setState({[field]: event.target.value})
    }

    
    handleFile(e) {
        this.setState({image_urls: e.target.files});
    }


    // handleErrors() {
    //     if (this.state.address === "" || 
    //         this.state.area === "" ||
    //         this.state.bedrooms === 0 ||
    //         this.state.baths === 0 ||
    //         this.state.image_urls === null) {
    //             console.log("Some error handling happens")
    //         }
    // }    

    addressClass() {
        if (this.state.address === "") {
            this.setState({addressClass: "form-error"})
            this.setState({formMessage: "Invalid entry or empty"})
        } else {
            this.setState({addressClass: "form-correct"})
        }
    }
    
    areaClass() {
        if (this.state.area === "") {
            this.setState({areaClass: "form-error"})
        } else {
            this.setState({areaClass: "form-correct"})
        }
    }

    priceClass() {
        if (this.state.price === 0 || this.state.price === "") {
            this.setState({priceClass: "form-error"})
            this.setState({priceMessage: "Invalid entry or empty"})
        } else {
            this.setState({priceClass: "form-correct"})
        }
    }

    handleCancel() {
        this.props.history.goBack();
    }

    render() {

        const { currentUser, fetchCurrentUser, updateCurrentUser, deleteCurrentUser, fetchUsers } = this.props

        const photosContainerClass = (this.props.formType === 'Submit') ? "photos-container" : "photos-container-none"
        const handlerType = (this.props.formType === 'Submit') ? this.handleSubmit : this.handleUpdate
        const addressClass = addressClass

        debugger
        const myProfileInListingClass = (this.props.match.path === `/listing/:listingId/edit`) ? "my-profile-in-listing-form-container-none" : "my-profile-in-listing-form-container"

        return (
            <div className="listing-form-width-maker">
                <div className="listing-form-my-profile-container">
                    <div className={myProfileInListingClass}>
                        <MyProfile
                            fetchCurrentUser={fetchCurrentUser}
                            currentUser={currentUser}
                            updateCurrentUser={updateCurrentUser}
                            deleteCurrentUser={deleteCurrentUser}
                            fetchUsers={fetchUsers}
                        />
                    </div>
                    <form onSubmit={handlerType} className="big-form">
                        <h1 className="form-section-title">ADDRESS</h1>
                        <div className="form-section-content">
                            <label className="form-section-content-input">Area
                                <select className={this.state.areaClass} value={this.state.area} onChange={this.update('area')}>
                                    <option value="" onChange={this.update('area')}>Select Area</option>
                                    <option value="Manhattan" onChange={this.update('area')}>Manhattan</option>
                                    <option value="Brooklyn" onChange={this.update('area')}>Brooklyn</option>
                                    <option value="Queens" onChange={this.update('area')}>Queens</option>
                                    <option value="Bronx" onChange={this.update('area')}>Bronx</option>
                                    <option value="Staten Island" onChange={this.update('area')}>Staten Island</option>
                                    <option value="New Jersey" onChange={this.update('area')}>New Jersey</option>
                                </select>
                            </label>

                            <label className="form-section-content-input">Neighborhood
                                <input type="text" value={this.state.neighborhood} onChange={this.update('neighborhood')}/>
                            </label>
                            
                            <label className="form-section-content-input">Address
                                <input 
                                    className={this.state.addressClass} 
                                    placeholder={this.state.formMessage} 
                                    type="text" 
                                    value={this.state.address} 
                                    onChange={this.update('address')}/>
                            </label>
                            
                            <label className="form-section-content-input">Unit #
                                <input type="text" />
                            </label>
                            
                            <label className="form-section-content-input">Listing Agent
                                <input type="text" value={this.state.listing_agent} onChange={this.update('listing_agent')}/>
                            </label>
                        </div>


                        <h1 className="form-section-title">SIZE/DESCRIPTION</h1>
                        <div className="form-section-content">
                            <label className="form-section-content-input">Type
                                <select value={this.state.category} onChange={this.update('category')}>
                                    <option value="Rental">Rental</option>
                                    <option value="House">House (Coming Soon)</option>
                                </select>
                            </label>
                            
                            <label className="form-section-content-input">Size (ft²)
                                <input type="text" value={this.state.square_feet} onChange={this.update('square_feet')} /> 
                            </label>
                            
                            <label className="form-section-content-input">Bedrooms
                                <input type="text" value={this.state.bedrooms} onChange={this.update('bedrooms')} />
                            </label>
                            
                            <label className="form-section-content-input">Bathrooms
                                <input type="text" value={this.state.baths} onChange={this.update('baths')} />
                            </label>

                            <label className="form-section-content-input">Description
                                <textarea value={this.state.description} onChange={this.update('description')}></textarea>
                            </label>
                        </div>


                        <h1 className="form-section-title">PRICE</h1>
                        <div className="form-section-content">
                            <label className="form-section-content-input">Monthly rent $
                                <input 
                                    className={this.state.priceClass} 
                                    type="text" 
                                    value={this.state.priceMessage === "" ? this.state.price : this.state.priceMessage} 
                                    onChange={this.state.priceMessage !== "" ? this.update('priceMessage') : this.update('price')}/>
                            </label>

                            <label className="form-section-content-input">Available On
                                <input type="date" value={this.state.leasing_launch_date} onChange={this.update('leasing_launch_date')}/>
                            </label>
                        </div>


                        <h1 className="form-section-title">AMENITIES</h1>
                        <div className="form-section-content-amenities">
                            <label className="amenities-label">
                            <input type="checkbox" value={!this.state.outdoor_space} onChange={this.update('outdoor_space')}/>
                            <span className="checkmark"></span>
                            Outdoor Space
                            </label>

                            <label className="amenities-label">
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
                            </label>

                            {/* <label className="amenities-label" className="container">Guarantors Accepted
                            <input type="checkbox" value={!this.state.guarantors_accepted} onChange={this.update('guarantors_accepted')}/>
                            <span className="checkmark"></span>
                            </label> */}

                        </div>

                        {/* <div>
                            {this.renderErrors()}
                            <br/>
                        </div> */}

                        <div className={photosContainerClass}>
                            <h1 className="form-section-title">PHOTOS</h1>
                            <div className="form-section-content">
                                <label className="form-section-content-input-photo">
                                    <div className="upload-photos">Upload Photos</div>
                                    <input
                                        className="choose-files"
                                        style={{border: "none"}} 
                                        type="file" 
                                        onChange={this.handleFile} 
                                        multiple
                                    />
                                </label>
                            </div>
                        </div>
                        
                        <div className="form-button-listing-container">
                            <div className="button-container">
                                <button type="submit" className="form-button-listing" value={this.props.formType}>{this.props.formType}</button>
                                <button onClick={this.handleCancel} className="form-cancel-listing">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default withRouter(ListingForm);