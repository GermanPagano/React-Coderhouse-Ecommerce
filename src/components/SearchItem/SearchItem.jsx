import "./SearchItem.css";
import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import { FiSearch } from "react-icons/fi";
// import {useState} from 'react'
// import { getProductByName } from "../../services/mockService";

const SearchItem = () => {

/* const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log('deberiamos buscar '+ e.target.value);
      setSearch(e.target.value)
      e.target.value = ''
    }
  };
  getProductByName(search) */


  return (


    <div className="container d-flex  justify-content-center ">
      <MDBInputGroup className=" searcItem col-10 ">
      
        <input
         // onKeyDown={handleSearch}
          autoFocus
          className="form-control "
          placeholder="Search"
          type="text"
        />
        <MDBBtn outline >
          <FiSearch 
          />
        </MDBBtn>

      </MDBInputGroup>
    </div>

  );
};
export default SearchItem;
