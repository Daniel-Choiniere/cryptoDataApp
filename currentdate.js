// gets the current day and converts it into a format i can use to work with the API key values
var today = new Date();
var dd = today.getDate()-1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 

today =  yyyy  + '-' + mm + '-' + dd;
today = '"' +today+ '"';
console.log(today);
