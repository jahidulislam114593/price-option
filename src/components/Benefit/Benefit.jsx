import PropTypes from "prop-types";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
const Benefit = ({ benefit }) => {
  return (
    <div className="flex items-center align-center">
      <VscDebugBreakpointLogUnverified className="mr-3" />
      <p>{benefit}</p>
    </div>
  );
};

Benefit.propTypes = {
  benefit: PropTypes.string.isRequired,
};
export default Benefit;
