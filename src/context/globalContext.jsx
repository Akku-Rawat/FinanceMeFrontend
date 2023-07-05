import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
//const BASE_URL = "https://financemeapi.up.railway.app/api/v1/";
const BASE_URL = "https://financeme-yesw.onrender.com/api/v1/";


const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const getIncomeById = async (id) => {
    const response = await axios.get(`${BASE_URL}get-income/${id}`);
    setIncome(response.data);
    console.log(response.data);
    return response.data;

  }

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const updateIncome = async (data,id) => {
    const res = await axios.put(`${BASE_URL}update-income/${id}`,data,{params: {
      id:id
    }});
    getIncomes();
  };

  const totalIncome = (myId) => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      if (income.userId === myId) {
        totalIncome = totalIncome + income.amount;
      }
    });

    return totalIncome;
  };

  //calculate expense
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };
  const getExpenseById = async (id) => {
    const response = await axios.get(`${BASE_URL}get-expense/${id}`);
    setExpense(response.data);
    console.log(response.data);
    return response.data;

  }

  const updateExpense = async (data,id) => {
    const res = await axios.put(`${BASE_URL}update-expense/${id}`,data,{params: {
      id:id
    }});
    getExpenses();
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = (myId) => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      if (income.userId === myId) {
        totalIncome = totalIncome + income.amount;
      }
    });

    return totalIncome;
  };

  const totalBalance = (myId) => {
    return totalIncome(myId) - totalExpenses(myId);
  };

  const transactionHistory = (myId) => {
    const mapIncome = incomes.map(function(income){
      if(income.userId === myId){
        return income
    }
    })
    const mapExpense = expenses.map(function(expense){
      if(expense.userId === myId){
        return expense
    }
    })
    const history = [...mapIncome, ...mapExpense];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 7);
  };

  const incomePieData = (myId) => {
    let s = 0;
    let b = 0;
    let f = 0;
    let i = 0;
    let o = 0;
    incomes.forEach((income) => {
      if (income.userId === myId) {
        if (income.category === "Salary") {
          s += 1;
        }
        if (income.category === "Bank Transfer") {
          b += 1;
        }
        if (income.category === "Freelance") {
          f += 1;
        }
        if (income.category === "Investment") {
          i += 1;
        }
        if (income.category === "Others") {
          o += 1;
        }
      }
    });
    return [s, b, f, i, o];
  };
  const expensePieData = (myId) => {
    let s = 0;
    let e = 0;
    let b = 0;
    let f = 0;
    let t = 0;
    let en = 0;
    let h = 0;
    let l = 0;
    let o = 0;
    expenses.forEach((income) => {
      if (income.userId === myId) {
        if (income.category === "Shopping") {
          s += 1;
        }
        if (income.category === "Education") {
          e += 1;
        }
        if (income.category === "Bills") {
          b += 1;
        }
        if (income.category === "Food") {
          f += 1;
        }
        if (income.category === "Transportation") {
          t += 1;
        }
        if (income.category === "Entertainment") {
          en += 1;
        }
        if (income.category === "Health") {
          h += 1;
        }
        if (income.category === "Loan") {
          l += 1;
        }
        if (income.category === "Others") {
          o += 1;
        }
      }
    });
    return [s, e, b, f, t, en, h, l, o];
  };

  const incomeData = (myId) => {
    let january = 0;
    let february = 0;
    let march = 0;
    let april = 0;
    let may = 0;
    let june = 0;
    let july = 0;
    let august = 0;
    let september = 0;
    let october = 0;
    let november = 0;
    let december = 0;

    incomes.forEach((income) => {
      if (income.userId === myId) {
        var d = new Date(income.date);
        var month = d.getMonth() + 1;
        if (month === 1) {
          january = january + income.amount;
        }
        if (month === 2) {
          february = february + income.amount;
        }
        if (month === 3) {
          march = march + income.amount;
        }
        if (month === 4) {
          april = april + income.amount;
        }
        if (month === 5) {
          may = may + income.amount;
        }
        if (month === 6) {
          june = june + income.amount;
        }
        if (month === 7) {
          july = july + income.amount;
        }
        if (month === 8) {
          august = august + income.amount;
        }
        if (month === 9) {
          september = september + income.amount;
        }
        if (month === 10) {
          october = october + income.amount;
        }
        if (month === 11) {
          november = november + income.amount;
        }
        if (month === 12) {
          december = december + income.amount;
        }
      }
    });

    return [
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    ];
  };

  const expenseData = (myId) => {
    let january = 0;
    let february = 0;
    let march = 0;
    let april = 0;
    let may = 0;
    let june = 0;
    let july = 0;
    let august = 0;
    let september = 0;
    let october = 0;
    let november = 0;
    let december = 0;

    expenses.forEach((income) => {
      if (income.userId === myId) {
        var d = new Date(income.date);
        var month = d.getMonth() + 1;
        if (month === 1) {
          january = january + income.amount;
        }
        if (month === 2) {
          february = february + income.amount;
        }
        if (month === 3) {
          march = march + income.amount;
        }
        if (month === 4) {
          april = april + income.amount;
        }
        if (month === 5) {
          may = may + income.amount;
        }
        if (month === 6) {
          june = june + income.amount;
        }
        if (month === 7) {
          july = july + income.amount;
        }
        if (month === 8) {
          august = august + income.amount;
        }
        if (month === 9) {
          september = september + income.amount;
        }
        if (month === 10) {
          october = october + income.amount;
        }
        if (month === 11) {
          november = november + income.amount;
        }
        if (month === 12) {
          december = december + income.amount;
        }
      }
    });

    return [
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    ];
  };

  const registerUser = async (regdata) => {
    const response = await axios
      .post(`${BASE_URL}register`, regdata)
      .catch((err) => {
        setError(err.response.data.message);
      });
    return response;
  };

  const loginUser = async (logdata) => {
    const response = await axios
      .post(`${BASE_URL}login`, logdata)
      .catch((err) => {
        //setError(err.response.data.message);
        console.log(err);
      });
    return response;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        getIncomeById,
        income,
        incomes,
        deleteIncome,
        updateIncome,
        expense,
        expenses,
        totalIncome,
        addExpense,
        getExpenseById,
        getExpenses,
        deleteExpense,
        updateExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        incomePieData,
        expensePieData,
        error,
        incomeData,
        expenseData,
        setError,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
