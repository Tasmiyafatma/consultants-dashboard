import teamIcon from "../assets/team.png";
import team2Icon from "../assets/team-2.png";
import multilineIcon from "../assets/multiline.png";
import moneyIcon from "../assets/money-2.png";
import dollarIcon from "../assets/dollar.png";

const Content = () => {
  return (
    <>
      <div className="w-full h-14 bg-white rounded-md">
        <div className="w-40 border-b-2 border-green-800 flex justify-start gap-2 items-center p-3">
          <img src={teamIcon} className="w-8" alt="team-icon" />
          <p className="text-green-800 font-semibold">Consultants</p>
        </div>
      </div>

      <div className="w-full h-14 bg-white rounded-md mt-4 flex justify-start items-center gap-6">
        <div className="bg-green-800 w-24 h-full rounded-s-lg flex justify-center items-center">
          <p className="text-white font-semibold text-lg">Filters</p>
        </div>
        <select
          name="range"lg
          id="range"
          className="w-48 border border-gray-300 shadow-md p-3 rounded-full text-lg"
        >
          <option value="">Select Range</option>
        </select>
        <div className="flex">
          <input type="radio" name="summary" id="summary" className="w-12" />
          <label htmlFor="summary" className="text-lg text-gray-600">
            Summary
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            name="branch-wise"
            id="branch-wise"
            className="w-12"
          />
          <label htmlFor="branch-wise" className="text-lg text-gray-600">
            Branch Wise
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-4">
        <div className="flex-1 border-l-[6px] border-orange-100 rounded-sm bg-white p-4 flex">
          <div className="w-[80%]">
            <p className="text-green-800 text-m font-semibold">
              Consultant Count
            </p>
            <p className="text-slate-600 text-2xl font-bold">90 / 900</p>
            <p className="text-gray-400 text-m font-normal">Today / Period</p>
          </div>
          <div className="w-[20%]">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex justify-center items-center">
              <img src={team2Icon} alt="team2-icon" />
            </div>
          </div>
        </div>
        <div className="flex-1 border-l-[6px] border-purple-100 rounded-sm bg-white p-4 flex">
          <div className="w-[80%]">
            <p className="text-green-800 text-m font-semibold">
              Consultations
            </p>
            <p className="text-slate-600 text-2xl font-bold">11 / 25</p>
            <p className="text-gray-400 text-m font-normal">Today / Period</p>
          </div>
          <div className="w-[20%]">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
              <img
                src={multilineIcon}
                className="w-[40%]"
                alt="multiline-icon"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 border-l-[6px] border-green-100 rounded-sm bg-white p-4 flex">
          <div className="w-[80%]">
            <p className="text-green-800 text-m font-semibold">Labs</p>
            <p className="text-slate-600 text-2xl font-bold">25 / 506</p>
            <p className="text-gray-400 text-m font-normal">Today / Period</p>
          </div>
          <div className="w-[20%]">
            <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center">
              <img src={moneyIcon} className="w-[50%]" alt="money-icon" />
            </div>
          </div>
        </div>
        <div className="flex-1 border-l-[6px] border-pink-100 rounded-sm bg-white p-4 flex">
          <div className="w-[80%]">
            <p className="text-green-800 text-m font-semibold">DierPlans</p>
            <p className="text-slate-600 text-2xl font-bold">25/ 250</p>
            <p className="text-gray-400 text-m font-normal">Today / Period</p>
          </div>
          <div className="w-[20%]">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex justify-center items-center">
              <img src={dollarIcon} alt="dollar-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-5 p-5">
        <div className="h-12 flex justify-start items-center">
          <p className="text-slate-800 font-semibold text-2xl">Consultants</p>
        </div>
        <table className="w-full mt-4">
          <thead className="border border-gray-200">
            <tr>
              <th className="border border-gray-200">NAME</th>
              <th className="border border-gray-200">PATIENT COUNT</th>
              <th className="border border-gray-200">LABS</th>
              <th className="border border-gray-200">DIET PLANS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 text-center p-3">John Smith</td>
              <td className="border border-gray-200 text-center p-3">12</td>
              <td className="border border-gray-200 text-center p-3">3</td>
              <td className="border border-gray-200 text-center p-3">3</td>
            </tr>
            <tr>
              <td className="border border-gray-200 text-center p-3">John Doe</td>
              <td className="border border-gray-200 text-center p-3">8</td>
              <td className="border border-gray-200 text-center p-3">2</td>
              <td className="border border-gray-200 text-center p-3">4</td>
            </tr>
            <tr>
              <td className="border border-gray-200 text-center p-3">Mark Johnson</td>
              <td className="border border-gray-200 text-center p-3">6</td>
              <td className="border border-gray-200 text-center p-3">1</td>
              <td className="border border-gray-200 text-center p-3">2</td>
            </tr>
            <tr>
              <td className="border border-gray-200 text-center p-3">Mary Lee</td>
              <td className="border border-gray-200 text-center p-3">10</td>
              <td className="border border-gray-200 text-center p-3">4</td>
              <td className="border border-gray-200 text-center p-3">8</td>
            </tr>
            <tr>
              <td className="border border-gray-200 text-center p-3">Daviv Chen</td>
              <td className="border border-gray-200 text-center p-3">14</td>
              <td className="border border-gray-200 text-center p-3">5</td>
              <td className="border border-gray-200 text-center p-3">9</td>
            </tr>
            <tr>
              <td className="border border-gray-200 text-center p-3">Emily Waqa</td>
              <td className="border border-gray-200 text-center p-3">5</td>
              <td className="border border-gray-200 text-center p-3">2</td>
              <td className="border border-gray-200 text-center p-3">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Content;
