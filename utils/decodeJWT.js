function convertBase64ToUnicode(str) {
  return decodeURIComponent(Array.prototype.map
    .call(atob(str), c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
    .join(''));
}

export default function decodeJWT(token) {
  if (!token) {
    return null;
  }

  try {
    return JSON.parse(convertBase64ToUnicode(token
      .split('.')[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/')));
  } catch (error) {
    return null;
  }
}
