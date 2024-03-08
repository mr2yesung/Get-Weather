const dayNames: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayName(dateString: string): string {
  const date: Date = new Date(dateString);
  const day: number = date.getDay();

  if (!isNaN(day)) return dayNames[day];
  else return dateString;
}

export { getDayName };
