import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { fetchUser } from "../../redux/actions/UserActions";
import SimpleTable from "../../components/SimpleTable";

const columns = [
  { label: "头像", key: "avatar" },
  { label: "First Name", key: "first_name" },
  { label: "Last Name", key: "last_name" },
  { label: "邮箱", key: "email" }
];
const UserTable = ({ tableData }) => {
  // const { data } = props.data;
  // const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    store.dispatch(fetchUser());
  });
  function handleFetchData(page, rowsPerPage, order, orderBy) {
    store.dispatch(fetchUser());
  }
  function handleDelete(ids) {
    alert("Delete Func");
  }
  function handleExport() {
    alert("Export Func");
  }
  function handleImport() {
    alert("Import Func");
  }

  return (
    <SimpleTable
      columns={columns}
      tableData={tableData}
      loading={loading}
      onFetchData={handleFetchData}
      onDelete={handleDelete}
      onExport={handleExport}
      onImport={handleImport}
    />
  );
};
function mapStateToProps(state) {
  const data = state.user.userList;
  return { tableData: data };
}
export default connect(mapStateToProps)(UserTable);
