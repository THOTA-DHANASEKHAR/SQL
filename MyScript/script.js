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

    setTimeout(function () {
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
<li class='LeftSideIndex_Btn_h' id='SQL_Tutorial' name = 'SQL_Tutorial'><a href='#SQL_Tutorial'>SQL Tutorial</a></li>
<li class='LeftSideIndex_Btn' id='SQL_HOME' name = 'SQL_HOME'><a href='#SQL_HOME'>SQL HOME</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Intro' name = 'SQL_Intro'><a href='#SQL_Intro'>SQL Intro</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Syntax' name = 'SQL_Syntax'><a href='#SQL_Syntax'>SQL Syntax</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Select' name = 'SQL_Select'><a href='#SQL_Select'>SQL Select</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Select_Distinct' name = 'SQL_Select_Distinct'><a href='#SQL_Select_Distinct'>SQL Select Distinct</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Where' name = 'SQL_Where'><a href='#SQL_Where'>SQL Where</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Order_By' name = 'SQL_Order_By'><a href='#SQL_Order_By'>SQL Order By</a></li>
<li class='LeftSideIndex_Btn' id='SQL_And' name = 'SQL_And'><a href='#SQL_And'>SQL And</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Or' name = 'SQL_Or'><a href='#SQL_Or'>SQL Or</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Not' name = 'SQL_Not'><a href='#SQL_Not'>SQL Not</a></li>

<li class='LeftSideIndex_Btn_h' id='SQL_Not1' name = 'SQL_Not'><a href='#SQL_Not'>SQL Joins</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Insert_Into' name = 'SQL_Insert_Into'><a href='#SQL_Insert_Into'>SQL Insert Into</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Null_Values' name = 'SQL_Null_Values'><a href='#SQL_Null_Values'>SQL Null Values</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Update' name = 'SQL_Update'><a href='#SQL_Update'>SQL Update</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Delete' name = 'SQL_Delete'><a href='#SQL_Delete'>SQL Delete</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Select_Top' name = 'SQL_Select_Top'><a href='#SQL_Select_Top'>SQL Select Top</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Min_and_Max' name = 'SQL_Min_and_Max'><a href='#SQL_Min_and_Max'>SQL Min and Max</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Count' name = 'SQL_Count'><a href='#SQL_Count'>SQL Count</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Sum' name = 'SQL_Sum'><a href='#SQL_Sum'>SQL Sum</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Avg' name = 'SQL_Avg'><a href='#SQL_Avg'>SQL Avg</a></li>

<li class='LeftSideIndex_Btn_h' id='SQL_Not1' name = 'SQL_Not'><a href='#SQL_Not'>SQL Set operators</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Like' name = 'SQL_Like'><a href='#SQL_Like'>SQL Like</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Wildcards' name = 'SQL_Wildcards'><a href='#SQL_Wildcards'>SQL Wildcards</a></li>
<li class='LeftSideIndex_Btn' id='SQL_In' name = 'SQL_In'><a href='#SQL_In'>SQL In</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Between' name = 'SQL_Between'><a href='#SQL_Between'>SQL Between</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Aliases' name = 'SQL_Aliases'><a href='#SQL_Aliases'>SQL Aliases</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Joins' name = 'SQL_Joins'><a href='#SQL_Joins'>SQL Joins</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Inner_Join' name = 'SQL_Inner_Join'><a href='#SQL_Inner_Join'>SQL Inner Join</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Left_Join' name = 'SQL_Left_Join'><a href='#SQL_Left_Join'>SQL Left Join</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Right_Join' name = 'SQL_Right_Join'><a href='#SQL_Right_Join'>SQL Right Join</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Full_Join' name = 'SQL_Full_Join'><a href='#SQL_Full_Join'>SQL Full Join</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Self_Join' name = 'SQL_Self_Join'><a href='#SQL_Self_Join'>SQL Self Join</a></li>


<li class='LeftSideIndex_Btn_h' id='SQL_Not' name = 'SQL_Not'><a href='#SQL_Not'>SQL Aggrigate Functions</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Union' name = 'SQL_Union'><a href='#SQL_Union'>SQL Union</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Group_By' name = 'SQL_Group_By'><a href='#SQL_Group_By'>SQL Group By</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Having' name = 'SQL_Having'><a href='#SQL_Having'>SQL Having</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Exists' name = 'SQL_Exists'><a href='#SQL_Exists'>SQL Exists</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Any,_All' name = 'SQL_Any,_All'><a href='#SQL_Any,_All'>SQL Any, All</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Select_Into' name = 'SQL_Select_Into'><a href='#SQL_Select_Into'>SQL Select Into</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Insert_Into_Select' name = 'SQL_Insert_Into_Select'><a href='#SQL_Insert_Into_Select'>SQL Insert Into Select</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Case' name = 'SQL_Case'><a href='#SQL_Case'>SQL Case</a></li>


<li class='LeftSideIndex_Btn_h' id='SQL_Not' name = 'SQL_Not'><a href='#SQL_Not'>SQL DML</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Null_Functions' name = 'SQL_Null_Functions'><a href='#SQL_Null_Functions'>SQL Null Functions</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Stored_Procedures' name = 'SQL_Stored_Procedures'><a href='#SQL_Stored_Procedures'>SQL Stored Procedures</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Comments' name = 'SQL_Comments'><a href='#SQL_Comments'>SQL Comments</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Operators' name = 'SQL_Operators'><a href='#SQL_Operators'>SQL Operators</a></li>
<li class='LeftSideIndex_Btn' id='' name = ''><a href='#'></a></li>
<li class='LeftSideIndex_Btn' id='SQL_Database' name = 'SQL_Database'><a href='#SQL_Database'>SQL Database</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Create_DB' name = 'SQL_Create_DB'><a href='#SQL_Create_DB'>SQL Create DB</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Drop_DB' name = 'SQL_Drop_DB'><a href='#SQL_Drop_DB'>SQL Drop DB</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Backup_DB' name = 'SQL_Backup_DB'><a href='#SQL_Backup_DB'>SQL Backup DB</a></li>


<li class='LeftSideIndex_Btn_h' id='SQL_Not' name = 'SQL_Not'><a href='#SQL_Not'>SQL functions</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Create_Table' name = 'SQL_Create_Table'><a href='#SQL_Create_Table'>SQL Create Table</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Drop_Table' name = 'SQL_Drop_Table'><a href='#SQL_Drop_Table'>SQL Drop Table</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Alter_Table' name = 'SQL_Alter_Table'><a href='#SQL_Alter_Table'>SQL Alter Table</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Constraints' name = 'SQL_Constraints'><a href='#SQL_Constraints'>SQL Constraints</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Not_Null' name = 'SQL_Not_Null'><a href='#SQL_Not_Null'>SQL Not Null</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Unique' name = 'SQL_Unique'><a href='#SQL_Unique'>SQL Unique</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Primary_Key' name = 'SQL_Primary_Key'><a href='#SQL_Primary_Key'>SQL Primary Key</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Foreign_Key' name = 'SQL_Foreign_Key'><a href='#SQL_Foreign_Key'>SQL Foreign Key</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Check' name = 'SQL_Check'><a href='#SQL_Check'>SQL Check</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Default' name = 'SQL_Default'><a href='#SQL_Default'>SQL Default</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Index' name = 'SQL_Index'><a href='#SQL_Index'>SQL Index</a></li>

<li class='LeftSideIndex_Btn_h' id='SQL_Not' name = 'SQL_Not'><a href='#SQL_Not'>SQL DDL</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Auto_Increment' name = 'SQL_Auto_Increment'><a href='#SQL_Auto_Increment'>SQL Auto Increment</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Dates' name = 'SQL_Dates'><a href='#SQL_Dates'>SQL Dates</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Views' name = 'SQL_Views'><a href='#SQL_Views'>SQL Views</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Injection' name = 'SQL_Injection'><a href='#SQL_Injection'>SQL Injection</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Hosting' name = 'SQL_Hosting'><a href='#SQL_Hosting'>SQL Hosting</a></li>
<li class='LeftSideIndex_Btn' id='SQL_Data_Types' name = 'SQL_Data_Types'><a href='#SQL_Data_Types'>SQL Data Types</a></li>
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
document.getElementById("navigation_bar").innerHTML = navigationbar;
var getclass = document.getElementById("getclass").textContent;
var getclassModified = `id='${getclass}'`;

var listofitemsModified = listofitems.replace(new RegExp(`id='${getclass}'`), `${getclassModified} style='background-color:#04aa6d';`);
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


