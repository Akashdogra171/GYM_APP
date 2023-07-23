export const exerciseOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '3d2500074cmsh6e9b0e1f526758fp170a2djsn18f6cda179e1'
    
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d2500074cmsh6e9b0e1f526758fp170a2djsn18f6cda179e1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
