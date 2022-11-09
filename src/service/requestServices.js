
export async function ytRequestAPI(channelId) {
  
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search?'
    const params = {
      "key": process.env.NEXT_PUBLIC_YT_API_KEY,
      "part": "snippet",
      "channelId": channelId,
      "order": "date",
      "maxResults": "10"
    }

  let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');

  try {
    const resp = await fetch(baseUrl + query, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log('request failed', error);
  }
}