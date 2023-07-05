import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";

import "react-datepicker/dist/react-datepicker.css";

const schema = yup
  .object({
    title: yup
      .string()
      .required()
      .min(1)
      .max(12, "title cant be more than 12 characters"),
    description: yup
      .string()
      .required()
      .min(1)
      .max(16, "description cant be more than 16 characters"),
    //Date: yup.string().required(),
    amount: yup
      .number("Should Be A Number")
      .typeError("Amount field required")
      .positive("Should Be A Positive Number")
      .integer("Should Be A Number")
      .required()
      .max(100000000, "Amount cant be more than 100000000"),
  })
  .required();

function Expenseform(prop) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { addIncome } = useGlobalContext();

  const onSubmit = async (data) => {
    data.userId = prop.userId;
    addIncome(data);
  };
  return (
    <div className="sm:h-[30rem] py-3 mt-3 lg:mt-0 bg-indigo-300 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mx-2 my-1 flex flex-col">
          <input
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md "
            {...(errors?.myInput?.message
              ? "border-red-700"
              : "border-blue-700")}
            type="text"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
          <span className="text-red-500 text-xs">{errors.title?.message}</span>
          <select
            className="col-span-1  border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            {...register("category")}
          >
            <option value="Salary">Salary</option>
            <option value="Bank Transfer"> Bank Transfer</option>
            <option value="Freelance"> Freelance</option>
            <option value="Investment"> Investment</option>
            <option value="Others"> Others</option>
          </select>
          <input
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
            type="number"
            placeholder="Amount"
            name="amount"
            {...register("amount")}
          />
          <span className="text-red-500 text-xs">{errors.amount?.message}</span>
          <Controller
            control={control}
            name="date"
            className="my-2 sm:my-3 py-3"
            rules={{ required: true }}
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
            {errors.description?.message}
          </span>
          <button
            className="col-span-1 my-2 sm:my-3 py-3 border-2 border-blue-700 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 hover:border-transparent rounded-full pb-2"
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
