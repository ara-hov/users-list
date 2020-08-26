import React from "react";
import { Table } from "antd";
import "./style.scss";
import { columns } from "../../utils/helpers";

const UsersList = ({ onSelectChange, selectedRowKeys, usersData }) => {
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  };
  return (
    <main className="table-content">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={usersData}
      />
    </main>
  );
};

export default UsersList;
