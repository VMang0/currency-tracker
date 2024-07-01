export const formatDateToISOWithOptionalEndOfDay = (date: Date, isEndOfDay = false): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hours = isEndOfDay ? '23' : '00';
  const minutes = isEndOfDay ? '59' : '00';
  const seconds = isEndOfDay ? '59' : '00';

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};
