import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

  const { addExpense, getIncomes, error, setError } = useGlobalContext();

  const onSubmit = async (data) => {
    data.userId = prop.userId;
    addExpense(data);
  };

  console.log(errors);

  return (
    <div className="sm:h-[30rem] py-3 mt-3 lg:mt-0 bg-indigo-300 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3 flex flex-col gap-1">
          <input
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            type="text"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
          <span className="text-red-500 text-xs">{errors.Title?.message}</span>
          <select
            className="col-span-1  border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            {...register("category")}
          >
            <option value="Shopping">Shopping</option>
            <option value="Education"> Education</option>
            <option value="Bills"> Bills</option>
            <option value="Food"> Food</option>
            <option value="Transportation"> Transportation</option>
            <option value="Entertainment"> Entertainment </option>
            <option value="Health"> Health</option>
            <option value="Loan"> Loan</option>
            <option value="Others"> Others</option>
          </select>
          <input
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            type="number"
            placeholder="Amount"
            name="amount"
            {...register("amount")}
          />
          <span className="text-red-500 text-xs">{errors.Amount?.message}</span>
          <Controller
            control={control}
            name="date"
            className="my-2 sm:my-3 py-3"
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
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            placeholder="Description"
            name="description"
            {...register("description")}
          />
          <span className="text-red-500 text-xs">
            {errors.Description?.message}
          </span>
          <button
            className="col-span-1 my-2 sm:my-3 py-2 border-2 border-blue-700 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 hover:border-transparent rounded-full pb-2"
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
