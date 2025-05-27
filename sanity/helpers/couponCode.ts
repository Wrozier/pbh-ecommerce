export const COUPON_CODES = {
  BERRY: "PREMIUM15",
  NEW_YEAR: "NEW_YEAR",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
