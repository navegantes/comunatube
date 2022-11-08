
export function ytRequestAPI(obj) {
  console.log(obj);
  // if (obj) {
    const baseUrl = obj.baseUrl;
    const params = obj.query
  // } else {
  //   const baseUrl = 'https://www.googleapis.com/youtube/v3/search?'
  //   const params = {
  //     "key": "AIzaSyCZCSEmKhfnPOQNG0Sju4hlw2YDUxgi6pg",
  //     "part": "snippet",
  //     "channelId": "UCcoxGCRGcq6FhHbEvr2y9Vg",
  //     "order": "date",
  //     "maxResults": "10"
  //   }
  // }

  let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');

  return fetch(baseUrl+query, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(resp => resp.json())
    .then((data) => {
      // callback(data)
      return data
    }).catch(function (error) {
      console.log('request failed', error)
    });
}