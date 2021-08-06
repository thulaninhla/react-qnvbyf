import React from 'react';
import './style.css';
import moment from 'moment';

export default function Cal() {
  const value = moment();
  const startDay = value
    .clone()
    .startOf("mont")
    .startOf("week");
  const endDay = value
    .clone()
    .endOf("month")
    .endOf("week");
  const day = startDay.clone().subtract(1, "day");
const calendar=[]

while(day.isBefore(endDay, "day")){
 calendar.push(
Array(7).fill(0).map(()=>day.add(1,"day").clone())

 );

}

  return(
<div className="calendar">
  
  {calendar.map((week)=>(

<div>

{week.map((day)=>(
  <div className="day">{day.format("D").toString()}</div>
))}

</div>


  ))}
  
  </div>

  ) ;
}
