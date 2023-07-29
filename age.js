function ageInDays(){
    var birthYear = prompt("Enter Your Birth Year: ");
    var Days = (2023-birthYear) * 365;
    var ele = document.createElement('h1');
    var textAnswer = document.createTextNode("You are "+Days+" days old.");
    ele.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(ele);
    ele.setAttribute('id','clear');
}
function reset(){
    document.getElementById('clear').remove();
}