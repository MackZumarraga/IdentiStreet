import React from 'react';

import MarkerManager from '../../util/marker_manager';

const myLatlng = { lat: 40.7484, lng: -73.9857 }

class ListingMap extends React.Component {
    
    componentDidMount() {   
        const mapOptions = {
            center: myLatlng, 
            zoom: 10
        };
        
        // const map = React.createRef();    
        // this.map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        
        // this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);

        // const lineSymbol = {
        //     path: "M 0,-1 0,1",
        //     strokeOpacity: 1,
        //     scale: 4,
        // };

        // let line = new google.maps.Polyline({
        //     path: [
        //         { lat: 40.784685, lng: -73.976538 },
        //         { lat: 40.703435, lng: -73.943571 },
        //       ],
        //     strokeColor: '#000000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 3,
        //     icons: [
        //         {
        //             icon: lineSymbol,
        //             offset: "0",
        //             repeat: "20px",
        //         },
        //     ],
        //     map: this.map,
        // });


        // poly.setMap(this.map);
        // export { initMap };

    };


    componentDidUpdate() {
        // const mapOptions = {
        //     center: { lat: 40.7484, lng: -73.9857 }, 
        //     zoom: 10
        // };

        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);
        
        // this.registerListeners();

        this.MarkerManager.updateMarkers(this.props.listings);
    };


    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
          const { north, south, east, west } = this.map.getBounds().toJSON();
          this.changeZoom();
        //   const bounds = {
        //     northEast: { lat:north, lng: east },
        //     southWest: { lat: south, lng: west } };
        //   const bounds = {
        //     northEast: { lat: 45.7, lng: -73.9 },
        //     southWest: { lat: 40.5, lng: -74 } };
        //   this.props.updateBounds(bounds);
        //   const bounds = new google.maps.LatLngBounds();
        //   this.map.fitBounds(bounds);
        });
        // google.maps.event.addListener(this.map, 'click', (event) => {
        //   const coords = getCoordsObj(event.latLng);
        //   this.handleClick(coords);
        // });
      }

    changeZoom() {
        const bounds = new google.maps.LatLngBounds(
            // new google.maps.LatLng(40.5, -74), //southwest
            // new google.maps.LatLng(45.7, -73.9)); //northeast
            new google.maps.LatLng(40.5, -74), //southwest
            new google.maps.LatLng(45.7, 20.9)); //northeast
        debugger
        // google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
            this.map.fitBounds(bounds, 10)
        
    }

    render() {

        return (
            // <div id="map-container"></div>
            <div id="map-container" ref={ map => this.mapNode = map }></div>
        );
    }
}

// export default withRouter(ListingMap);
export default ListingMap;
