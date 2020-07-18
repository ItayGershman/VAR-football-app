const getCurrentDate = () => {
  let today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = year + '-' + month + '-' + day;
  return today;
};
export default getCurrentDate;
