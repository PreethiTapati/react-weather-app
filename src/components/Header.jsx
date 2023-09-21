
import PropTypes from 'prop-types';
import './Header.css';

function Header({ title, icon }) {
  return (
    <div className="header">
        <h1 className="title">{title}</h1>
      <div className="icon">{icon}</div>
      
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Header;

