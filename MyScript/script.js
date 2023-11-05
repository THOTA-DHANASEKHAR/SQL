/*
function copyCodeToClipboard(button) {
	const codeElement = button.nextElementSibling.querySelector("code");
	const codeToCopy = codeElement.innerText;
	navigator.clipboard.writeText(codeToCopy);
	button.innerHTML = '<i class="fas fa-check"></i> copied';
	button.classList.add("copied");
	setTimeout(() => {
		button.innerHTML = '<i class="fas fa-copy"></i> copy';
		button.classList.remove("copied");
	}, 3000);
}
*/

function copyCodeToClipboard(button) {
	var codeElement = button.closest(".code-container").querySelector("code");

	if (codeElement) {
		var textArea = document.createElement("textarea");
		textArea.value = codeElement.textContent;
		document.body.appendChild(textArea);
		textArea.select();

		try {
			document.execCommand("copy");
			button.innerHTML = "<i class='fas fa-check'> </i> Copied!";
			button.classList.add("copied");
		} catch (err) {
			console.error("Unable to copy to clipboard: " + err);
		}
		document.body.removeChild(textArea);

		setTimeout(function() {
			button.innerHTML = '<i class="fas fa-copy"></i> copy';
			button.classList.remove("copied");
		}, 2000);
	}
}

const toggleButtons = document.querySelectorAll('.toggleButton');
toggleButtons.forEach(button => {
	button.addEventListener('click', function() {
		const currentState = this.getAttribute('data-state');
		if (currentState === 'copy') {
			// Change to the "Copied" state
			this.innerHTML = '<i class="fas fa-check"></i> copied';
			this.setAttribute('data-state', 'copied');
		} else {
			// Change to the "Copy" state
			this.innerHTML = '<i class="fas fa-copy"></i> copy';
			this.setAttribute('data-state', 'copy');
		}
	});
});

function toggleNav() {
	var list = document.getElementById("listofitems_mobile");
	if (list.style.width === "0%" || list.style.width === "") {
		list.style.width = "50%";
	} else {
		list.style.width = "0%";
	}
}

function openNav() {
	document.getElementById("listofitems_mobile").style.width = "50%";
}


function closeNav() {
	document.getElementById("listofitems_mobile").style.width = "0";
}

