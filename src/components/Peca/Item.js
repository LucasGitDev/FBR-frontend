import { Image } from "@mui/icons-material";
import {ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "../../assets/CSS/Item.css";

export default function Item(props) {
  const peca = props.peca;
  return (
    <div>
      <Paper xs={4} sx={{ p: 2, margin: '10px', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {peca.nome}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {peca.tipo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}
