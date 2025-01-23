import { useState } from "react";

type CheckType = "doctor" | "patient";

const SignUp: React.FC = () => {
  const [usertype, setUsertype] = useState<CheckType>("doctor");

  return (
    <div className="flex  bg-[#F9FAFB]">
      {/* Left Section */}
      <div className="relative w-[45%] overflow-hidden">
        <img
          src="/assets/images/Frame 5.png"
          alt="Frame"
          className="h-[720px] w-full "
        />
        <img
          src="/assets/images/upper.png"
          alt="upper"
          className="absolute bottom-0 left-0 h-[500px] w-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-[55%] flex flex-col justify-center items-center px-12">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#3B9AB8] mb-8 text-center">
          Healthcare CMS
        </h1>
        
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-3 text-base font-semibold rounded-lg ${
              usertype === "doctor"
                ? "bg-[#3B9AB8] text-white"
                : "bg-gray-100 text-gray-600 border border-gray-300"
            }`}
            onClick={() => setUsertype("doctor")}
          >
            Doctor Sign Up
          </button>
          <button
            className={`px-6 py-3 text-base font-semibold rounded-lg ${
              usertype === "patient"
                ? "bg-[#3B9AB8] text-white"
                : "bg-gray-100 text-gray-600 border border-gray-300"
            }`}
            onClick={() => setUsertype("patient")}
          >
            Patient Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg w-full max-w-md p-8 rounded-lg">
          {usertype === "doctor" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#3B9AB8] mb-6">
                Doctor Sign-Up Form
              </h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Specialization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Cardiologist, Neurologist"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    License Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your license number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#54B9ED]"
                  />
                  <label className="text-sm font-medium text-gray-600">
                    Remember me
                  </label>
                </div>

                <button className="w-full h-12 bg-[#3B9AB8] text-white rounded-lg flex justify-center items-center">
                  Sign Up as Doctor
                </button>
              </form>
            </div>
          )}

          {usertype === "patient" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#3B9AB8] mb-6">
                Patient Sign-Up Form
              </h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#54B9ED]"
                  />
                  <label className="text-sm font-medium text-gray-600">
                    Remember me
                  </label>
                </div>

                <button className="w-full h-12 bg-[#3B9AB8] text-white rounded-lg flex justify-center items-center">
                  Sign Up as Patient
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
