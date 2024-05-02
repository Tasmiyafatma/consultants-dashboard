import userIcon from "../assets/user.png";
import dbIcon from "../assets/db.png";
import funnelIcon from "../assets/funnel.png";
import homeIcon from "../assets/home.png";
import registrationIcon from "../assets/registration.png";
import consultationIcon from "../assets/paper.png";
import dropperIcon from "../assets/dropper.png";
import billingIcon from "../assets/money.png";

const Sidebar = () => {
  return (
    <div className="p-2">
        <div className="h-12 flex justify-start items-center">
            <p className="text-gray-500">Dashboards</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 rounded-t-md">
            <img src={userIcon} className="w-[20%]" alt="user-icon" />
            <p className="text-gray-500 font-semibold text-lg">Paitents</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-green-800">
            <img src={dbIcon} className="w-[20%]" alt="db-icon" />
            <p className="text-white font-semibold text-lg">HR</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 border-b-2 border-gray-200">
            <img src={funnelIcon} className="w-[20%]" alt="funnel-icon" />
            <p className="text-gray-500 font-semibold text-lg">Labs</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 rounded-b-md">
            <img src={homeIcon} className="w-[20%]" alt="home-icon" />
            <p className="text-gray-500 font-semibold text-lg">Pharma</p>
        </div>
        <div className="h-12 flex justify-start items-center">
            <p className="text-gray-500">Processes</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 rounded-t-md border-b-2 border-gray-200">
            <img src={registrationIcon} className="w-[20%]" alt="registration-icon" />
            <p className="text-gray-500 font-semibold text-lg">Registration</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 border-b-2 border-gray-200">
            <img src={consultationIcon} className="w-[20%]" alt="consultation-icon" />
            <p className="text-gray-500 font-semibold text-lg">Consultation</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 border-b-2 border-gray-200">
            <img src={dropperIcon} className="w-[20%]" alt="dropper-icon" />
            <p className="text-gray-500 font-semibold text-lg">Test & Reports</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 p-3 shadow-md bg-gray-50 rounded-b-md">
            <img src={billingIcon} className="w-[20%]" alt="billing-icon" />
            <p className="text-gray-500 font-semibold text-lg">Billling</p>
        </div>
    </div>
  )
}

export default Sidebar