const ul = document.querySelector('#art');
const url = 'data/data.json';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function fetchData() {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let myArt = data.art;
            return myArt.map(function (art) {
                let li = createNode('li');
                console.log('inside loop')
                li.innerHTML = art.title + "<br>" + art.price + " kr <br>" + art.desc;
                append(ul, li);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

fetchData();
