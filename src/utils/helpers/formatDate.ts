export const formatToFullDate = (date: Date, isEndOfDay = false): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = isEndOfDay ? '23' : '00';
  const minutes = isEndOfDay ? '59' : '00';
  const seconds = isEndOfDay ? '59' : '00';
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const formatToShortDate = (date: string) => {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  const day = formattedDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const calculateEndDate = (dateStart: string, period: string): string => {
  if (!dateStart || !period) return null;
  const startDate = new Date(dateStart);

  switch (period) {
    case '1DAY':
      startDate.setDate(startDate.getDate());
      break;
    case '5DAYS':
      startDate.setDate(startDate.getDate() + 4);
      break;
    case '10DAYS':
      startDate.setDate(startDate.getDate() + 9);
      break;
    case '20DAYS':
      startDate.setDate(startDate.getDate() + 19);
      break;
    case '1MONTH':
      startDate.setMonth(startDate.getMonth() + 1);
      break;
    default:
      break;
  }
  return formatToFullDate(startDate, true);
};
