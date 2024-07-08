


// Step - 1: Add event listener to the post button
document.getElementById(`btn-post`).addEventListener(`click`, function(){

    //Step - 2: Get an access inside the comment box
    const commentBox = document.getElementById(`new-comment`);

    //Step - 3: Store comment to a variable
    const newComment = commentBox.value;

    //Step - 4: Make access to the comment container
    const commentContainer = document.getElementById(`comment-container`);

    //Step - 5: Create a paragraph element 
    const p = document.createElement(`p`);

    // Step - 6: Assign the new comment in the paragraph or P tag from the comment box that is already stored in variable - "newComment'.
    p.innerText = newComment;

    // Step - 7: Add or Append the paragraph in the comment container div. 
    commentContainer.appendChild(p);

    // Step -8: Remove written comment from the comment box

    commentBox.value = ``;
})