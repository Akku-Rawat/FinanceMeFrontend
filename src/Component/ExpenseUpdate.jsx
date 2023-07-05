import React, { useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGlobalContext } from "../context/globalContext";

import "react-datepicker/dist/react-datepicker.css";
const schema = yup
.object({
  title: yup.string().required().min(1).max(12,"title cant be more than 12 characters"),
  description: yup.string().required().min(1).max(16,"description cant be more than 16 characters"),
  //Date: yup.string().required(),
  amount: yup.number("Should Be A Number").typeError('Amount field required').positive("Should Be A Positive Number").integer("Should Be A Number").required().max(100000000,"Amount cant be more than 100000000"),
})
.required();

function ExpenseUpdate(prop) {
  const { updateExpense, getExpenseById } =
    useGlobalContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: async () => {
      var data = await getExpenseById(prop.updateId);
      return {
        title: data.title,
        description: data.description,
        category: data.category,
        amount: data.amount,
        date: new Date(data.date),
      };
    },
  });

  const onSubmit = async (data) => {
    await updateExpense(data, prop.updateId);
    prop.setIsOpen(false);
  };
  useEffect(() => {
    getExpenseById(prop.updateId);
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3 flex flex-col gap-1">
          <input
            className="col-span-2 border-2 border-blue-500 my-2 sm:my-3 py-3 px-2 bg-teal-50 rounded-md"
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
          <span className="text-red-500 text-xs">{errors.amount?.message}</span>
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
            {errors.description?.message}
          </span>
          <button
            className="col-span-1 my-2 sm:my-3 py-2 border-2 border-blue-700 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 hover:border-transparent rounded-full pb-2"
            type="submit"
          >
            Update Expense
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseUpdate;
