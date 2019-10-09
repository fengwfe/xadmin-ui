import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import { TableToolbar, TableHeader } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

const SimpleTable = props => {
  const {
    columns,
    tableData, //data loaded from server, format:{rows:[],page:1,pageSize:5,totalCount:900}
    loading,
    onFetchData,
    onDelete,
    onExport,
    onImport
  } = props;
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleSort(newOrderBy) {
    const isDesc = orderBy === newOrderBy && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(newOrderBy);
    onFetchData(page, rowsPerPage, order, newOrderBy);
  }
  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const rows = tableData.data;
      const newSelected = rows.map(row => row.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  }
  function handleSelectOneClick(id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }
  function handleChangePage(newPage) {
    setPage(newPage);
    onFetchData(newPage, rowsPerPage, order, orderBy);
  }
  function handleChangeRowsPerPage(event) {
    const newRowPerPage = event.target.value;
    setRowsPerPage(newRowPerPage);
    setPage(0);
    onFetchData(0, newRowPerPage, order, orderBy);
  }
  function handleDelete() {
    onDelete(selected);
    setPage(0);
    onFetchData(page, rowsPerPage, order, orderBy);
  }
  function handleExport() {
    onExport();
  }
  function handleImport() {
    onImport();
    setPage(0);
    onFetchData(page, rowsPerPage, order, orderBy);
  }

  const classes = useStyles();
  const isSelected = id => selected.indexOf(id) !== -1;
  const tableRow = (row, columns) => {
    const isRowSelected = isSelected(row.id);
    const labelId = `enhanced-table-checkbox-${row.id}`;
    return (
      <TableRow
        hover
        onClick={event => handleSelectOneClick(event, row.id)}
        role="checkbox"
        aria-checked={isRowSelected}
        tabIndex={-1}
        key={row.id}
        selected={isRowSelected}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={isRowSelected}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
        {columns.map((column, i) => {
          if (i === 0) {
            return (
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row[column.key]}
              </TableCell>
            );
          } else {
            return <TableCell align="right">{row[column.key]}</TableCell>;
          }
        })}
      </TableRow>
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          numSelected={selected.length}
          onDelete={handleDelete}
          onExport={handleExport}
          onImport={handleImport}
        />
        <Divider />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHeader
              columns={columns}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onSort={handleSort}
              rowCount={9}
            />
            <TableBody>
              {console.log("HAHHA", tableData.data)}
              {tableData.data.map(row => {
                console.log("OOOOO", row);
                return tableRow(row, columns);
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.total}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "上一页"
            }}
            nextIconButtonProps={{
              "aria-label": "下一页"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  );
};
export default SimpleTable;
