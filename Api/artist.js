// fetch the data from spotify
const token = 'BQDUEAavQYOE3vVHDZP0-ryc5M_Bi3J3N-Po6L30yRh2jHROYXZhE8Oz_4tFZPnEUBzWZBEtHSiGvoOfncVyjZpFMLcayZtwxINlGxJ0266hE8WOP9d3DQq0yTVVSjXY9nKos48Th5i7GRlN57cyeXumpR5T0JcN4undF1hfe20Gq8dLR-KoVIWeCy1KATiD_rp3xVjbMtozD5xlkKbNVWigBxoMeIF6tDEA_9g7615nlQbFAL59TlG1DFHL4IPuyIsPxFWjFxnS29LRZRicpYUo';
const url = "https://api.spotify.com/v1/artists?ids=4YRxDV8wJFPHPTeXepOstw%2C1SJOL9HJ08YOn92lFcYf8a%2C1dVygo6tRFXC8CSWURQJq2%2C0GF4shudTAFv8ak9eWdd4Y%2C4K6blSRoklNdpw4mzLxwfn%2C0oOet2f43PA68X5RxKobEy%2C4fEkbug6kZzzJ8eYX6Kbbp%2C4K6blSRoklNdpw4mzLxwfn%2C5f4QpKfy7ptCHwTqspnSJI%2C0GF4shudTAFv8ak9eWdd4Y"
const request = new Request(
    url, {
    headers: {
        'Authorization': `Bearer ${token}`
    },
})
async function getData() {
    try {
        const response = await fetch(request)
        const data = await response.json()
        if (response.status == 200) {
            const artistList = document.getElementById('artist-list');

            // Loop through the data and create list items
            data.artists.forEach(artist => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${artist.name} Popularity: ${artist.popularity}`;
                artistList.appendChild(listItem);
            });
        } else {  
            console.log('Server Error : ', data.error.message)
        }
    } catch (error) {
        console.log('ERROR : ', error)
    }
}

getData()