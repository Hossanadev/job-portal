import React, { FC, useState } from "react";
import image from "../assets/images/job-portal.webp";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";
import Image from "next/image";
import axios from "axios";
import { GuestProps } from "../../utilities/types";

const Guest: FC<GuestProps> = (props) => {
  const { setIsAuthenticated } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>();
  const [authScreenToShow, setAuthScreenToShow] = useState<string>("login");

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const params: { email: string; password: string } = {
      email,
      password,
    };
    try {
      await axios.post("http://localhost:8080/login", params).then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setLoginError("");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"relative"}>
      <div className="bg-[#14344C]/60 h-screen py-10 font-serif min-h-screen max-h-screen overflow-auto">
        <p className="text-white text-3xl md:text-4xl font-semibold text-center">
          URL Manager
        </p>
        <span className="text-white text-lg font-medium py-3 block text-center">
          by
        </span>
        <span className="text-white text-lg font-medium block text-center">
          Hossana Chukwunyere
        </span>

        <section className="my-7">
          <form
            action=""
            className="w-[90%] md:w-[60%] lg:w-[40%] transition-all duration-500 mx-auto bg-white/90 rounded-xl p-6"
          >
            {authScreenToShow === "create account" && (
              <>
                <span className="whitespace-nowrap text-center block text-xl">
                  Create Account
                </span>
                <label htmlFor="email" className="block mt-2">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
                />

                <label htmlFor="" className="block mt-2">
                  Password:
                </label>
                <input
                  type="password"
                  required
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
                />

                <div className="flex justify-center py-5">
                  <button className="bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm">
                    Sign Up
                  </button>
                </div>

                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthScreenToShow("login")}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                  {"."}
                </p>
              </>
            )}

            {authScreenToShow === "login" && (
              <>
                <span className="whitespace-nowrap text-center block text-xl">
                  Login
                </span>
                <div className={"text-center text-sm text-red-500"}>
                  {loginError && `-- ${loginError} --`}
                </div>
                <label htmlFor="" className="block">
                  Email{" "}
                  <span
                    className={`${
                      email === "" ? "" : "hidden"
                    } text-md text-red-500`}
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email..."
                  className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
                />
                <label htmlFor="" className="block mt-2">
                  Password{" "}
                  <span
                    className={`${
                      password === "" ? "" : "hidden"
                    } text-md text-red-500`}
                  >
                    *
                  </span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password..."
                  className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
                />
                <div className="flex justify-center py-5">
                  <button
                    disabled={password === "" || email === ""}
                    onClick={handleLogin}
                    className="disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm"
                  >
                    Login
                  </button>
                </div>
                <p>
                  Dont have an account?{" "}
                  <button
                    onClick={() => setAuthScreenToShow("create account")}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Create Account
                  </button>
                  {"."}
                </p>
                <p>
                  <button
                    onClick={() => setAuthScreenToShow("forgot password")}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Forgot Password
                  </button>
                  {"?"}
                </p>
              </>
            )}

            {authScreenToShow === "forgot password" && (
              <>
                <span className="whitespace-nowrap text-center block text-xl">
                  Recover password
                </span>
                <label htmlFor="" className="block">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter the email you registered with..."
                  className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
                />
                <div className="flex justify-center py-5">
                  <button className="bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm">
                    Recover Password
                  </button>
                </div>
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthScreenToShow("login")}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                  {"."}
                </p>
                <p>
                  Dont have an account?{" "}
                  <button
                    onClick={() => setAuthScreenToShow("create account")}
                    className="underline text-blue-500 buttonor-pointer"
                  >
                    Create Account
                  </button>
                  {"."}
                </p>
              </>
            )}
          </form>
        </section>

        <div className="flex justify-center items-center mt-10 space-x-4">
          <Facebook color="#ffffff" />
          <Twitter color="#ffffff" />
          <Instagram color="#ffffff" />
          <Youtube color="#ffffff" />
          <Linkedin color="#ffffff" />
        </div>
      </div>

      <div className="absolute -z-10 top-0 left-0">
        <Image src={image} alt={"job portal"} className="h-screen w-screen" />
      </div>
    </div>
  );
};

export default Guest;
