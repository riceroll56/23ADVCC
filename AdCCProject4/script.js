const apiKey = '6b88adfd86133926c643b90fa58621a4';
const city = 'New York City';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

const divineButton = document.getElementById('divine-button');
const bottomImage = document.getElementById('bottom-image');
const topImage = document.getElementById('top-image');
const jacketImage = document.getElementById('jacket-image');
const weatherInfoElement = document.getElementById('weather-info');
const outfitImages = document.getElementById('outfit-images');

async function generateOutfit(temperature) {
    const [bottomArray, topArray, jacketArray] = temperature < 59 ? [bottomBoth.concat(bottomCold), topCold, jacketCold] : [bottomBoth.concat(bottomWarm), topWarm, []];

    const bottomImagePath = bottomArray[Math.floor(Math.random() * bottomArray.length)];
    const topImagePath = topArray[Math.floor(Math.random() * topArray.length)];
    const jacketImagePath = jacketArray[Math.floor(Math.random() * jacketArray.length)];

    return { bottomImagePath, topImagePath, jacketImagePath };
}

divineButton.addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weather = data.weather[0].main.toUpperCase();
        const currentTemp = Math.round(data.main.temp);
        const minTemp = Math.round(data.main.temp_min);
        const maxTemp = Math.round(data.main.temp_max);

        weatherInfoElement.innerHTML = `
            <p>${weather}</p>
            <p>Current Temp: ${currentTemp}°F</p>
            <p>Min Temp: ${minTemp}°F</p>
            <p>Max Temp: ${maxTemp}°F</p>
        `;

        const outfit = await generateOutfit(currentTemp);
        bottomImage.src = outfit.bottomImagePath;
        topImage.src = outfit.topImagePath;
        jacketImage.src = outfit.jacketImagePath || '';
        jacketImage.style.display = outfit.jacketImagePath ? 'block' : 'none';
        outfitImages.style.display = 'flex';    //make it display
    } catch (error) {
    }
});

//clothigng arrays
const bottomBoth = ['Images/bottomBoth1.png',
                    'Images/bottomBoth2.png'];

const bottomWarm = ['Images/bottomWarm1.png',
                    'Images/bottomWarm2.png',
                    'Images/bottomWarm3.jpg',
                    'Images/bottomWarm4.jpg',
                    'Images/bottomWarm5.jpg', 
                    'Images/bottomWarm6.png'];

const bottomCold = ['Images/bottomCold1.png',
                    'Images/bottomCold2.png',
                    'Images/bottomCold3.jpg', 
                    'Images/bottomCold4.jpg', 
                    'Images/bottomCold5.jpg', 
                    'Images/bottomCold6.jpg'];

const topWarm = ['Images/topWarm1.png', 
                'Images/topWarm2.png', 
                'Images/topWarm3.png', 
                'Images/topWarm4.png', 
                'Images/topWarm5.png', 
                'Images/topWarm6.jpg', 
                'Images/topWarm7.jpg', 
                'Images/topWarm8.jpg', 
                'Images/topWarm9.jpg', 
                'Images/topWarm10.jpg', 
                'Images/topWarm11.jpg'];

const topCold = ['Images/topCold1.png', 
                'Images/topCold2.png', 
                'Images/topCold3.png', 
                'Images/topCold4.png', 
                'Images/topCold5.jpg', 
                'Images/topCold6.jpg', 
                'Images/topCold7.jpg', 
                'Images/topCold8.jpg', 
                'Images/topCold9.jpg'];

const jacketCold = ['Images/Jacket1.png', 
                    'Images/Jacket2.png', 
                    'Images/Jacket3.png', 
                    'Images/Jacket4.jpg', 
                    'Images/Jacket5.jpg'];