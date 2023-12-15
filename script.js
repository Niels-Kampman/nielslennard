document.addEventListener('DOMContentLoaded', async () => {
  try {
    document.body.insertAdjacentHTML('afterbegin', await (await fetch('navbar/navbar.html')).text());
    document.body.insertAdjacentHTML('afterend', await (await fetch('footer/footer.html')).text());
  } catch (error) {
    console.error('Error fetching content:', error);
  }
});
