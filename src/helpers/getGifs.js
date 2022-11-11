export const getGifs = async (category) => {
  // http://api.giphy.com/v1/gifs/random?api_key=$
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=vd77cX2HgIKyGPML9iuBAZwTqJNWcrlU&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
};
