"use client";

import { useState, useEffect } from "react";

// Simple Nepali months and days
const nepaliMonths = [
  "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
  "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

const nepaliWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function NepaliCalendar() {
  const [today, setToday] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // For simplicity, assuming 30 days per Nepali month
  const daysInMonth = 30;

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  return (
    <div className="w-56 rounded-lg bg-white shadow-lg p-4 text-sm font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={handlePrevMonth} className="px-2 py-1 rounded hover:bg-gray-100">{"<"}</button>
        <div className="font-medium text-gray-700 text-center">
          {nepaliMonths[currentMonth]} {currentYear}
        </div>
        <button onClick={handleNextMonth} className="px-2 py-1 rounded hover:bg-gray-100">{">"}</button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-1 text-center text-gray-500 font-medium">
        {nepaliWeekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();

          return (
            <div
              key={day}
              className={`rounded-full w-7 h-7 flex items-center justify-center text-xs transition-colors
                ${isToday ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-100"}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
