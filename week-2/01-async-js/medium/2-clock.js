// HH:MM::SS
setInterval(function () {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

// HH:MM::SS AM/PM
setInterval(function () {
  const date = new Date();
  const hours = String(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const suffix = String(date.getHours() > 12 ? 'PM' : 'AM').padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds} ${suffix}`);
}, 1000)