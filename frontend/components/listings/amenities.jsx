import React from "react";

const Amenities = ({listing}) => {
    const nonAmenities = "id,area,neighborhood,latitude,longitude,category,image_url,price,bedrooms,baths,description,square_feet,dollars_per_sq_ft,broker_fee,address,broker_fee,category,listing_agent,leasing_launch_date,guarantors_accepted".split(",")

    const highlightAmenities = "outdoor_space,central_air,city_view,park_view,skyline_view,water_view,"

    const otherAmenities = "dishwasher,washer_dryer_in_unit,washer_dryer_in_building,furnished,elevator,doorman,gym,garage_parking,pets_allowed,fireplace,swimming_pool".split(",")

    const amenityTransformer = (amenity) => {
        const words = amenity.split("_").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
        const newAmenity = words.join(" ");
        return newAmenity
    };

    return (
        <div>
            <h2 className="highlights">HIGHLIGHTS</h2>
            <ul className="amenities-highlight">
                {Object.keys(listing).map(amenity => {
                    if (listing[amenity] && !nonAmenities.includes(amenity) && highlightAmenities.includes(amenity)) {
                        
                        return <li key={Math.random()}>{amenityTransformer(amenity)}</li>
                    } 
                })
                }
            </ul>
            <h2 className="other-amenities">OTHER AMENITIES</h2>
            <ul className="amenities-other">
                {Object.keys(listing).map(amenity => {
                    if (listing[amenity] && !nonAmenities.includes(amenity) && otherAmenities.includes(amenity)) {
                        
                        return <li key={Math.random()}>{amenityTransformer(amenity)}</li>
                    } 
                })
                }
            </ul>
        </div>
    )
};

export default Amenities;