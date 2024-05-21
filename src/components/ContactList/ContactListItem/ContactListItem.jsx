import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOperation';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // handleDelete method
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

return (
    <div className={css.listWrap}>
      <li className={css.contactListItem}>
        <p>{filteredContact.name}:</p>
        <p className={css.contactAlign}>{filteredContact.number}</p>
        <button className={css.btnDelete} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
