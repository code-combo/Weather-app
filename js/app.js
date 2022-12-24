// const cityForm = document.querySelector('form');
// const card = document.querySelector('.card');
// const details = document.querySelector('.details');
// const img = document.querySelector('.time');
// const icon = document.querySelector('.icon img');

// // update the ui
// const updateUI = data => {
//     const cityDets = data.cityDets;
//     const weather = data.weather;

//     details.innerHTML = `
//         <h5 class="my-3">${cityDets.EnglishName}</h5>
//         <div class="my-3">${weather.WeatherText}</div>
//         <div class="display-4 my-4">
//             <span>${weather.Temperature.Metric.Value}</span>
//             <span>&deg;C</span>
//         </div>
//     `;
//     console.log(data);

//     // day or night image
//     const timeSrc = weather.IsDayTime ? './img/day.svg' : './img/night.svg';
//     img.setAttribute('src', timeSrc);

//     // the weather icons
//     const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
//     icon.setAttribute('src', iconSrc);

//     if(card.classList.contains('d-none')){
//         card.classList.remove('d-none');
//     }

// }

// // updatem the city
// const updateCity = async city => {
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key)

//     return { cityDets, weather};
// }

// cityForm.addEventListener('submit', e => {
// // preventing the default action
//     e.preventDefault();
//     const city = cityForm.city.value.trim();
//     cityForm.reset();

//     updateCity(city)
//         .then(data => updateUI(data))
//         .catch(err => console.log(err.message));

//     // set local storage
//     localStorage.setItem('city', city);
// });

// if(localStorage.getItem('city')){
//     updateCity(localStorage.getItem('city'))
//     .then(data => updateUI(data))
//     .catch(err => console.log(err.message));
// }