import { string, number, oneOfType } from 'prop-types';


export const taskInterface = {
  id: oneOfType([string, number]),
  status: string,
  name: string,
  description: string,
  date: string,
  priority: string,
  tag: string,
};
