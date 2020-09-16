import React, { Component } from "react";
import "./table.css";

const FOOD = "./img/burger.svg";
const CLOTHES = "./img/closet.svg";
const RESTAURANT = "./img/wine.svg";
const BILL = "./img/bill.svg";
const PETS = "./img/animal.svg";
const TABLE_BTN = "./img/table-btn.svg";

const TABLE_LIST = [
  {
    title: "Food",
    image: FOOD,
    description: "For all my food",
    date: "12/09/2020",
  },
  {
    title: "Clothes",
    image: CLOTHES,
    description: "",
    date: "",
  },
  {
    title: "Title",
    image: RESTAURANT,
    description: "",
    date: "",
  },
  {
    title: "Utility bills",
    image: BILL,
    description: "",
    date: "",
  },
  {
    title: "Pets",
    image: PETS,
    description: "",
    date: "",
  },
];

export default class Table extends Component {
  state = {
    table: TABLE_LIST,
  };
  render() {
    const { table } = this.state;
    return (
      <>
        <h3 className="categories-content__title">Categories</h3>
        <table className="categories-content__table" cellPadding="50">
          <thead className="categories-content__table-head">
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => {
              return (
                <tr>
                  <td>
                    <img
                      src={item.image}
                      alt="food"
                      className="table-icon"
                    ></img>
                    {item.title}
                  </td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <button className="categories-content__table-button">
                    <img src={TABLE_BTN} alt="table-btn"></img>
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
