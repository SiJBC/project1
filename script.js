var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        "x-rapidapi-key": "0c788f73a0mshfb506f5275d5528p1b3d08jsne2ea2d78d3af"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});