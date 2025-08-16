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

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime(); 
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 60) {
    return diffMin <= 0 ? "à l’instant" : `${diffMin}min`;
  } else if (diffHr < 24) {
    return `${diffHr}h`;
  } else if (diffDay < 7) {
    return `${diffDay}j`;
  } else {
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }); // JJ/MM/YYYY
  }
}
