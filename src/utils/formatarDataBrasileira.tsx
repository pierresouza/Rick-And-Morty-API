// utils/dateUtils.js
import { format } from "date-fns";

export function formatarDataBrasileira(data: string) {
  const dataObj = new Date(data);
  return format(dataObj, "dd/MM/yyyy");
}
