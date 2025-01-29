import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState<"doctor" | "patient">("doctor");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      // Make the API call based on user type (doctor or patient)
      const response = await fetch(
        `http://localhost:5000/api/${usertype === "doctor" ? "doctors" : "patients"}/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
  
      console.log(response.status);
      console.log(response);
  
      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const data = await response.json();
  
        console.log(data); // Log the response for debugging
  
        if (data.message === "Signin successful") {
          // Handle the doctor or patient data based on the response
          if (usertype === "doctor" && data.doctor) {
            const doctor = data.doctor;
            console.log("Doctor Data:", doctor);
  
            // Store doctor data in localStorage (you can store more details like token, etc.)
            localStorage.setItem("user", JSON.stringify(doctor));
  
            // Redirect to doctor dashboard
            navigate("/doctor-dashboard");
          } else if (usertype === "patient" && data.patient) {
            const patient = data.patient;
            console.log("Patient Data:", patient);
  
            // Store patient data in localStorage
            localStorage.setItem("user", JSON.stringify(patient));
  
            // Redirect to patient dashboard
            navigate("/patient-dashboard");
          } else {
            alert("Error: User data not found");
          }
        } else {
          alert("Signin failed: Invalid credentials");
        }
      } else {
        // Handle the error response
        const error = await response.text();
        alert(`Error: ${error}`);
      }
    } catch (err) {
      console.error("Sign-in failed", err);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex bg-[#F9FAFB]">
      {/* Left Section */}
      <div className="relative w-[45%] overflow-hidden">
        <img
          src="/assets/images/Frame 5.png"
          alt="Frame"
          className="h-[720px] w-full"
        />
        <img
          src="/assets/images/upper.png"
          alt="upper"
          className="absolute bottom-0 left-0 h-[500px] w-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-[55%] flex flex-col justify-center items-center px-12">
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
            Doctor Sign In
          </button>
          <button
            className={`px-6 py-3 text-base font-semibold rounded-lg ${
              usertype === "patient"
                ? "bg-[#3B9AB8] text-white"
                : "bg-gray-100 text-gray-600 border border-gray-300"
            }`}
            onClick={() => setUsertype("patient")}
          >
            Patient Sign In
          </button>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg w-full max-w-md p-8 rounded-lg">
          {usertype === "doctor" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#3B9AB8] mb-6">
                Doctor Sign-In Form
              </h2>
              <form className="flex flex-col gap-4">
                {/* Email field */}
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password field */}
                <div>
                  <label className="text-sm font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Sign In button */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="w-full h-12 bg-[#3B9AB8] text-white rounded-lg flex justify-center items-center"
                >
                  Sign In as Doctor
                </button>
              </form>
            </div>
          )}

          {usertype === "patient" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#3B9AB8] mb-6">
                Patient Sign-In Form
              </h2>
              <form className="flex flex-col gap-4">
                {/* Email field */}
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password field */}
                <div>
                  <label className="text-sm font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#54B9ED] focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Sign In button */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="w-full h-12 bg-[#3B9AB8] text-white rounded-lg flex justify-center items-center"
                >
                  Sign In as Patient
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
