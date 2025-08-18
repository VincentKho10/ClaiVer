import React from "react";

{
  /* <li>
  <details open>
    <summary>Parent</summary>
    <ul>
      <li>
        <a>Submenu 1</a>
      </li>
      <li>
        <a>Submenu 2</a>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </details>
</li> */
}
function MenuComponent(props) {
  return (
    <>
      <li>
        <a>Gudang</a>
      </li>
      <li>
        <a>Penjualan</a>
      </li>
      <li>
        <a>Pembelian</a>
      </li>
    </>
  );
}

export default MenuComponent;
