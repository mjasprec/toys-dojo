export function formatCurrency(
  amount: number,
  locale: string = "en-PH",
  currency: string = "PHP"
) {
  const CURRENCY_FORMATTER = new Intl.NumberFormat(locale, {
    currency: currency,
    style: "currency",
    minimumFractionDigits: 0,
  });

  return CURRENCY_FORMATTER.format(amount);
}

export const NUMBER_FORMATTER = (locale: string) => {
  return new Intl.NumberFormat(locale);
};

export function formatNumber(number: number, locale: string = "en-PH") {
  const FORMATTED_NUMBER = NUMBER_FORMATTER(locale);

  return FORMATTED_NUMBER.format(number);
}
