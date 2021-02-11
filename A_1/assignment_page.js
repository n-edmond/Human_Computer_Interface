function upDate(previewPic) {//will update the image.This will not change the image back after the mouse is removed
    let src_retrieval = previewPic.getAttribute("src");//variable that retrieves the src from html
    let alt_retrieval = previewPic.getAttribute("alt");//variable that retrieves the alt from html
    document.getElementById('image').style.backgroundImage = "url('"+src_retrieval+"')";//this will change the image
    document.getElementById('image').innerHTML = alt_retrieval;//this will change the text

}//END OF FUNCTION

function unDo() {//when mouse is moved, will remove image.
    let place_holder_val = document.getElementById('image');//creates a placeholder value that will retrieve the image from html page
    place_holder_val.style.backgroundImage = "url('https://github.com/n-edmond/Persona_5_Fusion_Calculator/blob/main/Persona_Pics/myself.jpg?raw=true')";//sets the image back to blank
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";//sets the statement back to its original

}//END OF FUNCTION
