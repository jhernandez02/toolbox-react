const domain = window.location.hostname;
const BASE_URL = domain!=='localhost' ? '"http://165.22.231.112";' : 'http://localhost';
export { BASE_URL };