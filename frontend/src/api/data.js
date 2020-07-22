import { setInterceptors } from './config/interceptors';

const instance = setInterceptors();

export function fetchInfo() {
  return instance.get('')
};