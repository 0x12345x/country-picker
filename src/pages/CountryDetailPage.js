import React from 'react'

// components / utils
import CountryCard from '../components/CountryCard'
import { PropTypes } from 'prop-types'

const CountryDetailPage = ({ selectedCountry }) => (
  <CountryCard
    name={selectedCountry.name}
    region={selectedCountry.region}
    flag={selectedCountry.flag}
    languages={selectedCountry.languages}
    capital={selectedCountry.capital}
    currencies={selectedCountry.currencies}
    population={selectedCountry.population}
  />
)

const countryPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  capital: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired
})
CountryDetailPage.propTypes = {
  selectedCountry: countryPropType.isRequired
}

export default CountryDetailPage
