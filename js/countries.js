const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) );
}

const displayCountries = countries => {
    console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
};
/* 1:
    const getCountryHTML = country =>{
    // original :
    
     return `
    <div class="country">
        <h3>${country.name.common}</h3>
        <img src="${country.flags.png}"></img>
    </div>`
} */
/* 2:
    const getCountryHTML = country =>{

    // destructuring option-1::
    const {name, flags} = country;
    return `
    <div class="country">
        <h3>${name.common}</h3>
        <img src="${flags.png}"></img>
    </div>`
    
} */
const getCountryHTML = ({name, flags, area, region}) => {

    // destructuring option-2::
    return `
    <div class="country">
        <h3>${name.common}</h3>
        <p>Area:${area}</p>
        <p>continent:${region}</p>
        <img src="${flags.png}"></img>
    </div>`
    
}
// FUNCTION CALLING IS A MUST 
loadCountries();