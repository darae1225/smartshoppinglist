import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function EnterItem() {
  return (
    <>
      <section>
        <input placeholder="Enter an item here" />
        <button>
          <IoMdAddCircleOutline />
        </button>
      </section>
      <section>
        <label htmlFor="options" />
        <select id="options">
          <option value="Any" selected>
            Any
          </option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>
    </>
  );
}
