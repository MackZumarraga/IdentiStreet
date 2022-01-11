class MarkerManager {
    constructor(map){
      this.map = map;
      this.markers = {};
    }
  
    updateMarkers(listings){
//     //   const benchesObj = {};
//     //   benches.forEach(bench => benchesObj[bench.id] = bench);
  
//     //   benches
//     //     .filter(bench => !this.markers[bench.id])
//     //     .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))
  
//     //   Object.keys(this.markers)
//     //     .filter(benchId => !benchesObj[benchId])
//     //     .forEach((benchId) => this.removeMarker(this.markers[benchId]))

        console.log("time to update")
//         const listingsObj = {};
//         listings.forEach(listing => listingsObj[listing.id] = listing)

        let nonExistent = listings.filter(listing => !this.markers[listing.id])
        nonExistent.forEach(newListing => this.createMarkerFromListing(newListing))
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
  
//     // createMarkerFromBench(bench) {
//     //   const position = new google.maps.LatLng(bench.lat, bench.lng);
//     //   const marker = new google.maps.Marker({
//     //     position,
//     //     map: this.map,
//     //     benchId: bench.id
//     //   });
  
//     //   marker.addListener('click', () => this.handleClick(bench));
//     //   this.markers[marker.benchId] = marker;
//     // }
  
//     // removeMarker(marker) {
//     //   this.markers[marker.benchId].setMap(null);
//     //   delete this.markers[marker.benchId];
//     // }
  }
  
export default MarkerManager;
  