import {
    TableCell,  TableRow,  TableHead,  TableBody,  Table,  TableContainer,  Button,  Paper,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import agent from "../../app/api/agent";
  import LoadingComponent from "../../app/layout/LoadingComponent";
  import { Order } from "../../app/models/Order";
  import { currencyFormat } from "../../app/util/util";
  
  export default function OrderPage() {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      agent.Orders.list()
        .then((orders) => setOrders(orders))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <LoadingComponent message="Loading orders" />;
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Order Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="right">{currencyFormat(order.total)}</TableCell>
                <TableCell align="right">
                  {order.orderDate.split("T")[0]}
                </TableCell>
                <TableCell align="right">{order.orderStatus}</TableCell>
                <TableCell align="right">
                  <Button>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  