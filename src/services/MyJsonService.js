export const MyJsonService = (function() {
  const post = (body) => {
    return window.fetch('https://api.myjson.com/bins', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(
      (result) => result.json(),
    );
  }

  const get = (id) => {
    return window.fetch('https://api.myjson.com/bins/' + id)
      .then(
        (result) => result.json()
      )
  }


  return { post, get }
})()