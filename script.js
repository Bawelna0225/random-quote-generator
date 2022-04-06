const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.author')
const quoteBtn = document.querySelector('.quote-btn')
const copyBtn = document.querySelector('.copy-btn')
const snackbar = document.querySelector('.snackbar')

quoteBtn.onclick = () => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(result =>{
      quoteText.innerText = result.content
      quoteAuthor.innerText = `~ ${result.author}`
  })
}

copyBtn.onclick = () => {
  
  navigator.clipboard.writeText(quoteText.innerText)
  
  snackbar.classList.add('active')
  setTimeout(() => {
    snackbar.classList.remove('active')
  }, 2000)
  
}