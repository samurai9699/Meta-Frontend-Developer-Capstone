import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import { useNavigate} from 'react-router-dom'
import { submitAPI} from '../api.js';
const theme = createTheme({
    palette: {
      primary: {main: '#495E57'},
    },
  });

export default function BookingForm({data, dispatch,bookings,setBookings}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues:{
            fname:'',
            lname:'',
            email:'',
            date:dayjs(new Date()),
            time:'',
            occasion:'',
            count:'',
        },
        validationSchema: Yup.object({
          fname:Yup.string().required('First name is required'),
          lname:Yup.string().required('Required'),
          email:Yup.string().email('Invalid email address').required('Email is required'),
          time:Yup.string().required('Required'),
          occasion:Yup.string().required('Required'),
          count: Yup.number().required('Required').min(1,'minimum is 1').max(10,'maximum is 10'),
        }),
        onSubmit: values => {
            let booking = {
                name:`${values.fname} ${values.lname}`,
                email:values.email,
                year:values.date.$y,
                month:values.date.$M+1,
                day:values.date.$D,
                time:values.time,
                occasion:values.occasion,
                count:values.count,
            }
            async function submitForm(data) {
                const result = await submitAPI();
                if (result) {
                    navigate("/booking-confirmation",{state: data});
                    formik.resetForm({
                        fname:'',
                        lname:'',
                        email:'',
                        date:dayjs(new Date()),
                        time:'',
                        occasion:'',
                        count:'',
                      });
                }
              }
            setLoading(true)
            submitForm(values);
            setBookings([...bookings,booking]);
            },

    })
    return (
        <>
        <form className="form-meterial" onSubmit={formik.handleSubmit}>
            <ThemeProvider theme={theme}>
                <div className='form-flex'>
                    <div className='form-title'><h2>Table Reservation</h2></div>
                    <TextField
                    error={formik.touched.fname && formik.errors.fname ? true : false}
                    id="fname"
                    label="First Name*"
                    variant="outlined"
                    name='fname'
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    size='small'
                    helperText={formik.touched.fname && formik.errors.fname ? formik.errors.fname :''}
                    />
                    <TextField
                    error={formik.touched.lname && formik.errors.lname ? true : false}
                    id="lname"
                    label="Last Name*"
                    variant="outlined"
                    name='lname'
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    size='small'
                    helperText={formik.touched.lname && formik.errors.lname ? formik.errors.lname :null}
                    />
                    <TextField
                    error={formik.touched.email && formik.errors.email? true :false}
                    id="email"
                    label="Email*"
                    variant="outlined"
                    name='email'
                    autoComplete='on'
                    fullWidth
                    size='small'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.email && formik.errors.email ? formik.errors.email :null}
                    />
                    <TextField
                    fullWidth
                    size='small'
                    error={formik.touched.occasion && formik.errors.occasion? true :false}
                    select
                    label="Occasion"
                    name="occasion"
                    helperText={formik.touched.occasion && formik.errors.occasion? formik.errors.occasion :'Please select event type'}
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue = ''
                    >
                        <MenuItem key={1} value={'Birthday'}>Birthday</MenuItem>
                        <MenuItem key={2} value={'Anniversary'}>Anniversary</MenuItem>
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        label="Date"
                        value={formik.values.date}
                        onChange={
                            (newValue)=>{formik.setFieldValue('date', newValue);
                            dispatch({type:"change_date",date:newValue});}
                        }
                        disablePast={true}
                        slotProps={{
                            textField: {
                                helperText: 'Please select the date',
                                size:'small'
                            },
                            }}
                        />
                    </LocalizationProvider>
                    <TextField
                    size='small'
                    error={formik.touched.time && formik.errors.time? true : false}
                    select
                    label="Time"
                    name='time'
                    helperText={formik.touched.time && formik.errors.time? formik.errors.time :'Select time'}
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue = ''
                    >
                        {data.map((option) => (
                        <MenuItem key={option.id} value={option.time}>
                        {option.time}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                    size='small'
                    error={formik.touched.count && formik.errors.count ? true : false}
                    id="count"
                    label="Guests"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.count}
                    helperText={(formik.touched.count && formik.errors.count)? formik.errors.count: 'Please input the number of guests'}
                    inputProps={{ sx: { width: 80 },min:1,max: 10 }}
                    />
                    <LoadingButton
                    type='submit'
                    loading={loading}
                    loadingIndicator="Submitting..."
                    variant="contained"
                    aria-label="On click"
                    >
                        Submit
                    </LoadingButton>
                </div>
            </ThemeProvider>
        </form>
        </>
    )
}