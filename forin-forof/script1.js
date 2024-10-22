// prevent default -- prevents page from refreshing but submits data

let userform = document.querySelector('form').addEventListener('submit', (e) => {
  console.log('submitted')
  e.preventDefault()
})

