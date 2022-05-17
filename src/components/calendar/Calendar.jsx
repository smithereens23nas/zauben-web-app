import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import React from 'react'
import "./Calendar.css"

const Calendar = () => {
    function onActionComplete(args) { 
        if (this.flag && args.requestType === 'toolBarItemRendered') { 
          document 
            .querySelector('.e-date-range') 
            .addEventListener('click', function () { 
              debugger; 
              // kindly render your own calendar component 
            }); 
          this.flag = false; 
        } 
      } 

  return (
    <div>
        
        <CalendarComponent className='calendar' />
    </div>
  )
}

export default Calendar