const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export default formatDate;
