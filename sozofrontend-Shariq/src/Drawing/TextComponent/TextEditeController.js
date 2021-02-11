import React, { useState, useEffect, useRef } from "react";

function TextEditeController(props) {
  let fontweight="false";
  const handleOnBoldClick = (e) => {
    
    props.editableTxt.fontStyle="bold"
  };

  const handleOnSelect=(e)=>{
   
    props.editableTxt.fontFamily=e.target.value
  }

  return (
    <div
      class="col-md-11"
      style={{
        display: props.editableTxt.textEditVisible ? "block" : "none",
        position: "absolute",
        top: props.editableTxt.y - 100 + "px",
        left: props.editableTxt.x - 200 + "px",
        width: props.editableTxt.width + "px",
      }}
    >
      <ul
        class="list-group list-group-horizontal editer_panel"
        style={{ maxHeight: "63px", width: "630px" }}
      >
        <li class="list-group-item tool_list">
          <i class="fal fa-text"></i>
        </li>

        <li class="list-group-item"></li>
        <li>
          <div class="input-group mb-3 ">
            <select
              name="cars"
              id="inputGroupSelect01"
              style={{
                width: "107px",
                margin: "10px",
                border: "none",
              }}
              onClick={handleOnSelect}>
              <option value="volvo">AUTO</option>
              <option value="saab">Saab</option>
              <option value="Arial, Helvetica, sans-serif">Arial</option>
              
            </select>
          </div>
        </li>
        <li class="list-group-item tool_list">
          <a href="#"><i class="far fa-bold" onClick={handleOnBoldClick}></i></a>
        </li>
        <li class="list-group-item tool_list">
          <i class="far fa-align-center"></i>
        </li>
        <li class="list-group-item tool_list">
          <i class="fas fa-text"></i>
        </li>
        <li class="list-group-item tool_list">
          <i class="far fa-link"></i>
        </li>
        <li class="list-group-item tool_list">
          <i class="far fa-laugh"></i>
        </li>
        <li class="list-group-item tool_list">
          <i class="fal fa-tag"></i>
        </li>
        <li class="list-group-item tool_list">
          <i class="fal fa-lock-alt"></i>
        </li>
      </ul>
      <div
        style={{ paddingTop: "35px", paddingLeft: "200px" }}
        class="form-group"
      >
        <textarea
          class="form-control"
          id="editor"
          rows="3"
          value={props.editableTxt.text}
          placeholder="Type Somethings"
          style={{
            display: props.editableTxt.textEditVisible ? "block" : "none",
            position: "absolute",

            width: props.editableTxt.width + "px",
            height: props.editableTxt.height + "px",
            opacity: "1",
            textAlign: "left",
            font: "normal normal normal 30px/41px Nunito Sans",
            letterSpacing: "0px",
            fontWeight:props.editableTxt.fontStyle,
            backgroundColor: "#FAFDFF",
          }}
          onChange={props.TextEditHandle}
          onKeyDown={props.handleTextarea}
        />
        
      </div>
    </div>
  );
}
export default TextEditeController;
