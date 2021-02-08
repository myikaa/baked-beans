
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Steak',
  body: 'Is amazing',
  userId: 1,
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
