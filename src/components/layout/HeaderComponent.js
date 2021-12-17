import React, { useState } from "react";
import { connect } from 'react-redux';
import store from "../../redux/store";
import { addText } from "../../redux/actions"; 
import Swal from 'sweetalert2';
import { reverseTextService } from "../../services/reverseService";

const HeaderComponent = () => {

  const [textSearch, setTextSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setTextSearch(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await reverseTextService(textSearch);
      if(res.status===200){
        store.dispatch(addText(res.data))
        setTextSearch("");
      }
    } catch (error) {
      if(error.response.status===400){
        Swal.fire('Error', error.response.data.error, 'error');
      }else{
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      }
    }
  }

  return(
    <nav className="navbar navbar-light" style={{backgroundColor: "#E00002"}}>
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="col-md-8 d-flex">
          <input type="search" onChange={handleOnChange} className="form-control me-2 border-0" value={textSearch}  placeholder="Insert text..." />
          <button type="submit" className="btn btn-primary px-4" style={{background:"#8500B8",border:"none"}}>Send</button>
        </form>
      </div>
    </nav>
  );
};

export default connect(state => state)(HeaderComponent);