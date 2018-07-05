import React from "react";
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";

const SimpleTable = ({ values = { assets: [] } }) => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Assets</TableCell>
                    <TableCell>Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {values.assets.map(n => {
                    return (
                        <TableRow key={`${n.name}`}>
                            <TableCell>{n.name}</TableCell>
                            <TableCell>{n.count}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
);

export default connect(state => ({
    values: getFormValues("add_asset")(state)
}))(SimpleTable);