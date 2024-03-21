import React from "react";
import { useState } from "react";
import { useForm , Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";

import "react-datepicker/dist/react-datepicker.css";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    //Date: yup.string().required(),
    amount: yup.number().positive().integer().required("Required Field"),
  })
  .required();

function Expenseform(prop) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { addIncome} = useGlobalContext();

  const onSubmit = async (data) => {
    console.log(data);
    addIncome(data);
  };
  const [startDate, setStartDate] = useState(new Date());
  console.log(errors);
  return (
    <div className="sm:h-[30rem] py-3 mt-3 lg:mt-0 bg-green-100 border-2 border-green-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" m-3 flex flex-col gap-1 ">
          <input
            className="col-span-2 border-2 border-green-500 my-2 sm:my-3  py-3 px-2 bg-teal-50 rounded-md"
            type="text"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
          <span className="text-red-500 text-xs">{errors.Title?.message}</span>
          <select
            className="col-span-1  border-2 border-green-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            {...register("category")}
          >
            <option value="Salary">Salary</option>
            <option value="Bank Transfer"> Bank Transfer</option>
            <option value="Freelance"> Freelance</option>
            <option value="Investment"> Investment</option>
            <option value="Others"> Others</option>
          </select>
          <input
            className="col-span-2 border-2 border-green-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            type="number"
            placeholder="Amount"
            name="amount"
            {...register("amount")}
          />
          <span className="text-red-500 text-xs">{errors.Amount?.message}</span>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value, ref } }) => (
              <DatePicker
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
                selected={value}
                onChange={onChange}
              />
            )}
          />
          <span className="text-red-500 text-xs">{errors.date?.message}</span>
          <textarea
            className="col-span-2 border-2 border-green-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            placeholder="Description"
            name="description"
            {...register("description")}
          />
          <span className="text-red-500 text-xs">
            {errors.Description?.message}
          </span>
          <button
            className="col-span-1 my-2 sm:my-3  py-3 border-2 border-green-700 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white hover:border-transparent rounded-full"
            type="submit"
          >
            {prop.title}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Expenseform;
