//sidebar class
const btnToggle = document.querySelector('.toggle-btn');

//create a event 
btnToggle.addEventListener('click',function() {
    console.log('click')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
})