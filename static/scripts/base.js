const accountPages = document.getElementById('allauth-pages');
console.log (accountPages);

const accountButtons = accountPages.querySelectorAll("button");
console.log(accountButtons);

for (let button of accountButtons) {
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.classList.add('w-25');
}