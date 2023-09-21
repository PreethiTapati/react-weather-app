import PropTypes from 'prop-types';
import { UilCelsius } from '@iconscout/react-unicons';

import './Day.css';

import Hour from './Hour';

const Day = ({ day, dayInfo }) => {
  return (
        <div className='container'>
             
             <div className ="card">
                <div className="day-hours">Day | Hours</div>
          
                    
                <div className="day">Day : {day}</div>
                <div className="unit">
          <UilCelsius className="temperature-icon" />
        </div>
    
          
            <div className='card-hour'>
            {dayInfo.map((hour, index) => (
                <Hour key={index} hour={hour} />
            ))}
        </div>
        </div>
        </div>
    );
};

Day.propTypes = {
    day: PropTypes.string.isRequired,
    dayInfo: PropTypes.array.isRequired
};

export default Day;
       



