import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              label="Nombre"
              variant="filled"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              label="Phone"
              variant="filled"
              fullWidth
              name="phone"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
          </Grid>

          <Grid sx={6}>
            <Button type="submit" variant="contained" sx={{ marginTop: "2" }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;