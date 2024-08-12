import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-8 hover:bg-gray-950 w-full rounded-sm p-1">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
