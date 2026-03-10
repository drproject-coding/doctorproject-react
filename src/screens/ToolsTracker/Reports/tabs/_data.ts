/* Shared data constants for Reports tabs */

export const MONTHLY_LABELS = [
  "Nov '22",
  "Dec '22",
  "Jan '23",
  "Feb '23",
  "Mar '23",
  "May '23",
  "Jul '23",
  "Aug '23",
  "Sep '23",
  "Oct '23",
  "Nov '23",
  "Dec '23",
  "Jan '24",
  "Feb '24",
  "Mar '24",
  "Apr '24",
  "May '24",
  "Jun '24",
  "Jul '24",
  "Aug '24",
  "Sep '24",
  "Oct '24",
  "Nov '24",
  "Dec '24",
  "Jan '25",
  "Feb '25",
  "Mar '25",
  "Apr '25",
  "May '25",
  "Jun '25",
  "Jul '25",
  "Aug '25",
  "Sep '25",
  "Nov '25",
  "Dec '25",
  "Jan '26",
  "Feb '26",
];

export const MONTHLY_SPEND = [
  400, 800, 100, 200, 200, 150, 200, 150, 350, 200, 500, 200, 400, 300, 200,
  200, 400, 600, 300, 600, 200, 150, 300, 200, 200, 900, 400, 1100, 400, 500,
  300, 800, 1200, 3500, 3200, 2000, 16500,
];

export const PURCHASES_COUNT = [
  42, 16, 3, 4, 9, 4, 10, 13, 2, 15, 2, 3, 9, 10, 2, 2, 2, 9, 1, 8, 10, 5, 7, 2,
  2, 3, 2, 3, 4, 3, 4, 2, 3, 12, 9, 3, 11,
];

export const REFUNDS_COUNT = [
  1, 2, 2, 1, 2, 0, 2, 3, 0, 0, 1, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 0, 3, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export const CUMULATIVE_SPEND = MONTHLY_SPEND.reduce<number[]>((acc, v) => {
  acc.push((acc[acc.length - 1] ?? 0) + v);
  return acc;
}, []);
