
import React from "react";
import Image from "next/image";
import { Bar, BarChart, Tooltip, ResponsiveContainer, XAxis, YAxis, LineChart, Line ,PieChart, Pie, AreaChart, Area ,RadialBarChart ,RadialBar } from "recharts";

export default function Home() {
  const Board = (p) => {
    let clr = p.clr;
    let bclr = p.bclr;
    return (
      <div className="w-1/5 mx-auto my-4 max-md:w-full h-92shadow-2xl">
        <div className={`border-4 p-4 rounded-lg  shadow-xl ${bclr}`}>
          <div className="flex">
            <div
              className={`w-10 h-10 inline-flex items-center justify-center rounded-full ${clr} mb-4`}
            >
              {p.svg}
            </div>
            <p className={`ml-auto text-xl ${clr} `}>{p.value}</p>
          </div>
          <h2 className={`text-lg ${clr} font-medium title-font mb-2`}>
            {p.name}
          </h2>
        </div>
      </div>
    );
  };

  let datajson = [
    { date: "6d ago", activeUser: 220 , deactiveUser: 150 },
    { date: "5d ago", activeUser: 150 , deactiveUser: 310 },
    { date: "4d ago", activeUser: 410 , deactiveUser: 50 },
    { date: "3d ago", activeUser: 120 , deactiveUser: 290 },
    { date: "2d ago", activeUser: 90 , deactiveUser: 210 },
    { date: "1d ago", activeUser: 50 , deactiveUser: 320 },
    { date: "today", activeUser: 400 , deactiveUser: 80 },
  ];

  return (
    <div className="w-full">
      <section className="body-font w-full">
        <div className="container w-full px-5 py-2 mx-auto">
          <div className="flex w-full flex-wrap ">
            <Board
              name="Profits"
              value={"₹ " + "35680"}
              clr="text-green-400"
              bclr="border-green-400"
              svg={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            >
              
            </Board>

            <Board
              name="Accounts"
              value="23"
              clr="text-yellow-400"
              bclr="border-yellow-400"
              svg={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
            ></Board>

            <Board
              name="Orders"
              clr="text-red-500"
              bclr="border-red-500"
              value="43"
              svg={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              }
            ></Board>

            <Board
              name="Products"
              clr="text-blue-500"
              bclr="border-blue-500"
              value="156"
              svg={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              }
            ></Board>
          </div>
        </div>
      </section>
      <div className="md:flex border">
      
      </div>
    </div>
  );
}
