const buttunImage = window.document.getElementById('buttunImage');
const imageToChangeBlock = window.document.getElementById('imageToChangeBlock');
const newImage = window.document.getElementById('newImage');
const buttonAdd = window.document.getElementById('buttonAdd');
const imageToChange = window.document.getElementById('imageToChange')
const imagesSaves = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
const data = window.document.getElementById('data');

const imagesDefault = [
    {
        id: '01',
        src: 'https://www.downloadclipart.net/large/car-png-photo.png'
    },
    {
        id: '02',
        src: 'https://www.hypeness.com.br/1/2018/12/imagens-surreais.jpg'
    },
    {
        id: '03',
        src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg'
    },
    {
        id: '04',
        src: 'http://4.bp.blogspot.com/-3YwFT7wiDnE/VT5NLGC20qI/AAAAAAABC8Y/tQcMBoQkbEk/s1600/adffb142a07755f9fc4e1400e3491ae32.jpg'
    }
]

if (imagesSaves.length === 0) {

    imagesSaves.push(...imagesDefault);
    localStorage.setItem('images', JSON.stringify(imagesSaves));

}

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let infor = hour + ':' + minute + ':' + second;

    document.querySelector('.time').innerHTML = infor;
}
timer = setInterval(showTime, 999);

function getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
}

function changeImage(imageToChange, images) {
    const randomImage = getRandomImage(images);
    imageToChange.src = randomImage.src;
}

setInterval(() => {
    changeImage(imageToChange, imagesSaves);
}, 3000);


buttonAdd.addEventListener('click', () => {
    if (newImage.value.length <= 0) {

        alert('informe uma url');
    } else {
        imagesSaves.push({
            id: '01',
            src: newImage.value
        })
        localStorage.setItem('images', JSON.stringify(imagesSaves));
    }
    newImage.value = '';
});

buttonData.addEventListener('click', () => {
    var mostrarData = new Date();

    for (var i = 0; i < 1; i++) {
        var img = document.createElement("img");
        img.src = imageToChange.src;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.margin = '4px';
        img.style.cursor = 'pointer';


        document.getElementById("deletar").appendChild(img);

    }
    console.log(imageToChange.src)

    document.getElementById('texto').innerHTML = (mostrarData);
    //localStorage.removeItem('images', JSON.stringify(imagesSaves));
});

function excluirItemSelecionado() {

    var itemSelecionado = imageToChange.src;
    var resultado = confirm("Deseja excluir o item: " + itemSelecionado + " ?");
    document.getElementById("deletar").innerHTML = imageToChange.src;
    if (imageToChange.src == 0) {
        alert("Selecione um item na lista!");
        return;
    }

    if (resultado == true) {
        deletar.removeItem(imageToChange.src);
        alert("O item " + itemSelecionado + " será excluído da lista!");
    }
    else {
        alert("Você desistiu de excluir o item " + itemSelecionado + " da lista!");
    }
}