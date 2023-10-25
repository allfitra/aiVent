import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/style.css";

function SideContent() {
  const [date, changeDate] = useState(new Date());
  function changeValue(val) {
    changeDate(val);
  }

  return (
    <div className="mt-16 border-t-4 md:border-t-0 md:border-l-8 border-black ml-14 md:ml-0 mr-14 bg-gray-100">
      <div className="flex items-center justify-center">
        <div className="md:p-4 p-3 dark:bg-gray-800 bg-white rounded-3xl ">
          <Calendar onChange={changeValue} value={date} />
        </div>
      </div>
    </div>
  );
}

export default SideContent;