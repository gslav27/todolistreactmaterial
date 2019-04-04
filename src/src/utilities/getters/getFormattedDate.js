/**
 * return current date in 'yyyy-mm-dd' format
 */
export const getFormattedDate = () => {
  const n = new Date();
  return `${n.getFullYear()}-${n.getMonth().toString().padStart(2, '0')}-${n.getDate().toString().padStart(2, '0')}`;
};
