var axios = require('axios');
var URL = "https://restcountries.com/v3.1/all"
axios.get(URL).then(function (res){

    let CountryList = res.data;
    let StatusCode = res.status;

    console.log(CountryList);
    console.log(StatusCode);

}).catch(function (error) {

    console.log(error);

})