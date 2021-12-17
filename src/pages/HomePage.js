import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import store from "../redux/store";
import { delText, delAll } from "../redux/actions";
import InputComponent from "../components/home/inputComponent";
import Swal from 'sweetalert2';

function HomePage () {

    const { textList } = store.getState();
    const [dataList, setDataList] = useState([]);

    useEffect(()=>{
        setDataList(textList);
    },[textList]);

    const handleRemove = (pos) => {
        store.dispatch(delText(pos))
    }

    const handleClearAll = () => {
        if(dataList.length){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete all!'
            }).then((result) => {
                if (result.isConfirmed) {
                    store.dispatch(delAll())
                    Swal.fire(
                        'Deleted!',
                        'The records were deleted.',
                        'success'
                    )
                }
            })
        }
    }

    return(
        <section className="container mt-4 bg-white">
            <div className="p-4">
                <div className="d-flex justify-content-between mb-4">
                    <h1 className="h2 text-secondary">Results:</h1>
                    <button type="button" onClick={handleClearAll} className="btn btn-danger">Delete All</button>
                </div>
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-8">
                        <div className="overflow-auto pe-3" style={{height:400}}>
                        {dataList.length===0 ?(
                            <div className="form-control text-center">No records</div>
                        ) : (
                            dataList.map((item,index)=>(
                                <div key={index} className="mb-3">
                                    <InputComponent item={item} index={index} onRemove={handleRemove} />
                                </div>
                            ))
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default connect(state => state) (HomePage);