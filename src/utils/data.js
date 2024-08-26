const showFormattedDate = (date, localeDate) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(localeDate, options);
};

export { showFormattedDate };
