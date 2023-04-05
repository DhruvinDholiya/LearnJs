let nameData = prompt("Please enter your name.");
let rnData = parseInt(prompt("Please enter your roll number."));

let phyMark = parseInt(prompt("Please enter marks of pysics."));
let chemMark = parseInt(prompt("Please enter marks of Chemistry."));
let BioMark = parseInt(prompt("Please enter marks of Biology."));

let scored_marks = phyMark + chemMark + BioMark;
let pers = (scored_marks / 300) * 100;

document.getElementById('name').innerHTML = nameData;
document.getElementById('rollNo').innerHTML = rnData;

document.getElementById('phyMark').innerHTML = phyMark;
document.getElementById('chemMark').innerHTML = chemMark;
document.getElementById('BioMark').innerHTML = BioMark;

document.getElementById('scoredMarks').innerHTML = scored_marks;
document.getElementById('persantage').innerHTML = pers;
