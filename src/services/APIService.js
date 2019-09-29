const API_URI = 'https://anikeef-write-api.herokuapp.com/'

export const APIService = (function() {
  const post = (body) => {
    return window.fetch(API_URI + 'markdowns', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(
      (result) => result.json()
    );
  }

  const get = (id) => {
    return window.fetch(API_URI + 'markdowns/' + id)
      .then(
        (result) => result.json()
      )
  }

  return { post, get };
})();