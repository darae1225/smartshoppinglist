import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function EnterItem() {
  return (
    <>
      <section>
        <input />
        <button>
          <IoMdAddCircleOutline />
        </button>
      </section>
      <label></label>
      <select>
        <option value="Any" selected>
          Any
        </option>
        <option value="Bakery">Bakery</option>
      </select>
    </>
  );
}
