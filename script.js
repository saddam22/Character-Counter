const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const emojiCount = document.getElementById("emojiCount");
const hashtagCount = document.getElementById("hashtagCount");
const remaining = document.getElementById("remaining");
const progressBar = document.getElementById("progressBar");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const preview = document.getElementById("preview");
const modeToggle = document.getElementById("modeToggle");

const maxChars = 200; // Maximum character Limit

//Load from LocalStorage on start
if(localStorage.getItem("textInput")){
	textInput.value = localStorage.getItem("textInput");
	updateCounts();
}

//Regex for Emoji detection
const emojiRegex = 

//Update Counts and Progress
textInput.addEventListener("input", () =>{
	const text = textInput.value;
	const length = text.length;
	const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
	
	charCount.textContent = `${length} Characters`;
	wordCount.textContent = `${words} Words`;
	remaining.textContent = `Remaining : ${Math.max(maxChars - length, 0)}`;

	const progress = Math.min((length / maxChars) * 100, 100);
	progressBar.style.width = progress + "%";

	//Change Progress Bar Color Based on limit
	if (length > maxChars) {
		progressBar.classList.remove("bg-blue-500");
		progressBar.classList.add("bg-red-500");
	}else{
		progressBar.classList.remove("bg-red-500");
		progressBar.classList.add("bg-blue-500");
	}

	//Live Preview
	preview.textContent = text;
});

clearBtn.addEventListener("click", () =>{
textInput.value = "";
charCount.textContent = "0 Characters";
wordCount.textContent = "0 Words";
remaining.textContent = `Remaining: ${maxChars}`;
progressBar.style.width = "0%";
preview.textContent = "";
});

//Copy Button
copyBtn.addEventListener("click", () =>{
	navigator.clipboard.writeText(textInput.value).then(() =>{
		alert("Copied to Clipboard!");
	});
});

//Dark/Light Mode Toggle
modeToggle.addEventListener('click', () =>{
	document.body.classList.toggle("dark");
	if(document.body.classList.contains("dark")){
		modeToggle.textContent = "☀️";
 	}
 	else{
 		modeToggle.textContent = "🌙";
 	}
});