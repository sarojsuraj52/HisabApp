import React, { useState } from "react";
import "./Form.css";


const Form = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [payment, setPayment] = useState("Card");
  const [description, setDescription] = useState("");

  const categories = [
    { name: "Food", icon: "🍔" },
    { name: "Travel", icon: "🚗" },
    { name: "Shopping", icon: "🛍️" },
    { name: "Bills", icon: "📄" },
    { name: "Entertainment", icon: "🎵" },
  ];

  const payments = ["UPI" , "Cash", "Card"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      amount,
      category,
      date,
      payment,
      description,
    };

    console.log("Expense Added:", data);
    alert('Apka data save hua!')
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        {/* Amount */}
        <section>
          <input
            type="number"
            placeholder="  ₹ 0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-s "
          />
        </section>

        {/* Categories */}
        <section className="categories flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`button-s ${
                category === cat.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </section>

        {/* Date */}
        <section>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-s"
          />
        </section>

        {/* Payment */}
        <section>
          <p className=" ">Payment Method</p>
          <div className="">
            {payments.map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                />
                {method}
              </label>
            ))}
          </div>
        </section>

        {/* Description */}
        <section>
          <textarea
            placeholder="  Add note(optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-s"
          />
        </section>

        {/* Button */}
        <section>
          <button
            type="submit"
            className="input-s "
          >
            Add Expense
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
