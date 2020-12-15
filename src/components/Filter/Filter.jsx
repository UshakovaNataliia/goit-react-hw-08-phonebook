import React from 'react';
import { connect } from 'react-redux';
import {filterInput} from '../../redux/filter/filterActions';
import PropTypes from 'prop-types';
import filterStyles from './Filter.module.css';
import {getFilter} from '../../redux/contactList/contactsSelectors';

const Filter = ({onFilter, filter}) => {
  return (
    <label className={filterStyles.label}>
      Find contacts by name
      <input
        className={filterStyles.input}
        type="text"
        name="filter"
        onChange={e=>onFilter(e.target.value)}
        value={filter} />
    </label>
  );
};

const mapStateToProps = (state) => ({
  filter: getFilter(state)
})

const mapDispatchToProps = {
  onFilter: filterInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};