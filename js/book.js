function handleBooking() {
  const name = document.getElementById('book-name').value.trim();
  const phone = document.getElementById('book-phone').value.trim();
  const email = document.getElementById('book-email').value.trim();
  const persons = document.getElementById('book-persons').value;
  const date = document.getElementById('book-date').value;
  const time = document.getElementById('book-time').value;
  if (!name || !phone || !email || !persons || !date || !time) {
    showToast('Please fill in all required fields!'); return;
  }
  showToast(`Table booked for ${name} on ${date} at ${time}! ✅`);
  ['book-name','book-phone','book-email','book-date','book-time','book-note'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('book-persons').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
});
