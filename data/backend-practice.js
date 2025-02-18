const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    // document.querySelector('html').innerHTML = xhr.response;
    console.log(xhr.response);
});

xhr.open(
    'GET',
    'https://supersimplebackend.dev/products'
);
xhr.send();