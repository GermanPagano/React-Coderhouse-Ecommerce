import React from "react";
import Form from "react-bootstrap/Form";
import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className="container mt-4 searcItem">
      <Form.Control
        className=" text-center  InputSearchItem"
        placeholder="Sere la barra de busqueda"
        
      />
    </div>
  );
};

export default SearchItem;
