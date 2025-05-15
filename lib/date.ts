export function isAtLeastOneDayAfter(date1: Date, date2: Date): boolean {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  
    // d1 > d2 by at least 1 day
    return d1.getTime() > d2.getTime();
}