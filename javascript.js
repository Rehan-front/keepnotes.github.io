// const addButton = document.getElementById('add');


const updateLSData = () =>{
	const textAreaData = document.querySelectorAll('textarea');
	const notes = [];
console.log(textAreaData);
	textAreaData.forEach((note) =>{
		return notes.push(note.value);
	})

	localStorage.setItem('notes', JSON.stringify(notes));
}


const addNewNote= (text = '') =>{

	const note = document.createElement('div');
	note.classList.add('note');

	const htmlData = `
	<div class="operation">
			<button class="edit"><i class="fas fa-edit"></i></button>
			<button class="delete"> <i class="fas fa-trash-alt"></i> </button>
		</div>

		<div class="main ${text ? "" : "hidden"}"></div>
		<textarea class="${text ? "hidden" : ""}"></textarea>	`;

	note.insertAdjacentHTML('afterbegin',htmlData);
	console.log(note);



	// getting the ref
	const editBtn = note.querySelector('.edit');
	const delBtn = note.querySelector('.delete');
	const mainDiv = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	delBtn.addEventListener('click', () =>{
		note.remove();
	})

textArea.value = text;
mainDiv.innerHTML = text;



 editBtn.addEventListener('click', () =>{
 	mainDiv.classList.toggle('hidden');
 	textArea.classList.toggle('hidden'); 
 })

textArea.addEventListener('change',(event) =>{
	const value = event.target.value;
	mainDiv.innerHTML = value;

	updateLSData()
})

	document.body.appendChild(note);
}


// getting data back\

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note) => addNewNote(note)) }

// addButton.addEventListener('click', () => addNewNote());

const logo = document.querySelector('.logo');

logo.addEventListener('click',lg = () =>{
	const al = 'Insta - im_rehanngl';
	alert(al)
})

const sorry = document.querySelector('.delete');

sorry.addEventListener('click',srr = () =>{
	const al = "sorry to say but due to some problems the delete button isn't working(not able to deleteit from the local storage :(,we're working on it";
	alert(al)
})