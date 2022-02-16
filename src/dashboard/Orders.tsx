import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import data from "../data.json";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}
export default function Orders() {
  return (
    <React.Fragment>
      <Title>Booking History</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Brand Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Serice</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Ranking</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.myBooking.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
