const sortByDate = (a: any, b: any) => {
  return Number(new Date(b.date)) - Number(new Date(a.date));
};

export default sortByDate;
