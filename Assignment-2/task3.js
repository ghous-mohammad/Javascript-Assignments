function addNewParagraph(text) {
    // create a new paragraph element
    const newParagraph = document.createElement("p");
  
   
    newParagraph.textContent = text;

    const body = document.getElementById("fg");
  
    
    body.appendChild(newParagraph);
  }
  addNewParagraph("This is a new paragraph.");
  