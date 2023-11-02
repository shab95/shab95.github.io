const TabLinks = document.getElementsByClassName('tab-links')
const TabContents = document.getElementsByClassName('tab-contents')

function openAboutTabs (tab) { // eslint-disable-line no-unused-vars
  for (let i = 0; i < TabLinks.length; i += 1) {
    const element = TabLinks[i]
    element.className = element.id === tab ? 'tab-links active-link' : 'tab-links'
  }
  event.currentTarget.classList.add('active-link') // eslint-disable-line no-restricted-globals

  for (let i = 0; i < TabContents.length; i += 1) {
    const element = TabContents[i]
    element.className = element.id === tab ? 'tab-contents active-tab' : 'tab-contents'
  }
}

async function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)) // eslint-disable-line no-promise-executor-return
}

const form = document.forms['submit-form']
const statusMsg = document.getElementById('status')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  statusMsg.innerHTML = 'Thanks for your message'
  await sleep(2500)
  statusMsg.innerHTML = ''
})
