class TravelServiceApi {

 static getUser() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve({
            email : "andresmijares@gmail.com",
            repository: "https://github.com/andresmijares/distributed-async-react-redux-saga"
       });
     }, 3000);
   });
 }

  static getDeparture(user) {

    return new Promise((resolve, reject) => {
      if(!user) {
        reject(new Error( 'Missing User Info'));
      }
      setTimeout(() => {
        resolve({
          userID : user.email,
          flightID : "AR1973",
          date : "10/27/2016 16:00PM"
        });
      }, 2500);
    });
  }

  static getFlight(flightID) {
    return new Promise((resolve, reject) => {
        if(!flightID) {
          reject(new Error( 'Missing ID'));
        }
        setTimeout(() => {
          resolve({
            id: flightID,
            pilot: "Jhonny Bravo",
            plane: {
              make: "Boeing 747 RC",
              model: "TA-889"
            },
            state: "onTime"
          });
        }, 4500);
    });
  }

  static getForecast(date) {
    return new Promise((resolve, reject) => {
      if(!date) {
        reject(new Error( 'Missing Date'));
      }
      setTimeout(() => {
        resolve({
            date: date,
            forecast: "rain"
        });
      }, 2000);
    });
  }

}

export default TravelServiceApi;
