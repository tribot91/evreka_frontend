import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const SearchField = ({ status, field, size, updateSearch, updateSort }) => {
  return (
    <div className={"w-" + size + " mr-10 flex"}>
      <div>
        <InputLabel shrink={true} htmlFor={field}>{capitalize(field)}</InputLabel>
        <Input onChange={updateSearch} id={field} placeholder="Search"></Input>
      </div>
      <div>
      <FontAwesomeIcon size="sm" icon={faSort} style={status.sort !== null ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
      <FontAwesomeIcon size="sm" icon={faSortUp} style={status.sort !== true ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
      <FontAwesomeIcon size="sm" icon={faSortDown} style={status.sort !== false ? { display: 'none' } : { display: 'inline' }} onClick={updateSort} />
      </div>
    </div>
  );
}

var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default SearchField;