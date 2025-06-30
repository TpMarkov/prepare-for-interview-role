import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

function SignUp({ setCurrentPage }) {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Sign up form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter valid full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter valid email adadress.");
      return;
    }

    if (!password) {
      setError("Please enter a valid password.");
      return;
    }

    setError("");

    //  SignUp API call
    try {
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try later.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-ls font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector
          image={profilePic}
          setImage={setProfilePic}
        ></ProfilePhotoSelector>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullName}
            label="Full Name"
            placeholder="John Doe"
            onChange={({ target }) => setFullName(target.value)}
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            labe="Email Address"
            placeholder="john@emample.com"
            type="text"
          />

          <Input
            value={password}
            type="password"
            label="Password"
            placeholder="Min 8 characters"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button className="btn-primary" type="submit">
          SIGN UP
        </button>
        <p className="text-[13px] text-slate-800 mt-3">
          Already have an account?{" "}
          <button
            className="text-primary font-medium underline cursor-pointer"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
