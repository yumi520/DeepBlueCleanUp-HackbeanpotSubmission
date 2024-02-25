/* draggable element */
const item = document.querySelector('.item');
const plasticbag = document.querySelector('.plasticbag');
const cigarettes = document.querySelector('.cigarettes');
const straw = document.querySelector('.straw');
const sixpackring = document.querySelector('.sixpackring');
const empty = document.querySelector('.empty');
const metal = document.querySelector('.metal');
const plasticwaterbottle = document.querySelector('.plasticwaterbottle');



/*item.addEventListener('dragstart', dragStart);*/
plasticbag.addEventListener('dragstart', dragStart);
cigarettes.addEventListener('dragstart', dragStart);
straw.addEventListener('dragstart', dragStart);
sixpackring.addEventListener('dragstart', dragStart);
empty.addEventListener('dragstart', dragStart);
metal.addEventListener('dragstart', dragStart);
plasticwaterbottle.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

const cigarettestextbox = document.querySelector('.cigarettes-text');
const plasticbagtextbox = document.querySelector('.plasticbag-text');
const strawtextbox = document.querySelector('.straw-text');
const sixpackringtextbox = document.querySelector('.sixpackring-text');
const metaltextbox = document.querySelector('.metal-text');
const plasticwaterbottletextbox = document.querySelector('.plasticwaterbottle-text');
const instructionstextbox = document.querySelector('.instructions-text');

document.querySelector('.cigarettes').addEventListener('dragstart', cigarettesfact);
document.querySelector('.plasticbag').addEventListener('dragstart', plasticbagfact);
document.querySelector('.straw').addEventListener('dragstart', strawfact);
document.querySelector('.sixpackring').addEventListener('dragstart', sixpackringfact);
document.querySelector('.metal').addEventListener('dragstart', metalfact);
document.querySelector('.plasticwaterbottle').addEventListener('dragstart', plasticwaterbottlefact);

//const allTextBoxes = [cigarettestextbox, plasticbagtextbox, strawtextbox,sixpackringtextbox, metaltextbox ,]

/*function toggleFact(toggleFact){
    allTextBoxes.forEach((textBox) => {
        textBox.classList.add("hidden")
    })
    toggleFact.classList.toggle("hidden")
}*/

function cigarettesfact(){
    cigarettestextbox.classList.toggle('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.add('hidden')
    strawtextbox.classList.add('hidden')
    sixpackringtextbox.classList.add('hidden')
    metaltextbox.classList.add('hidden')
    plasticwaterbottletextbox.classList.add('hidden')
}

function plasticbagfact(){
    cigarettestextbox.classList.add('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.toggle('hidden')
    strawtextbox.classList.add('hidden')
    sixpackringtextbox.classList.add('hidden')
    metaltextbox.classList.add('hidden')
    plasticwaterbottletextbox.classList.add('hidden')
}
function strawfact(){
    cigarettestextbox.classList.add('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.add('hidden')
    strawtextbox.classList.toggle('hidden')
    sixpackringtextbox.classList.add('hidden')
    metaltextbox.classList.add('hidden')
    plasticwaterbottletextbox.classList.add('hidden')
}

function sixpackringfact(){
    cigarettestextbox.classList.add('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.add('hidden')
    strawtextbox.classList.add('hidden')
    sixpackringtextbox.classList.toggle('hidden')
    metaltextbox.classList.add('hidden')
    plasticwaterbottletextbox.classList.add('hidden')
}
function metalfact(){
    cigarettestextbox.classList.add('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.add('hidden')
    strawtextbox.classList.add('hidden')
    sixpackringtextbox.classList.add('hidden')
    metaltextbox.classList.toggle('hidden')
    plasticwaterbottletextbox.classList.add('hidden')
}

function plasticwaterbottlefact(){
    cigarettestextbox.classList.add('hidden')
    instructionstextbox.classList.add('hidden')
    plasticbagtextbox.classList.add('hidden')
    strawtextbox.classList.add('hidden')
    sixpackringtextbox.classList.add('hidden')
    metaltextbox.classList.add('hidden')
    plasticwaterbottletextbox.classList.toggle('hidden')
}