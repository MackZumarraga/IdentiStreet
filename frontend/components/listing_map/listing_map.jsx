import React from 'react';

import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {

    componentDidMount() {   
        const mapOptions = {
            center: { lat: 40.7484, lng: -73.9857 }, 
            zoom: 10
        };
        
        // const map = React.createRef();    
        // this.map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.listings);
    };


    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.listings);
    };


    render() {

        return (
            // <div id="map-container"></div>
            <div id="map-container" ref={ map => this.mapNode = map }></div>
        );
    }
}

// export default withRouter(ListingMap);
export default ListingMap;
