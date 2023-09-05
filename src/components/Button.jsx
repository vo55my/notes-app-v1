import React from 'react';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

function Button({ id, archived, isArchived }) {
  if (archived) {
    return (
      <button className="action" type='button' title='unArchive' onClick={() => isArchived(id)}><BiArchiveOut /></button>
    )
  }

  return (
    <button className="action" type='button' title='Archived' onClick={() => isArchived(id)}><BiArchiveIn /></button>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  isArchived: PropTypes.func.isRequired,
}

export default Button