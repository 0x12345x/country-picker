import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components / actions
import CountryListPage from '../pages/CountryListPage'
import * as actions from '../actions'

const CountryListContainer = ({ countries, selectedCountry, actions }) => (
  <div>
    { countries.length > 0
      ? <CountryListPage
        countries={countries}
        selectedCountry={selectedCountry}
        selectCountry={actions.selectCountry}
        setActiveCountryListItem={actions.setActiveCountryListItem}
      />
      : <div>Loading Countries...</div>
    }
  </div>
)

CountryListContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  // only use reducers and the data you need per container
  countries: Object.values(state.countriesReducer.countries),
  selectedCountry: state.countriesReducer.selectedCountry
})

const mapDispatchToProps = dispatch => ({
  // pass down actions as functions. child components should not do redux
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CountryListContainer)