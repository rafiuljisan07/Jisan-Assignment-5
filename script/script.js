// heart click setup 
function increaseCountValue(id) {
    const heartCountV = parseInt(document.getElementById("heart-count").innerText);
    const newCountV = heartCountV + 1;
    document.getElementById('heart-count').innerText = newCountV;
}
document.getElementById('heart-1').addEventListener('click', function () {
increaseCountValue('heart-1')
})
document.getElementById('heart-2').addEventListener('click', function () {
increaseCountValue('heart-2')
})
document.getElementById('heart-3').addEventListener('click', function () {
increaseCountValue('heart-3')
})
document.getElementById('heart-4').addEventListener('click', function () {
increaseCountValue('heart-4')
})
document.getElementById('heart-5').addEventListener('click', function () {
increaseCountValue('heart-5')
})
document.getElementById('heart-6').addEventListener('click', function () {
increaseCountValue('heart-6')
})
document.getElementById('heart-7').addEventListener('click', function () {
increaseCountValue('heart-7')
})
document.getElementById('heart-8').addEventListener('click', function () {
increaseCountValue('heart-8')
})
document.getElementById('heart-9').addEventListener('click', function () {
increaseCountValue('heart-9')
})







