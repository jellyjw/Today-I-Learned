const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw"); // draw라는 id
const resetButton = document.querySelector("#reset");//reset이라는 id

const lottoNumbers = [];
const colors = ["tomato", "yellow", "teal", "purple", "blue"];


function paintNumber(number) {
    const eachNumDiv = document.createElement("div");
    let colorIndex = Math.floor(number / 10);
    colors[colorIndex];
    eachNumDiv.classList.add('eachnum');
    eachNumDiv.style.backgroundColor = colors[colorIndex];
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv);
}

drawButton.addEventListener("click", function () {
    while (lottoNumbers.length < 6) {
        let ran = Math.floor(Math.random() * 45) + 1;
        //중복을 막기 위해 존재하지 않는 숫자에 -1을 반환해주는 함수인 indexOf 사용
        if (lottoNumbers.indexOf(ran) === -1) {
            lottoNumbers.push(ran);
            paintNumber(ran)
        }
    }
})


        //0부터 1까지의 랜덤숫자를 내보내주는 메서드, 소수점 포함
        //math.floor는 소숫점을 제거해주는 역할
        // 1~45를 원하기 때문에 1을 더해줌