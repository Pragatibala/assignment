/*
A fetch()  promise only rejects when a network error is encountered (which is usually when there's a permission issue or similar)
a fetch() promise does not reject on HTTP error (404, etc). instead, a then() handler must check the Response.ok and Response.status properties
*/



// const headers = [
//     ['Content-Type', 'text/html', 'extra'],
//     ['Accept'],
//   ];
//   fetch('https://example.com/', { headers });


// space in "C ontent-Type"
// const headers = {
//     'C ontent-Type': 'text/xml',
//     'Breaking-Bad': '<3',
//   };
//   fetch('https://example.com/', { headers });
          

// fetch('https://example.com/', {
//     method: 'GET',
//     body: new FormData(),
//   });