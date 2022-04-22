const API = "https://rickandmortyapi.com/api";

export function get(path) {
  return fetch(API + path)
  .then((result) => result.json());

    

  //return fetch(API + path).then((result) => result.json());
}