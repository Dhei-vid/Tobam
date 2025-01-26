import { format } from "date-fns";

/**
 * Format date to Day Month, Year
 * @param date
 * @returns
 */
export const formatDate = (date: Date) => {
  return format(date, "d MMMM, yyyy");
};
