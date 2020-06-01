///////////////////// BOM - PRACTICE //////////////////////

////// BOM (Window object) ///////

//// window.navigator ////

/* Create a function that prints out in the console the following information:
    - the platform on which the browser is running,
    - the information about the browser version,
    - the company that created that browser.
    Each piece of information should be printed out in a new row. */

function printInfo() {
    console.log('\nwindow.navigator exercise: ' + '\nInformation about the platform the browser is running on: ===> ' + window.navigator.platform +
        '\nVersion information of the browser: ===> ' + window.navigator.appVersion + '\nThe company that created that browser: ===> ' + window.navigator.vendor);
}

printInfo();


/* Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is no Internet connection. */

function isOnline() {
    if (window.navigator.onLine === true) {
        console.log('\nwindow.navigator exercise: ' + '\nBrowser status: ===> Online!');

    } else {
        console.log('\nwindow.navigator exercise: ' + '\nBrowser status: ===> Offline!');

    }
}

isOnline();


//// window.screen ////

/* Create a function that prints out the following information in the console:
    - current browser width and height,
    - max possible browser height. */
function windowScreen() {
    console.log('\nwindow.screen exercise: ' + '\nCurrent browser width and height: ===> ' + window.screen.height + ', ' + window.screen.width +
        '\nMax possible browser height: ===> ' + window.screen.availHeight);

}

windowScreen();


//// window.location ////

/* Write a function that prints out website’s url information in the console:
    - full url address,
    - domain name,
    - used protocol,
    - parameters which are part of URL. */

function urlInfo() {
    console.log('\nwindow.location exercise: ' + '\nFull url address: ===> ' + window.location.href + '\nDomain name: ===> ' + window.location.host +
        '\nUsed protocol: ===> ' + window.location.protocol + '\nParameters which are part of URL: ===> ' + window.location.search);

}

urlInfo();


/* Create a function for reloading the page. */

function pageReload() {
    //console.log('Reload the page: ===>' + window.location.reload()); //This is in comments, because it will keep reloading the page.
}

pageReload();


/* Create a function that redirects you to a website address passed to it. */

function pageRedirect() {
    //location.href = "https://www.w3schools.com"; //This is in comments, because it will redirect the page.
}

pageRedirect();


//// window.localStorage ////

/* Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage. */

function storesPassedData() {
    console.log('\nlocalStorage exercise:');
    window.localStorage.setItem('name', 'Stefan Pavlovic');
}

var storedData = storesPassedData()

//
function getData() {
    var getName = window.localStorage.getItem('name');
    if (getName) {
        console.log(getName);

    } else {
        console.log('There is no data!');
    }
}

getData()

//
function removeData() {
    console.log(window.localStorage.removeItem('name')); //It returns undefined.
}

removeData()


//// window.history ////

/* Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */

function navigateBetweenPages() {
    // window.history.forward();
    // window.history.back();
}

navigateBetweenPages()

