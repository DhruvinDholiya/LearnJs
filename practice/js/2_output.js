let nameData = prompt("Please enter your name.");
let rnData = parseInt(prompt("Please enter your roll number."));
let dateData = parseInt(prompt("Please enter your roll number in this formate 'DD/MM/YYYY'."));

let phyMark = parseInt(prompt("Please enter marks of pysics."));
let chemMark = parseInt(prompt("Please enter marks of Chemistry."));
let bioMark = parseInt(prompt("Please enter marks of Biology."));
let engMark = parseInt(prompt("Please enter marks of English."));
let sansMark = parseInt(prompt("Please enter marks of Sanskrit."));

let scored_marks = phyMark + chemMark + bioMark + engMark + sansMark;
let pers = (scored_marks / 500) * 100;

document.getElementById('nameData').innerHTML = nameData;
document.getElementById('rnData').innerHTML = rnData;
document.getElementById('dtData').innerHTML = dateData;

document.getElementById('phyMark').innerHTML = phyMark;
document.getElementById('chemMark').innerHTML = chemMark;
document.getElementById('bioMark').innerHTML = bioMark;
document.getElementById('engMark').innerHTML = engMark;
document.getElementById('sansMark').innerHTML = sansMark;

document.getElementById('scoredMarks').innerHTML = scored_marks;
document.getElementById('persantage').innerHTML = pers;