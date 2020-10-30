const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
   createToast();
});

const createToast = () => {
   const toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerText = 'Soy un toast';

   container.appendChild(toast);

   setTimeout(() => {
      toast.remove();
   }, 2000);
};
