"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface User {
  username: string;
  password: string;
}

const Register = () => {
  const showForm = () => {
    return (
      <Box component="form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[10%]">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Regiter
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
