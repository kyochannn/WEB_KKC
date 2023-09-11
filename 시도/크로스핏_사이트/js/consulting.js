document.addEventListener("DOMContentLoaded", function () {
    var pushButton = document.querySelector("button");
    var infopush = document.querySelector("#cb1");

    /* 성별 마우스 올렸을 때 이벤트 */
    pushButton.addEventListener("mouseover", function () {
        pushButton.style.backgroundColor = "red";
    });
    pushButton.addEventListener("mouseout", function () {
        pushButton.style.backgroundColor = "dodgerblue";
    });

    /* 정보 동의 이벤트 */
    var receipt = 0;
    infopush.addEventListener("click", function () {
        receipt = 1;
    });

    pushButton.addEventListener("click", function () {
        if (receipt === 1) {
            alert("접수가 완료되었습니다.")
            var link = './crossfit.html';
            location.href = link;
        } else {
            alert("개인정보 수집 및 이용에 동의해주세요.")
        }
    });
});