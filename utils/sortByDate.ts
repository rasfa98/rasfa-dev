import Post from "@/types/post";

const sortByDate = (a: Post, b: Post) => {
  return Number(new Date(b.date)) - Number(new Date(a.date));
};

export default sortByDate;
