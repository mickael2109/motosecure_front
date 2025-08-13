import { parse } from 'date-fns'
import { fr } from 'date-fns/locale'

export function parseDateKey(key: string): Date {
  if (key === "Aujourd'hui") return new Date();
  if (key === "Hier") {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today;
  }
  return parse(key, 'dd/MM/yyyy', new Date(), { locale: fr });
}


export function parseKeyToDate(key: string): Date {
    const today = new Date();
    if (key === "Aujourd'hui") {
        return today;
    }
    if (key === "Hier") {
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        return yesterday;
    }
    // Format JJ/MM/YYYY → convertir en Date
    const [day, month, year] = key.split("/").map(Number);
    return new Date(year, month - 1, day);
}