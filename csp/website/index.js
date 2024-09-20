localStorage.setItem('user-token', 'kacper-jwt')

const params = new URLSearchParams(window.location.search);
const src = params.get('image');

const dialog = document.querySelector("dialog");

if (src) {
    showDialog(src);
}

const buttons = document.querySelectorAll('.img-button');
buttons.forEach(button => {
    const img = button.querySelector('img');
    img.style = makeStyle(img.src);

    return button.addEventListener("click", () => {
        showDialog(img.src);
    });
});

dialog.addEventListener('close', () => {
    window.history.replaceState({}, window.title, window.location.href.split('?')[0]);
})

function showDialog(src) {
    dialog.showModal();
    dialog.innerHTML = `<img src="${src}" style="${makeStyle(src)}">`;

    window.history.replaceState({}, window.title, window.location.href.split('?')[0] + `?image=${src}`);

}

function makeStyle(seedString) {
    const nums = seedString.replaceAll(/[^\d]/g, '')% 360;
    return `filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(${nums}deg);`;
}