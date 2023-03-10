//this just uses GET, for GET and POST and the use of json-server, go to post directory

function createCountryCard(country){
  const card = document.createElement('div')
  card.classList.add('country')

  const countryName = country.name.common
  const name = document.createElement('h2')
  name.textContent = countryName

  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  card.append(name, flag)
  document.getElementById('countries').append(card)
}

async function getCountries(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const country = await response.json()
  console.log(country[42])

  country.forEach(createCountryCard);
}

getCountries()