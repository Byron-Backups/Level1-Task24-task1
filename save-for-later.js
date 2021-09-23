/*Compulsor tasl:
__________________*/


/*Reqiurements:
link to save-for-later.html
Make function to be called whenever item is saved.
Function to display updated saved items on page.
    ( localStorage.getItem ? )

*/

//global conuter of saved items.
let itemsSaved = 0;

//function that runs once save-for-later.html has loaded.
function runOnLoad() {

    //chain effect & animation
    $("#divSaveLater").css("font-size", "large");
    $("#divSaveLater").css("background-color", "cornflowerblue");
    $("body").css("background-color", "#da6f6f");
    
}

//function to animate pictures.
function animateButton() {

    //move pictures around a bit.
    $("img").fadeOut(3000);
    $("img").fadeIn(3000);
    
}

//function that shows and hides the legends' table in contact-us.html.
function hideShow(){

    var myTable = document.getElementById("apexLegends");

    if (myTable.style.display === "none") {
        
        myTable.style.display = "block";
    }
    else {

        myTable.style.display = "none";
    }

}

//function to clear fields for submit buttons on forms.
function clearField() {
    
    document.getElementById("userName").value = "";
    document.getElementById("userComment").value = "";
    document.getElementById("userContact").value = "";
    document.getElementById("userMail").value = "";
    document.getElementById("userPhone").value = "";

}

//function to toggle like/dislike.
function toggleLikes(x) {

    x.classList.toggle("fa-thumbs-down");

} 


/*Save for later dillema.
Button under item to be saved.
Button onClick opens saveLater(this.id) function,
uses id of item as id of button,
fetch <p> element from save-for-later.html,
add the saved item to it,
alert user of new amount of saved items.
*/
//save for later function.
function saveLater(itemID) {

    itemID += "";
    let tempItem = document.getElementById(itemID);
    let addPara = document.createElement(document.getElementById("pSaveLater"));
    addPara += tempItem;
    
    //this is just for me to see what each saved item is in the console.
    console.log("temptitem = " + tempItem + "\n" + "addPara = " + addPara);
    
    //alert that item is saved for later.
    itemsSaved++;
    alert("You have added another item to the saved page.\nThe total items saved is: " + itemsSaved);

}


//End.