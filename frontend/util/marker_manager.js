class MarkerManager {
    constructor(map){
      this.map = map;
      this.markers = {};
      this.coords = [];
    }
  
    updateMarkers(listings){
        const listingsObj = {};
//     //   benches.forEach(bench => benchesObj[bench.id] = bench);
  
//     //   benches
//     //     .filter(bench => !this.markers[bench.id])
//     //     .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))
  
//     //   Object.keys(this.markers)
//     //     .filter(benchId => !benchesObj[benchId])
//     //     .forEach((benchId) => this.removeMarker(this.markers[benchId]))

       
//         const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing)

        let nonExistent = listings.filter(listing => !this.markers[listing.id])
        nonExistent.forEach((newListing, idx) => this.createMarkerFromListing(newListing, idx))

        let clearCurrent = Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
        clearCurrent.forEach((currentId) => this.removeMarker(this.markers[currentId]))

        // let nonCoord = listings.filter(listing => !this.coords.includes(listing))
        // nonCoord.forEach(coord => this.coords.push(coord))
        Object.values(listings).forEach(listing => this.coords.push({
          lat: listing.latitude,
          lng: listing.longitude
          })
        )
        debugger
        // this.addPolyLine();
    };

    createMarkerFromListing(listing, idx) {
        const position = new google.maps.LatLng(listing.latitude, listing.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            title: idx.toString(),
            listingId: listing.id
        });

//         marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
        // this.addPolyLine();
    }

  
//     //   marker.addListener('click', () => this.handleClick(bench));
//     //   this.markers[marker.benchId] = marker;
//     // }


  
    removeMarker(marker) {
      this.markers[marker.listingId].setMap(null);
      delete this.markers[marker.listingId];
    }


    addPolyLine() {
      var line = new google.maps.Polyline({
        path: this.coords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      line.setMap(this.map)
      debugger
    }

  }
  
export default MarkerManager;
  