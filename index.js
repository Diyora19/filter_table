let input = document.getElementById('search'); // input element 
let tr = document.querySelectorAll('tbody tr'); // tbody ichidagi tr elementlar

input.addEventListener('keyup', () => { // keyup bo'lganda funksiya bajarilyapdi
    let values = input.value.toLowerCase(); // input ga kiritilgan qiymatni olib uni kichik harflarga o`tqazyapmiz

    for (let i = 0; i < tr.length; i++) { // loop

        let td = tr[i].querySelectorAll('td')[0]; // har bir tr ichidan td ni faqat birinchi ustunni olyapmiz

        tdValue = td.innerHTML.toLowerCase(); // td ni qiymatini kichik harflarga o'tqazyapmiz

        if (tdValue.includes(values)) { // td dagi qiymat ichidan inputdagi qiymatni izlaydi; true or false qaytaradi 
            tr[i].style.display = "" // shart bajarilsa tr ni displayi o'zgarmaydi
        } else {
            tr[i].style.display = 'none' // aks holda display none bo'ladi
        }
        
    }
})
