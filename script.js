let data = [
    {
        id: 1,
        imgurl: 'https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg',
        title: 'Salvador Dali',
        url: 'https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD'
    },

    {
        id: 2,
        imgurl: 'https://cdn.shopify.com/s/files/1/0336/2701/3259/products/Gustav-Klimt-The-Tree-of-Life_2048x2048.jpg?v=1615487371',
        title: 'Gustav Klimt',
        url: 'https://en.wikipedia.org/wiki/Gustav_Klimt'
    },
    {
        id: 3,
        imgurl: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg',
        title: 'Vincent van Gogh',
        url: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh'
    },
    {
        id: 4,
        imgurl: 'https://arthive.net/res/media/img/oy400/article/0fc/7567064@2x.jpg',
        title: 'leonardo da vinci',
        url: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci'
    },
];





let leftarrow = document.getElementById('left-arrow');
let rightarrow = document.getAnimations('right-arrow');
let slidercontent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

let sliderindex = 0;

function createatag(item) {
    let atag = document.createElement('a');
    atag.setAttribute('href', item.url);
    atag.classList.add('slide');

    return atag;
}

function createh2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.append(item.title);
    tagtitle.classList.add('slider-title');

    return tagtitle;
}


// function createimgtag(item) {
//     slidercontent.style.backgroundImage = 'url(' + item.imgurl + ')';
//     slidercontent.style.backgroundRepeat = "no-repeat";
//     slidercontent.style.backgroundsize = "cover";

// }


function createimgtag(item) {
    let image = document.createElement('img');
    image.setAttribute('src', item.imgurl);
    image.setAttribute('alt', item.title);
    image.classList.add('image-slider');
    return image;

}

function createdots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function (event) {
            let id = event.target.getAttribute('data-id');
            sliderindex = id;
            setslider();
        }
        dots.appendChild(dot);
    })
    return dots;

}



function setslider() {

    slidercontent.innerHTML = ' ';
    let slideitem = createatag(data[sliderindex]);
    let h2tag = createh2tag(data[sliderindex]);
    let imgtag = createimgtag(data[sliderindex]);
    let dots = createdots(data[sliderindex]);


    slideitem.appendChild(imgtag);
    slideitem.appendChild(h2tag);
    slidercontent.appendChild(slideitem);
    slidercontent.appendChild(dots);

    currentDotActive();
    // console.log(slideitem);
}

function currentDotActive() {
    dotsList[sliderindex].classList.add('active');
}

function arrowleftclick() {
    if (sliderindex <= 0) {
        sliderindex = data.length - 1;
        setslider();
        return;
    }
    sliderindex--;
    setslider();
}

function arrowrightclick() {
    if (sliderindex >= data.length - 1) {
        sliderindex = 0;
        setslider();
        return;
    }
    sliderindex++;
    setslider();
}

leftarrow.addEventListener('click', arrowleftclick);
// rightarrow.addEventListener('click', arrowrightclick);

setInterval(() => {
    arrowrightclick();
}, 3000);

setslider();