import {useNavigate,useLocation} from 'react-router-dom'

export default function ConfirmedBooking (){
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="booking-confirm">
            <h6>Your Booking has been confirmed and a confirmation email has been sent to your account.</h6>
            <h5>Booking Details</h5>
            <ul className="booking-confirm-list">
                <li>Name : {location.state.fname} {location.state.lname}</li>
                <li>Email : {location.state.email}</li>
                <li>Date : {location.state.date.$y}-{location.state.date.$M+1}-{location.state.date.$D}</li>
                <li>Time : {location.state.time}</li>
                <li>Occasion : {location.state.occasion}</li>
                <li>No of guests : {location.state.count}</li>
            </ul>
            <div className='booking-confirm-nav'>
                <button className='btn' onClick={()=>navigate("/")}> Home </button>
                <button className='btn' onClick={()=>navigate("/reservations")}> Back to reservation </button>
            </div>
        </div>
    )
}