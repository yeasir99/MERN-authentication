import { Link } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';

const Header = () => {
  return (
    <div>
      <div className="w-full h-1 min-h-[4px] headerbg" />
      <div className="max-w-6xl mx-auto flex justify-between py-5 items-center">
        <Link to="/" className="flex items-center">
          <ImSpinner9 className="text-4xl text-blue-400 mr-2" />
          <span className="text-3xl font-semibold">Brand</span>
        </Link>
        <div className="flex justify-between gap-5 items-center">
          <Link to="/signup" className="font-semibold">
            Sign up
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 rounded-full text-white headerbg font-semibold"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
