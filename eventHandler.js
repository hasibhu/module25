

function handleOnClick(){
    const statushandler = document.getElementById(`handler-status`);
    statushandler.innerText = `I have been clicked by handleOnClick`;
}


document.getElementById("event-listener").addEventListener(`click`, function(){
    const handleStatus = document.getElementById(`handler-status`);
    handleStatus.innerText = `I have been clicked by Event Listener`;
}) 






document.getElementById(`submit-button`).addEventListener(`click`, function(){
    const inputField = document.getElementById(`input-field`);

    const textInput = inputField.value;
    

    const texts = document.getElementById(`text`);
    texts.innerText = textInput;



})


document.getElementById('postButton').addEventListener('click', function () {
    const textBox = document.getElementById('textArea');
    const text = textBox.value;

    textBox.value = '';
    const postNewComment = document.getElementById('postComment');

    if (text.length > 0) {
        postNewComment.innerText = text ;

    }
})