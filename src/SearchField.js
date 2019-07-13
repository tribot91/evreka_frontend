import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 12,
    padding: '14px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const SearchField = ({ status, field, size, updateSearch, updateSort }) => {
  return (
    <div className={"w-" + size + " mr-10 flex"}>
      <div>
        <InputLabel shrink={true} htmlFor={field}>{capitalize(field)}</InputLabel>
        {/* <Input
          onChange={updateSearch}
          id={field}
          placeholder="Search"></Input> */}
          <BootstrapInput
          onChange={updateSearch}
          id={field}
          placeholder="Search"
          ></BootstrapInput>
      </div>
      <div>
        <FontAwesomeIcon icon={faSort} style={status.sort !== null ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
        <FontAwesomeIcon icon={faSortUp} style={status.sort !== true ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
        <FontAwesomeIcon icon={faSortDown} style={status.sort !== false ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
      </div>
    </div>
  );
}

var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default SearchField;