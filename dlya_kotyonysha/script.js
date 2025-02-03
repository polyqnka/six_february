const messages = [
    "точно?",
    "ты уверен?",
    "почему нет?",
    "скажи да",
    "ну хотя бы подумай",
    "еслм ты скажешь нет, я очень расстроюсь",
    "......",
    "я очень очень очень расстроюсь",
    "сосал??",
    "сосал? (скажи да)"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}