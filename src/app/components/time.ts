export function refreshTime() {
  const dateString = new Date().toLocaleString("en-US", {
    timeZone: "Egypt",
  });
  const formattedString = dateString.split(",").pop()!.replace(", ", " - ");
  return formattedString;
}
