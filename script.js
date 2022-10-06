// Input with enter
let userName = document.getElementById('userName')
userName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});


// Dropdown
document.querySelector("body").addEventListener("click", (e) => {
	if (
		document
			.getElementById("drop-down-div_dropdown_3")
			.classList.contains("active")
	) {
		document
			.getElementById("drop-down-div_dropdown_3")
			.classList.add("hidden");
		document
			.getElementById("drop-down-div_dropdown_3")
			.classList.remove("active");
	}
});

function showDropDownMenu_dropdown_3(el) {
	document.querySelectorAll(".hidden").forEach((el) => {
		el.classList.remove("active");
	});
	el.parentElement.children[1].classList.add("active");
	el.parentElement.children[1].classList.remove("hidden");
}

let targetText = ""
let role = targetText.search('warewolf', 'witch', 'guardians')


function text_dropdown_3(el) {
	targetText = el.innerHTML;
	document.getElementById(
		"drop-down-content-setter_dropdown_3"
	).innerHTML = targetText;
	document
		.getElementById("drop-down-div_dropdown_3")
		.classList.toggle("hidden");
		console.log(targetText);
		console.log(role);
}



// Role


// validate form
let input = document.forms["myForm"]["uname"].value;
function validateForm() {
  if (input == "" && role == -1) {
    alert("Kamu belum memasukan Nama dan Role kamu");
    return false;
  } else if ((input.length > 0) && (role != -1)) {
		alert("Kamu belum memasukan Role")
		return false;
  } else if (input == "" && role != -1) {
		alert("Kamu belum memasukan Nama")
		return false;
  } else if (input && role == 9) {
		alert(`${input} : Aaauuuuuu....`)
		return false;
  } else if (input && role != 6) {
		alert(`${input} : Abracadabra....`)
		return false;
  } else if (input && role != 10) {
		alert(`${input} : This is Spartan....`)
		return false;
	}
}
