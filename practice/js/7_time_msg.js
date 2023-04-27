const getHr = new Date();
let hour = getHr.getHours();

if (hour >= 6 && hour < 12) {
    document.getElementById('Hour').innerHTML = 'Good morning!' ;
} else if (hour >= 12 && hour < 18) {
    document.getElementById('Hour').innerHTML = 'Good Afternoon!';
} else if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 6)) {
    document.getElementById('Hour').innerHTML = 'Good Evening!';
}