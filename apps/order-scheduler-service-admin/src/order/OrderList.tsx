import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Orders"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="productId" source="productId" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
