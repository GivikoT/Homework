export async function fetchUNI(country) {
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something happened! Please Try Again!");
}

export async function fetchName(name) {
  const url = `http://universities.hipolabs.com/search?name=${name}`;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something unexpected happened! Please Try Again!");
}
