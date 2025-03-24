/**
 * 
 * @param year => number
 * @param month => number
 * @returns 
 * Permet de retourner le nombre de jours dans un mois donné 
 * en fonction de l'année et du mois
 * 
 * English version:
 * Makes it possible to return the number of days in a given month
 * depending on the year and the month
 */
export default function NumberOfDayInMonth(year: number, month: number) {
  const date = new Date(year, month, 0);
  const nombreDeJours = date.getDate();
  return nombreDeJours;
}