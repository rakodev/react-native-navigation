import React from "react";
import { Routes } from "./Routes";
import { AuthProvider } from "./providers/AuthProvider";

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
