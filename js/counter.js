fetch('https://api.countapi.xyz/hit/kriss/value').then(function (response) {
    // The API call was successful!
    return response.json();
}).then(function (data) {
    // This is the JSON from our response

    document.getElementById("counter").innerText= "Nombre de visiteurs total:"+ data.value;
}).catch(function (err) {
    // There was an error
    //console.warn('Something went wrong.', err);
});
