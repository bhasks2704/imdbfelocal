import React from "react";
import "./Header.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <header>
        <img
          src="https://logos-world.net/wp-content/uploads/2022/04/IMDb-Logo.png"
          alt="imdblogo"
          id="logo"
        ></img>

        {/* open menu mui */}
        <div>
          <Button onClick={handleOpen} style={{ color: "white" }}>
            <MenuIcon />
            &nbsp; Menu
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="menubox">
              <img
                src="https://logos-world.net/wp-content/uploads/2022/04/IMDb-Logo.png"
                alt="imdblogo"
                id="logo"
              ></img>
              <span
                onClick={() => {
                  setOpen(false);
                }}
                style={{ cursor: "pointer" }}
                className="yellowclose"
              >
                X
              </span>
            </Box>
          </Modal>
        </div>
      </header>
    </div>
  );
}
