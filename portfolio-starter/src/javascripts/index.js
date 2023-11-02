const TabLinks = document.getElementsByClassName('tab-links');
const TabContents = document.getElementsByClassName('tab-contents');

function openAboutTabs(tab) { // eslint-disable-line no-unused-vars
  for (let i = 0; i < TabLinks.length; i += 1) {
    const element = TabLinks[i];
    element.className = element.id === tab ? 'tab-links active-link' : 'tab-links';
  }
  event.currentTarget.classList.add('active-link'); // eslint-disable-line no-restricted-globals

  for (let i = 0; i < TabContents.length; i += 1) {
    const element = TabContents[i];
    element.className = element.id === tab ? 'tab-contents active-tab' : 'tab-contents';
  }
}
