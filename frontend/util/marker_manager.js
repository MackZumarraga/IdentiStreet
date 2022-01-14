class MarkerManager {
    constructor(map){
      this.map = map;
      this.markers = {};
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
        nonExistent.forEach(newListing => this.createMarkerFromListing(newListing))

        let clearCurrent = Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
        clearCurrent.forEach((currentId) => this.removeMarker(this.markers[currentId]))
    };

    createMarkerFromListing(listing) {
        const position = new google.maps.LatLng(listing.latitude, listing.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id
        });

//         marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }

  
//     //   marker.addListener('click', () => this.handleClick(bench));
//     //   this.markers[marker.benchId] = marker;
//     // }
  
    removeMarker(marker) {
      this.markers[marker.listingId].setMap(null);
      delete this.markers[marker.listingId];
    }
  }
  
export default MarkerManager;
  