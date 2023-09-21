import PropTypes from 'prop-types';
import { FaLongArrowAltDown, FaLongArrowAltUp, FaEquals } from 'react-icons/fa';
import { UilCloudSunHail, UilWindSun, UilCloudRainSun} from '@iconscout/react-unicons';
import { FiSun} from "react-icons/fi";

import './Hour.css';

const Hour = ({ hour }) => {
    return (
        <div className="hour">
            <div>{hour.hour}</div>
            <div className="up-card">
                <div>
                    {hour.temp < 10 ? (
                       <UilCloudRainSun  color = "#F0E7F1" />
                    ) : hour.temp < 15 ? (
                        <UilWindSun color = "grey" />
                    ) : hour.temp < 20 ? (
                        <UilCloudSunHail color="#E4F1FF"/>
                    ) : (
                        < FiSun color= "#E55604" />
                    )}
                </div>
                <div>
                    {hour.up === 'no' ? null : hour.up === 'up' ? (
                        <FaLongArrowAltUp color = "green" />
                    ) : hour.up === 'down' ? (
                        <FaLongArrowAltDown color="red" />
                    ) : (
                        <FaEquals color="gray" />
                    )}
                </div>

                <div>{hour.temp}</div>
            </div>
        </div>
    );
};

Hour.propTypes = {
    hour: PropTypes.shape({
        hour: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired,
        up: PropTypes.string.isRequired
    }).isRequired
};

export default Hour;
