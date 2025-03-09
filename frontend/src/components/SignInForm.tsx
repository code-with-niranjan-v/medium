import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { SignInInput } from "@echowrite100/common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data: SignInInput = {
      email,
      password,
    };
    const { success } = SignInInput.safeParse(data);

    if (!success) {
      console.log("Fill all the feild");
    } else {
      const res = await axios.post(BACKEND_URL + "/user/signin", data);
      localStorage.setItem("token", res.data.token);
      console.log(res);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center ">
          <p className="font-bold text-black text-2xl">Create your Account</p>
          <div className="flex gap-1">
            <p className="text-gray-500 text-md">Already have a Account?</p>
            <p className="text-gray-500 underline">
              <Link to={"/signup"}>Sign Up</Link>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <LabelInput
              label="Email"
              placeHolder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></LabelInput>
            <LabelInput
              label="Password"
              placeHolder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></LabelInput>
            <button
              onClick={handleRegister}
              className="bg-black text-white font-bold p-3 mt-3 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface LabelInput {
  label: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function LabelInput({ label, placeHolder, onChange }: LabelInput) {
  return (
    <div className="mt-3">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
        placeholder={placeHolder}
        required
      />
    </div>
  );
}
