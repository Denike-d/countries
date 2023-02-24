import * as React from "react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Menu from "@mui/material/Menu";
import "./Menu.scss";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuDropdown({ data }) {
  console.log("Menu data", data);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment className="menu">
          <Button
            className="menu"
            variant="contained"
            style={{
              fontSize: "0.7rem",
              backgroundColor: "white",
              color: "black",
              marginRight: "2rem",
            }}
            {...bindTrigger(popupState)}
          >
            Filter by region
          </Button>

          <Menu {...bindMenu(popupState)} className="menu-details">
            <MenuItem onClick={popupState.close}>Africa</MenuItem>
            <MenuItem onClick={popupState.close}>Asia</MenuItem>
            <MenuItem onClick={popupState.close}>Americas</MenuItem>
            <MenuItem onClick={popupState.close}>Europe</MenuItem>
            <MenuItem onClick={popupState.close}>Oceania</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
