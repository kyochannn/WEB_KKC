let target = document.querySelector('#dynamic');

// console.log(selectString)
// console.log(selectStringArr)

function randomString() {
    let stringArr = ["언제까지 고민만 할거니?", "너 자신을 증명해봐!", "오직 crossfit247에서!"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("")

    return selectStringArr;
}

function resetTyping() {
    target.textContent = ""

    dynamic(randomString());
}

function dynamic(randomArr) {
    // console.log(randomArr)
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift(); /* shift() */
        setTimeout(function () {
            dynamic(randomArr);
        }, 80)
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);

/* 숫자 up */
/* count1 */

let countBox = document.querySelector('#count'),
    count = 0;

let counting = setInterval(function () {
    if (count == 50) {
        clearInterval(counting);
        return false;
    }
    count += 1;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
}, 60);

/* count2 */

let countBox2 = document.querySelector('#count2'),
    count2 = 0;

let counting2 = setInterval(function () {
    if (count2 == 21000) {
        clearInterval(counting2);
        return false;
    }
    count2 += 100;
    countBox2.innerHTML = new Intl.NumberFormat().format(count2);
}, 20);

/* count3 */

let countBox3 = document.querySelector('#count3'),
    count3 = 0;

let counting3 = setInterval(function () {
    if (count3 == 2900) {
        clearInterval(counting3);
        return false;
    }
    count3 += 10;
    countBox3.innerHTML = new Intl.NumberFormat().format(count3);
}, 15);

/* count4 */

let countBox4 = document.querySelector('#count4'),
    count4 = 0;

let counting4 = setInterval(function () {
    if (count4 == 7540000) {
        clearInterval(counting4);
        return false;
    }
    count4 += 10000;
    countBox4.innerHTML = new Intl.NumberFormat().format(count4);
}, 5);

/* 창 맨 위로 올라가기 js */
const goupBtn = document.querySelector(".goupbtn")

function scrollTopBtn() {
    let scrollLength = setInterval(function () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -20);
        } else {
            clearInterval(scrollLength);
        }
    }, 10)
}

goupBtn.addEventListener('click', () => {
    scrollTopBtn()
})

/* 창 맨 아래로 내려가기 js */
const godownbtn = document.querySelector(".godownbtn");

function scrollBottomBtn() {
    let scrollInterval = setInterval(function () {
        if (window.pageYOffset < 1000) {
            window.scrollBy(0, 20);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
}

/* 숫자 올라기 */
godownbtn.addEventListener('click', () => {
    scrollBottomBtn();

    /* 숫자 up */
    /* count1 */

    let countBox = document.querySelector('#count'),
        count = 0;

    let counting = setInterval(function () {
        if (count == 50) {
            clearInterval(counting);
            return false;
        }
        count += 1;
        countBox.innerHTML = new Intl.NumberFormat().format(count);
    }, 60);

    /* count2 */

    let countBox2 = document.querySelector('#count2'),
        count2 = 0;

    let counting2 = setInterval(function () {
        if (count2 == 21000) {
            clearInterval(counting2);
            return false;
        }
        count2 += 100;
        countBox2.innerHTML = new Intl.NumberFormat().format(count2);
    }, 20);

    /* count3 */

    let countBox3 = document.querySelector('#count3'),
        count3 = 0;

    let counting3 = setInterval(function () {
        if (count3 == 2900) {
            clearInterval(counting3);
            return false;
        }
        count3 += 10;
        countBox3.innerHTML = new Intl.NumberFormat().format(count3);
    }, 15);

    /* count4 */

    let countBox4 = document.querySelector('#count4'),
        count4 = 0;

    let counting4 = setInterval(function () {
        if (count4 == 7540000) {
            clearInterval(counting4);
            return false;
        }
        count4 += 10000;
        countBox4.innerHTML = new Intl.NumberFormat().format(count4);
    }, 5);
});

// 현재 스크롤 위치 확인
const scrollPosition = window.scrollY;

console.log(`현재 스크롤 위치: ${scrollPosition} 픽셀`);