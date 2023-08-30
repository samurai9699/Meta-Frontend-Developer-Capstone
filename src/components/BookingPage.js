import BookingForm from './BookingForm.js';
import { fetchAPI} from '../api.js';
import { useEffect, useReducer, useState} from 'react';

export const updateTimes = (availableTimes,action) => {
    if (action.type==='change_date') {
      let changedDate = new Date(action.date)
      availableTimes = fetchAPI(changedDate);
      return availableTimes
    };
  }

export default function BookingPage () {
  let storedArray = JSON.parse(localStorage.getItem("storedArray"));
  if (storedArray === null) {
    storedArray = [];
  }
  const [bookings,setBookings] = useState(storedArray);

  useEffect(()=>{
    localStorage.setItem('storedArray', JSON.stringify(bookings))
  },[bookings])

  const today = new Date();
  const initializeTimes = fetchAPI(today)
  const [availableTimes,dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <div className="booking-page">
      <BookingForm
      data={availableTimes}
      dispatch={dispatch}
      bookings={bookings}
      setBookings={setBookings}/>
    </div>
    )
}