import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { Table } from 'antd';
const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const filteredData = response.data.filter((post) => post.userId === 1);
        setData(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  const totalPosts = data.length;

  const dataForPieChart = [
    { name: "User ID 1", value: totalPosts },
    { name: "Other Users", value: data.length - totalPosts },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Data Page</h1>
      <Table dataSource={data} columns={columns} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Posts by User ID 1</h2>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataForPieChart}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {dataForPieChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Data;
