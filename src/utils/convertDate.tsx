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
