import React from "react";
import { Breadcrumbs, Link } from "@mui/material/";
import "./App.css";

import MyRoutes from "./routes";

function App() {
  return (
    <div>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
            border: "1px solid #ccc",
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
        </Breadcrumbs>
      </div>

      <MyRoutes />
    </div>
  );
}

export default App;
