import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import '../assets/CSS/reportsStyle.css';
import FrameComponent from '../components/FrameComponent'

const BarRechartComponent = () => {
  const data = [
    {
      name: "January",
      value: 0
    },
    {
      name: "February",
      value: 0
    },
    {
      name: "March",
      value: 0
    },
    {
      name: "April",
      value: 0
    },
    {
      name: "May",
      value: 0
    },
    {
      name: "June",
      value: 0
    },
    {
        name: "July",
        value: 0
      },
      {
        name: "August",
        value: 0
      },
      {
        name: "September",
        value: 3
      },
      {
        name: "Octomber",
        value: 7
      }
  ];

  return (
    <FrameComponent>
      <div data-aos="fade-up" className="progress__background">
        <h5 style={{ padding: "4px 0 10px 10px", textAlign: "start", color: "black" }}>New SignUp</h5>
        <BarChart width={570} height={400} data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </FrameComponent>
    
  );
};

export default BarRechartComponent;
