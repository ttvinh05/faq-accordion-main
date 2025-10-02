const li = document.querySelectorAll('li')
const plus = document.querySelectorAll('.icon__plus')
const minus = document.querySelectorAll('.icon__minus')
const answer = document.querySelectorAll('.faq__answer')

li.forEach(function(current, index) {
    let plusCurrent = plus[index]
    let minusCurrent = minus[index]
    let answerCurrent = answer[index]
    current.addEventListener('click', function(e) {
        plusCurrent.classList.toggle('hidden')
        minusCurrent.classList.toggle('hidden')
        answerCurrent.classList.toggle('hidden')
    })
})

