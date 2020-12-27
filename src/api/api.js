function api(query) {
  return fetch(`http://www.buymebuyme.xyz?q=${query}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
}

export default function getPoems(words) {
  return api(words[0]);
}
