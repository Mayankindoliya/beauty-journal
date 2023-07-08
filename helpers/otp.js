
exports.genRandomNumber = (n = 6) => {
  const max_nth_digit_number = Math.pow(10, n);
  const min_nth_digit_number = Math.pow(10, n - 1);
  return Math.floor(Math.random() * (max_nth_digit_number - 1 - min_nth_digit_number) + min_nth_digit_number);
};