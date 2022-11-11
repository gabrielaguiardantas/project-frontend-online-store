export const getReviews = (id) => {
  const reviewStorage = localStorage.getItem(id);
  if (!reviewStorage) return [];
  return JSON.parse(reviewStorage);
};

export const sendReview = (review) => {
  const { id, email, text, rating } = review;
  const reviews = getReviews(id);

  if (reviews.length < 1) {
    const thisReview = [{ email, text, rating }];
    localStorage.setItem(id, JSON.stringify(thisReview));
    return;
  }
  // const thisReview = [reviews, { email, text, rating }];
  reviews.push({ email, text, rating });
  localStorage.setItem(id, JSON.stringify(reviews));
};

// export const createKey = (id) => {
//   const reviewStorage = localStorage.getItem(id);
//   if (!reviewStorage) localStorage.setItem(id, JSON.stringify([]));
// };
