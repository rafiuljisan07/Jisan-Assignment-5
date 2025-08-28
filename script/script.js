// heart click setup 
document.getElementById('card-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('heart')) {
        const heartCountV = parseInt(document.getElementById("heart-count").innerText);
        const newCountV = heartCountV + 1;
        document.getElementById('heart-count').innerText = newCountV;
    }
})

// in-card buttons clicking setup
document.getElementById('card-container').addEventListener('click', function (event) {

    // call operation setup 
    if (event.target.classList.contains('callBtn')) {
        const remainCoin = document.getElementById('coin').innerText;

        // insufficient alert
        if (remainCoin < 20) {
            alert('❌ Insufficient coins. A call requires at least 20 coins.');
            return
        }
        // decreasing coin
        document.getElementById('coin').innerText = remainCoin - 20;

        // calling alert
        const nearestCard = event.target.closest('.card');
        const name = nearestCard.querySelector('.div .name').innerText;
        const num = nearestCard.querySelector('.div .num').innerText;
        alert("📞 Calling " + name + ": " + num)

        // creating a new div
        const historyDiv = document.createElement('div');
        historyDiv.className = "flex justify-between items-center bg-gray-50 mx-6 my-3 p-5 rounded-2xl";
        historyDiv.innerHTML =
            `<div>
            <h4 class="font-semibold text-xl">${name}</h4>
            <p class="text-gray-500">${num}</p>
        </div>
        <div>
            <p class="text-gray-500">${new Date().toLocaleTimeString()} </p>
        </div>`

        // appending the new div to the parent div   
        document.getElementById('history').appendChild(historyDiv);
    }

    // copy button click setup
    if (event.target.classList.contains('copy')) {
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        const newCopyCount = copyCount + 1;
        document.getElementById('copy-count').innerText = newCopyCount;
        const nearestCard = event.target.closest('.card');
        const num = nearestCard.querySelector('.div .num').innerText;
        alert('The number has been copied: ' + num)
        navigator.clipboard.writeText(num);
    }
})

// clear button click setup
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('history').innerText = '';
    document.getElementById('coin').innerText = 100;
})