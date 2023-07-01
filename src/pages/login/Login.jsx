import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate, NavLink } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().max(20).min(4),
  })
  .required();

function Login({ setUser}) {
  const history=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { loginUser } = useGlobalContext();

  const onSubmit = async (data) => {
    //console.log(data);
    //loginUser(data);
    var logres = await loginUser(data);
    //console.log(logres);
    if (logres.data.message === "valid") {
      setUser(logres.data.user)
      localStorage.setItem('token', JSON.stringify(logres.data.user));
      history("/")

    } else if (logres.data.message === "invalid") {
      alert("Wrong Password");
    } else if (logres.data.message === "NotExist") {
      alert("User Not Signed Up");
    }
  };

  return (
    <div className=" bg-slate-300 h-screen  flex justify-center items-center">
      <div className="sm:h-[22rem] w-[23rem] md:h-[35rem] md:w-[33rem] lg:h-[27rem] py-3 mt-3 lg:mt-0 bg-indigo-300 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-5">
            <div className="text-center text-2xl my-3">Log In to FinanceMe</div>
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
            <button
              type="submit"
              className="my-2 sm:my-3 md:py-5 py-3 border-2 border-blue-700 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 hover:border-transparent rounded-full pb-2"
            >
              Login
            </button>

            <div className="text-center text-lg my-3">
              Not registered{" "}
              <NavLink className=" text-blue-700 " to="/register">
                Register Here
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
