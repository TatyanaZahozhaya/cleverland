const buttonEl = document.getElementById('booking-button-edit') ;
const bookingButtonEl = document.getElementById('booking-button') ;
const checkDayEl = document.getElementById('20-2') ;


const enableButton = () => {
  if (buttonEl) buttonEl.disabled = false;
  if (bookingButtonEl) bookingButtonEl.disabled = false;
};

checkDayEl.addEventListener('change', enableButton);