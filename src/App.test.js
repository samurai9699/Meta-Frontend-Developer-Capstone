import { render, screen,cleanup, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {BookingPage,updateTimes}from './components/BookingPage'
import { fetchAPI} from './api.js';
import BookingForm from './components/BookingForm'

import { BrowserRouter, Router } from 'react-router-dom';
import { act } from "react-dom/test-utils";

let availableTimes = new Date();
let actionObj1 = {
  type:'change_date',
  date: availableTimes}

let actionObj2 = {
  type:'change_time',
  date: availableTimes}

let initialValues = fetchAPI(new Date())

test('Testing updateTimes function - change date function', () => {
  expect(updateTimes(availableTimes,actionObj1)).toMatchObject(initialValues);
});

test('Testing updateTimes function - unknown action object', () => {
  expect(updateTimes(availableTimes,actionObj2)).toBe(undefined);
});



test('Form submission with empty inputs', async () => {
    const mockSetBookings = jest.fn();
    const mockDispatch = jest.fn();
    const sampleData = [];
    const sampleBookings = [];

    render(<BrowserRouter><BookingForm data={sampleData} dispatch={mockDispatch} bookings={sampleBookings}  setBookings={mockSetBookings} /></BrowserRouter>);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const nameError = await screen.findByText('First name is required');
    const emailError = await screen.findByText('Email is required');

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();

  });

  // await act( async () => render(<TestApp/>));

  test('Form submission with valid email inputs', async () => {
      const mockSetBookings = jest.fn();
      const mockDispatch = jest.fn();
      const sampleData = [];
      const sampleBookings = [];

       render(
      <BrowserRouter>
        <BookingForm
        data={sampleData}
        dispatch={mockDispatch}
        bookings={sampleBookings}
        setBookings={mockSetBookings}
        />
      </BrowserRouter>);
      const email = screen.getByLabelText('Email*');

      await act (()=> {
        userEvent.type(email, 'example@gmail.com')
        expect(email).toHaveValue('example@gmail.com')});


  });

  test('Form submission with invalid email inputs', async () => {
    const mockSetBookings = jest.fn();
    const mockDispatch = jest.fn();
    const sampleData = [];
    const sampleBookings = [];

     render(
    <BrowserRouter>
      <BookingForm
      data={sampleData}
      dispatch={mockDispatch}
      bookings={sampleBookings}
      setBookings={mockSetBookings}
      />
    </BrowserRouter>);
    const email = screen.getByLabelText('Email*');
    const submitButton = screen.getByText('Submit');


    await act (async()=> {
      userEvent.type(email, 'Jhon')
      fireEvent.click(submitButton);
      expect(email).toHaveValue("Jhon")});
      const emailError = await screen.findByText('Invalid email address');
      expect(emailError).toBeInTheDocument();
});

