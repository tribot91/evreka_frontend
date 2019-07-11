import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const SearchField = ({ field, size, updateSearch }) => {
  return (
    <div className={"w-" + size + " mr-10 flex"}>
      <div>
        <InputLabel shrink={true} htmlFor={field}>{capitalize(field)}</InputLabel>
        <Input onChange={updateSearch} id={field} placeholder="Search"></Input>
      </div>
      <FontAwesomeIcon size="xs" icon={faSort} />
    </div>
  );
}

var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default SearchField;