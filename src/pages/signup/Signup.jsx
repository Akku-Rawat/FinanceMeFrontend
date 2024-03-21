import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate, NavLink } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required().max(12).min(4),
    email: yup.string().email().required(),
    password: yup.string().required().max(20).min(4),
  })
  .required();
function Signup({setUser}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { registerUser } = useGlobalContext();
  const history=useNavigate();

  const onSubmit =  async (data) => {
    console.log(data);
    var regres = await registerUser(data);
    if (regres.data.message === "Registered") {
      setUser(regres.data.user)
      history("/login")

    } else if (regres.data.message === "EmailAlreadyExist") {
      alert("User Already Exist");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300 ">
      <div className="sm:h-[27rem] sm:w-[23rem] md:h-[35rem] md:w-[33rem] md:py-5 py-3 mt-3 lg:mt-0 bg-indigo-300 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-5">
            <div className="text-center text-2xl">Sign Up For FinanceMe</div>
            <input
            name="username"
              type="text"
              className="border-2 border-blue-500 my-2 sm:my-3 md:py-5 py-3 px-2 bg-teal-50 rounded-md"
              placeholder="Username"
              {...register("username", {})}
            />
            <input
              className="border-2 border-blue-500 my-2 sm:my-3 md:py-5 py-3 px-2 bg-teal-50 rounded-md"
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", {})}
            />
            <input
              className="border-2 border-blue-500 my-2 sm:my-3 md:py-5 py-3 px-2 bg-teal-50 rounded-md"
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", {})}
            />
            <button type="submit" className="my-2 sm:my-3 md:py-5 py-3 border-2 border-blue-700 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 hover:border-transparent rounded-full pb-2" >Register</button>

            <div className="text-center text-lg">Already registered <NavLink className=" text-blue-700 " to="/login">Login Here</NavLink></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
