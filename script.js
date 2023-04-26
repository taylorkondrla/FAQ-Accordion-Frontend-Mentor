const questionSections = document.querySelectorAll('.question');

questionSections.forEach(section => {
  const question = section.querySelector('.question-text');
  const answer = section.querySelector('.answer');

  question.addEventListener('click', () => {
    answer.classList.toggle('hidden');
    const arrow = section.querySelector('.arrow');
    arrow.classList.toggle('rotate');
  });
});
