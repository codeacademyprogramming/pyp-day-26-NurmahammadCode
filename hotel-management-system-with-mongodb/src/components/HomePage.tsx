import React from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IAllReservations } from "../interfaces/interfaces";

import ImagePart from "./ImagePart";

export default function HomePage() {
 
  const state = useSelector((state:IAllReservations)=>state)
  const history = useHistory()

  const checkIfRoomIsBusy = (id:number) => {
            let isThere = false
      state.reservations.forEach((item)=>{ 
        if(item.reservations[0].roomId===id) {console.log("nuru",item.reservations[0].roomId); item.reservations.forEach(item => {
        
          if(new Date().toISOString().substring(0, 10) >= item.from && new Date().toISOString().substring(0, 10) <= item.to) {
            isThere = true
          } else {
          isThere = false}
        }) 
       }})
       return isThere
  }
 

  return (
    <svg
      width="580px"
      height="441px"
      viewBox="0 0 580 441"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Artboard</title>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(-5.000000, 0.000000)">
          <ImagePart/>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="11"
            stroke="#979797"
            fill="#D8D8D8"
            x="360.5"
            y="83.5"
            width="47"
            height="51"
            style={{fill:checkIfRoomIsBusy(11) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="13"
            stroke="#979797"
            fill="#D8D8D8"
            x="411.5"
            y="83.5"
            width="48"
            height="51"
            style={{fill:checkIfRoomIsBusy(13) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="12"
            stroke="#979797"
            fill="#D8D8D8"
            x="360.5"
            y="137.5"
            width="47"
            height="47"
            style={{fill:checkIfRoomIsBusy(12) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="14"
            stroke="#979797"
            fill="#D8D8D8"
            x="411.5"
            y="137.5"
            width="48"
            height="47"
            style={{fill:checkIfRoomIsBusy(14) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="5"
            stroke="#979797"
            fill="#D8D8D8"
            x="205.5"
            y="226.5"
            width="48"
            height="47"
            style={{fill:checkIfRoomIsBusy(5) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="7"
            stroke="#979797"
            fill="#D8D8D8"
            x="256.5"
            y="226.5"
            width="46"
            height="47"
            style={{fill:checkIfRoomIsBusy(7) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="9"
            stroke="#979797"
            fill="#D8D8D8"
            x="305.5"
            y="226.5"
            width="46"
            height="47"
            style={{fill:checkIfRoomIsBusy(9) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="6"
            stroke="#979797"
            fill="#D8D8D8"
            x="205.5"
            y="276.5"
            width="48"
            height="47"
            style={{fill:checkIfRoomIsBusy(6) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="8"
            stroke="#979797"
            fill="#D8D8D8"
            x="256.5"
            y="276.5"
            width="46"
            height="47"
            style={{fill:checkIfRoomIsBusy(8) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="10"
            stroke="#979797"
            fill="#D8D8D8"
            x="305.5"
            y="276.5"
            width="46"
            height="47"
            style={{fill:checkIfRoomIsBusy(10) ? "gray" : "green"}}
          ></rect>
          <rect
          onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="1"
            stroke="#979797"
            fill="#D8D8D8"
            x="28.5"
            y="17.5"
            width="207"
            height="145"
            style={{fill:checkIfRoomIsBusy(1) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="2"
            stroke="#979797"
            fill="#D8D8D8"
            x="20.5"
            y="202.5"
            width="129"
            height="86"
            style={{fill:checkIfRoomIsBusy(2) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="3"
            stroke="#979797"
            fill="#D8D8D8"
            x="20.5"
            y="292.5"
            width="129"
            height="65"
            style={{fill:checkIfRoomIsBusy(3) ? "gray" : "green"}}
          ></rect>
          <rect
           onClick={(e)=>{
            history.push(`room/${e.currentTarget.id}`)
          }}
            id="4"
            stroke="#979797"
            fill="#D8D8D8"
            x="20.5"
            y="361.5"
            width="129"
            height="61"
            style={{fill:checkIfRoomIsBusy(4) ? "gray" : "green"}}
          ></rect>
        </g>
      </g>
    </svg>
  );
}
