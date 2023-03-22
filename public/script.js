 async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => resolve(position.coords));
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
  
   async function getUserLocation() {
    try {
      const coords = await getLocation();
      return { "latitude": coords.latitude, "longitude": coords.longitude };
    } catch (err) {
      console.error(err);
    }
  }
  
  module.exports = getUserLocation;
  