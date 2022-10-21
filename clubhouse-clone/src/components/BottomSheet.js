import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheet/StartRoom";

export default function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
      }}
      fullScreen={props.sheetTitle == "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          background: props.sheetTitle == "profile" ? "transparaent" : "",
        }}
      >
        <StartRoom setSheetCreateRoom={props.setSheetCreateRoom} 
        setSheetVisible={(item) =>{
            props.setSheetVisible(item);
            props.setItemsVisible(true);
        }}
        />
      </div>
    </SwipeableBottomSheet>
  );
}
