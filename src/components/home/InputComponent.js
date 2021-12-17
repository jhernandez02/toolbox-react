import React from "react";

function InputComponent({item,index,onRemove}){
    let style = item.palindrome ? "success" : "danger";
    let isPalindrome = item.palindrome ? "Palindrome" : "Not palindrome";
    return(
        <>
            <div className="input-group">
                <input type="text" className="form-control bg-white border" value={item.text} readOnly />
                <button onClick={()=>onRemove(index)} className="btn btn-danger" type="button" id="button-addon2"><i className="bi bi-trash"></i></button>
            </div>
            <small className={`text-${style}`}>{isPalindrome}</small>
        </>
    );
}

export default InputComponent;