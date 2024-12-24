let currentplayer = "X"
let arr = Array(9).fill(null);



function reset(){
    arr = Array(9).fill(null); // Reset the array to all null values
    currentplayer = "X"; // Reset the player to "X"

    // Clear the grid display
    const cells = document.querySelectorAll('.col');
    cells.forEach(cell => cell.innerText = "");
}

function checkwinner() {

    if (// col 
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        // now rows
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        // diagonals
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])

    ) {

        // document.write(`Winner is ${currentplayer}`);
        alert(`Winner is ${currentplayer} `)
        return;

    }

    if (!arr.some((e) => e == null)) {
        document.write(`Draw...`);
        return;
    }
}
function handler(el) {

    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentplayer;
    el.innerText = currentplayer;
    checkwinner();
    if (currentplayer === "X") {
        currentplayer = "O";
    } else {
        currentplayer = "X";
    }
}

