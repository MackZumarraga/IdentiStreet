# IdentiStreet

## Overview
IdentiStreet is a clone of StreetEasy, NYC's leading marketplace for real estate. Just like the actual website, the user is able to browse listings each with their own features and amenities offered. Additionally, the user is able to create a listing where they can specify the details such as description and amenities, and even upload photos. 
      
[LiveLink](https://identistreet.herokuapp.com/)

## Technologies
- Javascript
- Ruby on Rails
- Google Maps/Geocoding API
- AWS S3


## Main Features

### Sign Up, Sign In, and Log Out
![image](https://user-images.githubusercontent.com/86270564/149538628-20e55ef0-c9f9-4877-a4c9-4b41ff36c695.png)
![image](https://user-images.githubusercontent.com/86270564/149538715-73d4fead-e407-4b76-9572-cdab2aa53a65.png)

- users are able to click a link that opens a modal showing log in input boxes and options to either sign up or log in using a demo user.
- features such as the ability to create a listing is only enabled for when a user is logged in  

### Listing and Map View
![image](https://user-images.githubusercontent.com/86270564/149543239-91ebd9bc-effb-458a-8f28-664f6c8ba0d7.png)

- the index page contains basic information for each listing such as address, neighborhood, price.
- the map displayed helps to visualize these rentals' locations.   
	
### Show Page
![image](https://user-images.githubusercontent.com/86270564/149605175-9ab9741b-af41-4cd5-b25b-924d49fd17af.png)
![image](https://user-images.githubusercontent.com/86270564/149605239-3dd0ea51-99b0-464b-8e82-f2ec275144ec.png)

- the show page displays more information about the listing including a description and a list of amenities.  


#### Create Listing
![image](https://user-images.githubusercontent.com/86270564/149605454-63add01c-ef8e-4af0-bbd0-1dc7ae13f431.png)

- a user is able to submit a listing where various information can be entered.
- below is a code snippet that handles the submission of the address which uses Google's geocoding API to find the entered address's latitude and longitude which is used by the index page's map to render a marker for the listing.

```
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
```
  
  
 ### Multiple Photo Upload and AWS
 
 - below is a code snippet that allows users to upload multiple photos. The photos are sent as formData object which is used by the backend to send a request to AWS to generate a url serving as the source of the images rendered within the app. Once the entire listing is created, the user is directed to the show page automatically.
        
```
        for (let i = 0; i < image_urls.length; i++) {
            formData.append('listing[photos][]', image_urls[i])
        }

  
        this.props.createListing(formData)
        .then(resp => this.props.history.push(`/listing/${Object.keys(resp.listing)[0]}`))
        
    }

```

### Future Features
- edit and delete listing
- search and filter (corresponding map markers)
- favoriting a listing
- tracking searches


