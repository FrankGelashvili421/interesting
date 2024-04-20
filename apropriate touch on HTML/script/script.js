const click = document.querySelectorAll('.box');

click.forEach((MainClick) => {
    MainClick.addEventListener('click' , () =>{
        click.forEach((SecondClick) => {
        SecondClick.style.backgroundColor = 'rgba(17, 143, 143, 0.685)';
        });
        MainClick.style.backgroundColor = 'rgba(126, 17, 17, 0.842)';
    });
});