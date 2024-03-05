import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Playground = () => {
  const [message, setMessage] = useState("");
  const [anotherMessage, setAnotherMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        console.log("Response data:", response.data);
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get("http://backend:5000/")
      .then((response) => {
        console.log("Response data:", response.data);
        setAnotherMessage(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        there is localhost here {">>"} {message}
        <br />
        there is backend here {">>"} {anotherMessage}
      </div>
      <Typography variant="body1">'body1'</Typography>
      <Typography variant="body2">'body2'</Typography>
      <Typography variant="button">'button'</Typography>
      <Typography variant="caption">'caption'</Typography>
      <Typography variant="h1">'h1'</Typography>
      <Typography variant="h2">'h2'</Typography>
      <Typography variant="h3">'h3'</Typography>
      <Typography variant="h4">'h4'</Typography>
      <Typography variant="h5">'h5'</Typography>
      <Typography variant="h6">'h6'</Typography>
      <Typography variant="inherit">'inherit'</Typography>
      <Typography variant="overline">'overline'</Typography>
      <Typography variant="subtitle1">'subtitle1'</Typography>
      <Typography variant="subtitle2">'subtitle2'</Typography>
    </div>
  );
};

export default Playground;
