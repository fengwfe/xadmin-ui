import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../views/Dashboard";
import SearchUser from "../../views/User/SearchUser";
import AppLayout from "../AppLayout";
const Admin = () => {
  return (
    <AppLayout>
      <Route component={Dashboard} />
      <Route path="/user" component={SearchUser} />
    </AppLayout>
  );
};

export default Admin;
