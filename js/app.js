const iconMenu = document.querySelector('.icon-menu'),
      headerMain = document.querySelector('.header__main'),
      body = document.querySelector('body');

if(iconMenu) {
    iconMenu.addEventListener('click', () =>{
        body.classList.toggle('lock');
        headerMain.classList.toggle('show');
    })
}




const button = document.querySelectorAll('.btn-blockAnim');

// Функция для перезапуска анимации
function restartAnimation(button) {
    try{

        if(button.classList.contains('main__btn-block')){
            const smallBorder = button.querySelector('.btn-blockAnim__small');
            const topBorder = button.querySelector('.btn-blockAnim__top');
            const rightBorder = button.querySelector('.btn-blockAnim__right');
            const bottomBorder = button.querySelector('.btn-blockAnim__bottom');
            const leftBorder = button.querySelector('.btn-blockAnim__left');
            const btn = button.querySelector('button');
            smallBorder.style.background = 'white';
            topBorder.style.background = 'white';
            rightBorder.style.background = 'white';
            bottomBorder.style.background = 'white';
            leftBorder.style.background = 'white';
            btn.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
        

        const smallBorder = button.querySelector('.btn-blockAnim__small');
        const topBorder = button.querySelector('.btn-blockAnim__top');
        const rightBorder = button.querySelector('.btn-blockAnim__right');
        const bottomBorder = button.querySelector('.btn-blockAnim__bottom');
        const leftBorder = button.querySelector('.btn-blockAnim__left');
        // Сбрасываем анимацию
    topBorder.style.animation = 'none';
    rightBorder.style.animation = 'none';
    bottomBorder.style.animation = 'none';
    leftBorder.style.animation = 'none';
    smallBorder.style.animation = 'none';
    // Перезапускаем анимацию через небольшой интервал
    setTimeout(() => {
        smallBorder.style.animation = 'smallborder 0.2s linear forwards';
        topBorder.style.animation = 'topborder 0.2s linear forwards';
        topBorder.style.animationDelay = '0.2s';
        rightBorder.style.animation = 'rightborder 0.2s linear forwards';
        rightBorder.style.animationDelay = '0.4s';
        bottomBorder.style.animation = 'bottomborder 0.2s linear forwards';
        bottomBorder.style.animationDelay = '0.6s';
        leftBorder.style.animation = 'leftborder 0.2s linear forwards';
        leftBorder.style.animationDelay = '0.8s';
    }, 20); 
    

    }catch(er) {
        console.log(er)
    }
   
   
    
}


// restartAnimation();

setInterval(() =>{
    button.forEach(item =>{
        restartAnimation(item)
    })
}, 2000);

// ====================
const headerIconBtn = document.querySelector('.header__icon-btn'),
      headerMainContent = document.querySelector('.header__main'),
      headerAdressContent = document.querySelector('.header__block-adress');

const headerPhoneBtn = document.querySelector('.header__phone'),
      headerPhoneContent = document.querySelector('.header__block-phone');

// Функция для показа и скрытия 
function toggleContent(contentToToggle) {
    
    if (contentToToggle.classList.contains('active')) {
        contentToToggle.classList.remove('active', 'fade');
        headerMainContent.classList.remove('active', 'fade'); 
    } else {
        
        headerMainContent.classList.add('active', 'fade');
        headerAdressContent.classList.remove('active', 'fade');
        headerPhoneContent.classList.remove('active', 'fade');
        
        contentToToggle.classList.add('active', 'fade');
    }
}


headerIconBtn.addEventListener('click', () => {
    toggleContent(headerAdressContent);
});


headerPhoneBtn.addEventListener('click', () => {
    toggleContent(headerPhoneContent);
});



// табы
const header = document.querySelector('.main__list'),
      tab = document.querySelectorAll('.main__li'),      
      contentSel = document.querySelectorAll('.main__slide'),
      tabBtn = document.querySelectorAll('.main__btn');
let count = 0;
function hideContent() {
    contentSel.forEach(item => {
        item.classList.remove('fade');
        item.style.display = 'none';
    });
    tab.forEach(item => {
        item.classList.remove('active');
    });
}

function showContent(i = 0) {
    contentSel[i].style.display = 'block';
    contentSel[i].classList.add('fade');  
    tab[i].classList.add('active');
    
}


hideContent();
showContent(0);

header.addEventListener('click', (e) => {
    const target = e.target;
    
    tab.forEach((item, i) => {
        if (target == item) {
            count = i;
            hideContent(); 
            showContent(i); 
        }
    });
});


tabBtn.forEach(item =>{
    item.addEventListener('click', () =>{
        if(count >= 3){
            count = 0;
        }else{
            count++;
        }
        contentSel.forEach((item, i) =>{
            if(i === count){
                hideContent();
                showContent(i);
            }
        })
    })
})

// tabBtn.addEventListener('click', () =>{
//     if(count >= 3){
//         count = 0;
//     }else{
//         count++;
//     }
    
//     contentSel.forEach((item, i) =>{
//         if(i === count){
//             hideContent();
//             showContent(i);
//         }
//     })
// })


// ==========================

const btnTriggerFocus = document.querySelector('.contact__clip');
const contentTool = document.querySelector('.contact__tool');
const textarea = document.querySelector('#message');

const borderParent = document.querySelectorAll('.border-parent');
const borderChil = document.querySelectorAll('.border-chil');

// focus
function borderColor(parent) {
        parent.style.borderBottom ='1px solid rgb(34, 34, 34)';

}

// фокус по кнопке
btnTriggerFocus.addEventListener('click', () =>{
    textarea.focus();
    contentTool.classList.toggle('active');
})



// ================

const btnTrigger = document.querySelector('.triger-form');
const form = document.querySelector('.contact__form');

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const textArea = document.getElementById('message');

// фокус
[inputName, inputEmail, textArea].forEach(item => {
    item.addEventListener('focus', () => {
        const borderParent = item.closest('.border-parent');

        if (borderParent.style.borderBottom !== '1px solid red' && borderParent.style.borderBottom !== '1px solid green') {
            borderParent.style.borderBottom = '1px solid rgb(34, 34, 34)'; 
        }
    });

    item.addEventListener('blur', () => {
        const borderParent = item.closest('.border-parent');
        
        if (borderParent.style.borderBottom !== '1px solid red' && borderParent.style.borderBottom !== '1px solid green') {
            borderParent.style.borderBottom = '1px solid rgb(235, 235, 235)'; 
        }
    });
});


//  функции и переменные ошибки
const numberErorr = document.querySelector('.contact__number-error');
const emailErorr = document.querySelector('.contact__email-error');

function validateName(field, parent) {
    const done = parent.querySelector('.contact__done');
    const fals = parent.querySelector('.contact__false');

    if (/\d/.test(field.value)) {  
        parent.style.borderBottom = '1px solid red';  
        done.style.display = 'none'; 
        fals.style.display = 'block';      
        field.style.color = 'red';
        numberErorr.style.display = 'block';
        return false;
    }
    if(field.value.trim() === ''){
        parent.style.borderBottom = '1px solid red';  
        done.style.display = 'none'; 
        fals.style.display = 'block';          
        field.style.color = 'red';
        numberErorr.style.display = 'none';
        return false;
    }
        parent.style.borderBottom = '1px solid green';  
        done.style.display = 'block';
        fals.style.display = 'none';
        field.style.color = 'green';
        numberErorr.style.display = 'none';
        return true;
    
}

// Функция для проверки email
function validateEmail(field, parent) {
    const done = parent.querySelector('.contact__done');
    const fals = parent.querySelector('.contact__false');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{3,}$/;
    if(field.value.trim() === '') {
        parent.style.borderBottom = '1px solid red';  
        done.style.display = 'none';  
        fals.style.display = 'block';  
        field.style.color = 'red';
        emailErorr.style.display = 'none';
        return false;
    }
    if (phonePattern.test(field.value)) {
        parent.style.borderBottom = '1px solid green';  
        done.style.display = 'block';  
        fals.style.display = 'none';
        field.style.color = 'green';
        emailErorr.style.display = 'none';
        return true;
    }
    if (!emailPattern.test(field.value.trim())) {
        parent.style.borderBottom = '1px solid red';  
        done.style.display = 'none';  
        fals.style.display = 'block';  
        field.style.color = 'red';
        emailErorr.style.display = 'block';
        return false;
    }
    
   

        parent.style.borderBottom = '1px solid green';  
        done.style.display = 'block';
        fals.style.display = 'none';
        field.style.color = 'green';
        emailErorr.style.display = 'none';
        return true;
}


// функция валидации
function validateField(field,  parent = field.closest('.border-parent')) {
    const done = parent.querySelector('.contact__done');
    const fals = parent.querySelector('.contact__false');

    if (field.id === 'name') {
        return validateName(field, parent);
    }else if(field.id === 'email'){
        return validateEmail(field, parent)
    }else {

        if (!field.value.trim()) {        
            parent.style.borderBottom = '1px solid red';
            done.style.display = 'none';
            fals.style.display = 'block';
            return false;
        } else {
            parent.style.borderBottom = '1px solid green';
            done.style.display = 'block';
            fals.style.display = 'none';
            field.style.color = 'green';
            return true;
        }

    }
    
}

// валидация по событию
[inputName, inputEmail, textArea].forEach(field => {
    field.addEventListener('input', () =>{
        validateField(field);
    })
});

// валидация отправка формы
btnTrigger.addEventListener('click', () =>{

    const isNameValid = validateField(inputName);
    const isEmailValid = validateField(inputEmail);
    const isMessageValid = validateField(textArea);
    
    if (isNameValid && isEmailValid && isMessageValid) {
        console.log('Форма успешно отправлена!');
        complit(form)
    } else {
       
        console.log('Пожалуйста, заполните все поля.');
    }
    
  
})

// Очистить форму
function complit(parent) {
    list.length = 0;
    const done = parent.querySelectorAll('.contact__done');
    const input = parent.querySelectorAll('.border-chil');
    done.forEach(item =>{
        item.style.display = 'none';
    })

    input.forEach(item =>{
        item.value = '';
    })

    borderParent.forEach(item =>{
        item.style.borderBottom = '1px solid rgb(235, 235, 235)';
    })
    // проверка на активный тул
    if(contentTool.classList.contains('active')){
        contentTool.classList.remove('active')
    }
     // Проверка на изображение 
     const img = parent.querySelectorAll('.contact__img');
     if (img) {
        img.forEach(item => item.style.display = 'none')
         
     }
 
     // Проверка на файл
     const p = parent.querySelectorAll('.contact__p');
     if (p) {
        p.forEach(item => item.style.display = 'none')
     }
    
   
}

// инпут файл ================

const inputFile = document.querySelector('.contact__file');
const parents = document.querySelector('.contact__tool');
let list =[];
function updateFile(){
    if(this.files && this.files.length){
        const newMass = [...this.files];

        newMass.forEach(item =>{
            
            if(list.length >= 4){
                return
                
            }

            list.push(item);
            console.log(list)
            if(item.type.startsWith('image/')){                
                const img = document.createElement('img');
                img.classList.add('contact__img');
                img.src = URL.createObjectURL(item);
                parents.prepend(img);
            }else{
                const elem = item.name.split('.').pop();
                const p = document.createElement('div');
                p.classList.add('contact__p');
                p.textContent = elem;
                parents.prepend(p);
            }
        })
        
    }
   
}

inputFile.addEventListener('change', updateFile);


