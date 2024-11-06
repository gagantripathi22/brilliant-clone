import OAuthButton from "../components/OAuthButton";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";
import TextField from "../components/TextField";
import SplitTextField from "../components/SplitTextField";
import Button from "../components/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";

interface Course {
	id: string;
	title: string;
	category: 'Math' | 'Data' | 'Computer Science' | 'Science';
	isNew: boolean;
	image: string;
	progress?: number;
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
	const dispatch = useDispatch();

	const dummyCourse: Course = {
		id: "course-1",
		title: "Introduction to Computer Science",
		category: "Computer Science",
		isNew: true,
		image: "https://via.placeholder.com/150",
		progress: 20,
	};

	const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
				setUser({
					email: user.email || "",
					name: user.displayName || "",
					currentCourse: dummyCourse,
				})
			);
    } catch (error) {
      console.error("Error with Google sign-in:", error);
    }
  };
	
  return (
    <div className="h-full w-full px-10 lg:px-52 max-w-screen-xl flex flex-row justify-center items-center">
      <div className="hidden lg:flex lg:w-1/2 bg-slate-600"></div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <p className="text-2xl text-center">
          Create a free account to
          <br />
          discover your personalized
          <br />
          learning path
        </p>
        <div className="flex flex-row mt-5 w-full">
          <OAuthButton
            text="Google"
            height="50px"
            width="100%"
            onClick={() => {handleGoogleSignIn()}}
            icon={GoogleIcon}
          />
          <span className="w-3"></span>
          <OAuthButton
            text="Facebook"
            height="50px"
            width="100%"
            onClick={() => {}}
            icon={FacebookIcon}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full mt-5">
          <span className="w-[50%] h-[1.5px] bg-gray-300 m-0"></span>
          <span className="text-xs px-7 font-bold text-gray-500">OR</span>
          <span className="w-[50%] h-[1.5px] bg-gray-300 m-0"></span>
        </div>
        <TextField
          text="Email"
          height="50px"
          width="100%"
          onClick={() => {}}
          className="mt-5"
        />
				<TextField
          text="Password"
          height="50px"
          width="100%"
          onClick={() => {}}
          className="mt-3"
        />
				<SplitTextField
          fieldOneText="First name"
          fieldTwoText="Last name"
          height="50px"
          width="100%"
          onClick={() => {}}
          className="mt-3"
        />
				<TextField
          text="Age"
          height="50px"
          width="100%"
          onClick={() => {}}
          className="mt-3"
        />
        <Button
          text="Sign Up"
          height="50px"
          width="100%"
          color="black"
          onClick={() => {}}
          className="mt-3"
        />
        <p className="text-gray-700 mt-[70px] text-xs text-center">
          By clicking above, I agree to Brilliant's{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>
        <p className="mt-16 text-gray-700 text-sm text-center">
          Existing User? <span className="underline">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