$(document).ready(function() {
	function checkScreenSize() {
		const listofitems = `
      <div id='listofitems'>
<li class='LeftSideIndex_Btn_h' id='SQL BASICS' name = 'SQL BASICS'>SQL SQL BASICS</li>
<a href='/index.html'><li class='LeftSideIndex_Btn' id='Intro' name = 'Intro'>SQL Intro</li></a>
<a href='/pros&cons.html'><li class='LeftSideIndex_Btn' id='pros&cons' name = 'pros&cons'>SQL Pros & Cons</li></a>
<a href='/comments.html'><li class='LeftSideIndex_Btn' id='comments' name = 'comments'>SQL Comments</li></a>
<a href='/commands.html'><li class='LeftSideIndex_Btn' id='commands' name = 'commands'>SQL Commands</li></a>
<a href='/case_sensitive.html'><li class='LeftSideIndex_Btn' id='case_sensitive' name = 'case sensitive'>SQL Case Sensitive</li></a>
<a href='/bestpratices.html'><li class='LeftSideIndex_Btn' id='bestpratices' name = 'Best pratices'>SQL Best Pratices</li></a>

<li class='LeftSideIndex_Btn_h' id='SQL DDL' name = 'SQL DDL'>SQL SQL DDL</li>
<a href='/create_DB.html'><li class='LeftSideIndex_Btn' id='create_DB' name = 'create_DB'>SQL Create Database</li></a>
<a href='/create_TBL.html'><li class='LeftSideIndex_Btn' id='create_TBL' name = 'create_TBL'>SQL create TABLE</li></a>
<a href='/ALT_DB.html'><li class='LeftSideIndex_Btn' id='ALT_DB' name = 'ALT_DB'>SQL Alter Database</li></a>
<a href='/ALT_TBL.html'><li class='LeftSideIndex_Btn' id='ALT_TBL' name = 'ALT_TBL'>SQL Alter Table</li></a>
<a href='/drop_TBL.html'><li class='LeftSideIndex_Btn' id='drop_TBL' name = 'drop_TBL'>SQL Drop Table</li></a>
<a href='/drop_DB.html'><li class='LeftSideIndex_Btn' id='drop_DB' name = 'drop_DB'>SQL Drop Database</li></a>
<a href='/rename.html'><li class='LeftSideIndex_Btn' id='rename' name = 'rename'>SQL Rename</li></a>
<a href='/truncate.html'><li class='LeftSideIndex_Btn' id='truncate' name = 'truncate'>SQL Truncate</li></a>
    </div>`;

		const navigationbar = `
      <nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div class='container-fluid'>
        <button class='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' onclick='toggleNav()' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='toggler-icon top-bar'></span>
          <span class='toggler-icon middle-bar'></span>
          <span class='toggler-icon bottom-bar'></span>
        </button>
        

        <a class='navbar-brand' href='#'>
          <img src='Images/tds.png' alt='tds' style='width:40px; ' class='rounded-pill'>
          <b>&#160; LearnIt.today</b>
        </a>
       <p ></p>
        <div class='collapse navbar-collapse justify-content-end' >
        <a id='navbarSupportedContent'></a>
          <ul class='navbar-nav  mb-2 mb-lg-0' id='navlist'>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='Home_Body()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-home'></i> HOME&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='JOBS()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-briefcase'></i> JOBS&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='INTERVIEW()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-book-open icon'></i> Practice&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='learning()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-graduation-cap'></i> COURSES&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='BOOKS()'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-book'></i> BOOKS&#160;&#160; </b>
              </a>
            </li>
            <li class='nav-item' data-bs-toggle='collapse' data-bs-target='.navbar-collapse'>
              <a class='nav-link' onclick='LOGIN()' data-bs-toggle='modal' data-bs-target='#sign-in'>
                <b class='nav_name'>&#160;&#160; <i class='fas fa-sign-in-alt'></i> SIGN IN&#160;&#160; </b>
              </a>
            </li>
          </ul>
            </div>
      </div>
     </nav>`;

		const NavigationbarMobile = `
<nav class="navbar1 fixed-bottom navbar-light bg-light">
    <div class="container-fluid">
        <a id='navbarSupportedContent'></a>
        <ul class="navbar-nav1 mb-2 mb-lg-0 d-flex justify-content-around" id="navlist">
            <li class="nav-item1">
                <a class="nav-link1" onclick="Home_Body()">
                    <b class="nav_name1"><i class="fas fa-home"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="JOBS()">
                    <b class="nav_name1"><i class="fas fa-briefcase"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="INTERVIEW()">
                    <b class="nav_name1"><i class="fas fa-book-open icon"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="learning()">
                    <b class="nav_name1"><i class="fas fa-graduation-cap"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="BOOKS()">
                    <b class="nav_name1"><i class="fas fa-book"></i></b>
                </a>
            </li>
            <li class="nav-item1">
                <a class="nav-link1" onclick="LOGIN()" data-bs-toggle="modal" data-bs-target="#sign-in">
                    <b class="nav_name1"><i class="fas fa-user"></i></b>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;
const footer = `
  <div class="row">
    <div class="col-md-6 text-center text-md-start">
        <b>Copyright &copy; 2023 <a href="#">Feelit.today</a>, All rights reserved.</b><br>
    </div>
    <div class="col-md-6 text-center text-md-end">
      <a href="#" class='footeropt'>CONTACTUS</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>ABOUTUS</a>&nbsp;|&nbsp;     
      <a href="#" class='footeropt'>DISCLIMER</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>FOLLOW US</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>HOME</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>COOKIES</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>HELP</a>&nbsp;|&nbsp;
      <a href="#" class='footeropt'>SUBCRIBE</a>
    </div>
  </div>
 `;
		document.getElementById("footer").innerHTML = footer;

		document.getElementById("navigation_bar").innerHTML = navigationbar;
		var getclass = document.getElementById("getclass").textContent;
		var getclassModified = `id='${getclass}'`;

		var listofitemsModified = listofitems.replace(new RegExp(`id='${getclass}'`), `${getclassModified} style='background-color:#d4dceb;'`);
		//var bModified = b.replace(new RegExp(`id='${a}'`), `${aModified} class='active'`);

		if ($(window).width() < 450) {
			document.getElementById("navigation_bar_botom").innerHTML = NavigationbarMobile;

			$('#sidenavbtn').show();
			$('#laptop').hide();
			$('#content').hide();
			$('#mobile').show();
			$('#listofitems_mobile').html(listofitemsModified);
			$("#listofitems_mobile1").html($("#content").html());
		} else if ($(window).width() > 450) {
			$('#sidenavbtn').hide();
			$('#content').hide();
			$('#mobile').hide();
			$('#laptop').show();
			$('#listofitems_Laptop').html(listofitemsModified);
			$("#listofitems_Laptop1").html($("#content").html());
		}
	}
	checkScreenSize();
});

//var getclass = document.getElementById("getclass").textContent;
//document.getElementById(getclass).style.backgroundColor = "#04aa6d";

window.addEventListener("load", () => {
    const loader = document.querySelector(".loadingspinner");
    const content = document.querySelector(".content");

    // Hide the loader
    //loader.style.display = "none";

    // Show the content
    content.style.display = "block";
});
