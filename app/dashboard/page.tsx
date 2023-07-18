"use client";

import { Button, Table } from "antd";
import { useState } from "react";
import { fetcherB2B } from "../API/page";
import { useQuery } from "react-query";
import Loading from "./loading";
import { DeleteOutlined } from "@ant-design/icons";

export default function Profile() {
  function getData() {
    return fetcherB2B({
      method: "GET",
      url: "https://64197b16c152063412c30d87.mockapi.io/kmm",
    });
  }

  const dataSource = useQuery("keygets", getData);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleRowSelectionChange = (selectedRowKeys: any) => {
    console.log(selectedRowKeys);

    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    type: "checkbox",
    selectedRowKeys,
    onChange: handleRowSelectionChange,
  };

  const handleDelete = () => {
    console.log(1);
  };
  return (
    <div>
      <Button type="primary" danger>
        <DeleteOutlined onClick={() => handleDelete()} />
      </Button>
      <Table
        rowKey="id"
        loading={dataSource.isLoading}
        dataSource={dataSource.data}
        columns={columns}
        rowSelection={rowSelection}
      />
    </div>
  );
}
