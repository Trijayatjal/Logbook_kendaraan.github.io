const scriptURL = 'https://script.google.com/macros/s/AKfycby9dtFD98Bfi4OrLJ2pyPRLqh5qryJpLkjpmfusyhBTvGoFOC4Pv_uxEKStDJ8bhN_62A/exec'
const form = document.forms['logbook-form']

          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank You! Your Form Is Submitted!"))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
          })

