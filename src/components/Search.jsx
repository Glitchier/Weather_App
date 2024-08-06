import PropTypes from "prop-types";
import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
  const inpRef = useRef();
  var setCity = props.setCity;

  Search.propTypes = {
    search: PropTypes.func,
    setCity: PropTypes.func,
  };
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <input
        id="citySear"
        ref={inpRef}
        className="w-full h-[2.8rem] py-4 px-6 placeholder:text-[#5e7681c8] rounded-full bg-[rgba(255,255,255,0.4)] drop-shadow-lg"
        placeholder="Search City..."
      />
      <div
        onClick={() => {
          setCity(inpRef.current.value);
        }}
        className="rounded-[100%] bg-[rgba(255,255,255,0.4)] p-[0.8rem] drop-shadow-l cursor-pointer"
      >
        <IoSearchOutline color="black" />
      </div>
    </div>
  );
};

export default Search;
