export default function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  let formatedDate = "";
  if (day <= 9) {
    formatedDate += "0" + day;
  } else {
    formatedDate += day;
  }
  if (month <= 9) {
    formatedDate += "/0" + month;
  } else {
    formatedDate += "/" + month;
  }
  formatedDate += "/" + date.getFullYear();
  return formatedDate;
}
