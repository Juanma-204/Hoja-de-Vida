const viewMoreBtn = document.getElementById('viewMoreBtn');
const backBtn = document.getElementById('backBtn');
const cardContent = document.querySelector('.card-content');
const resume = document.querySelector('.resume');

viewMoreBtn.addEventListener('click', () => {
    cardContent.style.display = 'none';
    resume.style.display = 'block';
});

backBtn.addEventListener('click', () => {
    resume.style.display = 'none';
    cardContent.style.display = 'flex';
});
