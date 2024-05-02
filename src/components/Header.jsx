import searchIcon from "../assets/search.svg";
import bellIcon from "../assets/bell.png";
import userIcon from "../assets/user.png";

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-800 flex fixed top-0 left-0">
      <div className="flex-grow"></div>
      <div className="flex-grow flex justify-center items-center gap-2">
        <div className="bg-white rounded-3xl w-[60%] flex relative">
          <select
            name="patients"
            id="patients"
            className="bg-gray-200 p-4 rounded-s-3xl"
          >
            <option value="">Patients</option>
          </select>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="p-3 ml-4 w-[65%] outline-none"
          />
          <img
            src={searchIcon}
            className="absolute right-4 top-3"
            alt="search-icon"
          />
        </div>
        <div className="bg-green-700 text-white p-3 rounded-3xl font-semibold text-lg">
          + Add New
        </div>
      </div>
      <div className="flex-grow flex justify-end items-center gap-6 pr-6">
        <div className="w-12 h-12 bg-gray-400 bg-opacity-30 rounded-full flex justify-center items-center">
          <img src={bellIcon} alt="bell-icon" className="w-[60%]" />
          <div className="w-4 h-4 bg-red-400 rounded-full absolute top-3 right-24"></div>
        </div>
        <div className="w-12 h-12 bg-gray-400 bg-opacity-30 rounded-full flex justify-center items-center">
          <img src={userIcon} alt="bell-icon" className="w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
