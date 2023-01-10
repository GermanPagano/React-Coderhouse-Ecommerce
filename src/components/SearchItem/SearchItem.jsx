import "./SearchItem.css";
import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import { FiSearch } from "react-icons/fi";

const SearchItem = () => {

  return (

    <div className="container d-flex  justify-content-center ">
      <MDBInputGroup className=" searcItem col-10">
        <input
          autoFocus
          className="form-control "
          placeholder="Search"
          type="text"
        />
        <MDBBtn outline>
          <FiSearch />
        </MDBBtn>
      </MDBInputGroup>
    </div>
  );
};

export default SearchItem;
