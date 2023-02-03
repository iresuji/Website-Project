
console.log("test");



//Restaurant recommendations by city

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    console.log("Hello");

    let city = $('#citySearch').val()

    console.log(city);


    // First query to get locationID
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=" + city,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "7c18d7228fmshe2a6bccc38f0126p1b9546jsne2cdd20b25b0",
            "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        let searchId = response.data[0].locationId;
        console.log(searchId);
        // Second query to get restaurantID
        const settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=" + searchId,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "7c18d7228fmshe2a6bccc38f0126p1b9546jsne2cdd20b25b0",
                "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
            }
        };
        $.ajax(settings2).done(function (response) {
            console.log(response);
            let restaurantId = response.data.data[0].restaurantsId;

            // Third query to get details
            const settings3 = {
                "async": true,
                "crossDomain": true,
                "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=" + restaurantId,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "7c18d7228fmshe2a6bccc38f0126p1b9546jsne2cdd20b25b0",
                    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
                }
            };

            $.ajax(settings3).done(function (response) {
                console.log(response);
            });

        });
    });
});

//Events recommendations by city

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    console.log("Hello");

    let city = $('#citySearch').val()

    console.log(city);

    //First query to search for e
    const settings4 = {
        "async": true,
        "crossDomain": true,
        "url": "https://eventfulvolodimir-kudriachenkov1.p.rapidapi.com/searchEvents" + city,
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "68ca58338cmsh0e5547f05cd1b4bp1fa33djsn973d3db4137f",
            "X-RapidAPI-Host": "Eventfulvolodimir-kudriachenkoV1.p.rapidapi.com"
        },
        "data": {
            "consumerKey": "<REQUIRED>",
            "consumerSecret": "<REQUIRED>",
            "appKey": "<REQUIRED>"
        }
    };

    $.ajax(settings4).done(function (response) {
        console.log(response);
    });


});



