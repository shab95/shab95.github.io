const TabLinks = document.getElementsByClassName('tab-links')
const TabContents = document.getElementsByClassName('tab-contents')

const skillsTab = document.getElementsByName('skills')[0]
const skillsP = document.getElementById('skills')
const eduTab = document.getElementsByName('education')[0]
const eduP = document.getElementById('education')

skillsTab.addEventListener('click', () => {
  skillsTab.className = 'tab-links active-link'
  eduTab.className = 'tab-links'
  skillsP.className = 'tab-contents active-tab'
  eduP.className = 'tab-contents'
})

eduTab.addEventListener('click', () => {
  skillsTab.className = 'tab-links'
  eduTab.className = 'tab-links active-link'
  skillsP.className = 'tab-contents'
  eduP.className = 'tab-contents active-tab'
})

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
