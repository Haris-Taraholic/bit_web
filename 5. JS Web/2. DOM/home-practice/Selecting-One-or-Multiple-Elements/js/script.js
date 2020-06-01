//////////////////////// DOM PRACTICE ////////////////////////

///// Selecting One/Multiple Elements /////
/*
Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class that sets some background color to it.

Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.

Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.
 */

 //Second List
function selectTheSecondList() {
    var secondList = document.querySelector('.container ul:nth-child(2)');
    secondList.className = 'second-list_bg-color';
}

selectTheSecondList()


//All <li> Elements
function selectAllListItems() {
    var allListItems = document.querySelectorAll('li');

    for (var i = 0; i < allListItems.length; i++) {
        allListItems[i].className = 'all-li-elements';
    }
}

selectAllListItems();


//Third List
function selectAllListItemsFromThirdList() {
    var allListItemsFromThirdList = document.querySelectorAll('.container ul:nth-child(3) li');

    for (var i = 0; i < allListItemsFromThirdList.length; i++){
        allListItemsFromThirdList[i].className = 'all-li-elements-from-third-list';
    }
}

selectAllListItemsFromThirdList();