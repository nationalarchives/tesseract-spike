let urls = [
    'http://localhost:8000/images/test.jpg'
];


urls.forEach(url => {

    Tesseract.recognize(url)
        .then(function (result) {

            let fragment = document.createDocumentFragment('figure');

            let figure = document.createElement('figure');
            figure.classList.add('figure');

            let img = new Image();
            img.classList.add('figure-img', 'img-fluid', 'rounded');
            img.src = url;

            let figcaption = document.createElement('figcaption');
            figcaption.classList.add('figure-caption');
            figcaption.innerText = result.text;

            figure.appendChild(img);
            figure.appendChild(figcaption);

            fragment.appendChild(figure);

            let col = document.getElementsByClassName('col')[0];

            col.appendChild(fragment);

        })
        .progress(function (result) {
            console.log(`${result['status']}`);
        });
});
