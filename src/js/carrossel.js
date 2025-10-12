const carrosselItems = [
    {
        image: '../../src/assets/curso1.webp',
        title: 'Gestão e Automação de Processos Empresariais',
    },
    {
        image: '../../src/assets/curso2.webp',
        title: 'Inteligência Artificial Aplicada ao Trabalho',
    },
    {
        image: '../../src/assets/curso3.webp',
        title: 'Análise de Dados e Inteligência Empresarial',
    },
    {
        image: '../../src/assets/curso4.webp',
        title: 'Desenvolvimento e Suporte de Sistemas',
    },
    {
        image: '../../src/assets/curso5.webp',
        title: 'Cibersegurança e Proteção de Dados',
    },
    {
        image: '../../src/assets/curso6.webp',
        title: 'Automação Industrial e Indústria 4.0',
    },
    {
        image: '../../src/assets/curso7.webp',
        title: 'Marketing Digital e Estratégia de Vendas Online',
    }
];
let i = 0;
const tempo = 5000; 
const carrosselElement = document.querySelector('.carrossel');
const carrosselTitulo = document.querySelector('.carrossel-titulo');
function slideShow() {
    carrosselElement.style.backgroundImage = `url(${carrosselItems[i].image})`;
    carrosselTitulo.textContent = carrosselItems[i].title;
    i++;
    if (i >= carrosselItems.length) {
        i = 0;
    }
    setTimeout(slideShow, tempo);
}
slideShow();