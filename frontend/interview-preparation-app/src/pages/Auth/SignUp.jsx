import { useState, useNavigate } from "react";
import Input from "../../components/Inputs/Input";

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
  };

  return (
    <div className="">
      <h3 className="">Create an Account</h3>
      <p className="">Join us today by entering your details below.</p>

      <form className="" onSubmit={handleSignUp}>
        <div className="">
          <Input 
          value={fullName}
          onChange={({target}) => setFullName(target.value) }

      </form>
    </div>
  );
}

export default SignUp;
