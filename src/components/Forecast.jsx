import PropTypes from "prop-types";

const Forecast = (props) => {
  var icon = props.icon;
  var temp = props.temp;
  var desc = props.desc;
  var strDay = props.strDay;

  Forecast.propTypes = {
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    strDay: PropTypes.string.isRequired,
  };

  return (
    <div className="flex flex-col text-[0.8rem] font-semibold items-center justify-center p-[1.2rem] backdrop-blur rounded-[0.5rem]">
      <img
        className="h-[4rem]"
        src={`./src/assets/icons/${icon}.png`}
        alt="icon"
      />
      <p className="text-lg font-medium">{Math.floor(temp)} °C</p>
      <p className="text-sm capitalize">{desc}</p>
      <p className="text-md font-semibold">{strDay}</p>
    </div>
  );
};

export default Forecast;
