const Name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const link = document.querySelector('#web');
const rd = document.getElementsByName('SEX')
const skill = document.querySelector('#skill');
const btn1 = document.querySelector('.btn-sub');
const btn2 = document.querySelector('.btn-del');
const disPart = document.querySelector('.seperate');

// Displays student detail on the same web page when the enroll button clicked.
btn1.addEventListener('click', function () {
    const data = document.createElement('div');
    const header = document.createElement('h3');
    header.innerText = 'Description';
    data.appendChild(header);
    data.classList.add('data-container');
    disPart.append(data);

    const name = document.createElement('p');
    data.appendChild(name);
    name.append(Name.value);

    const email = document.createElement('p');
    data.appendChild(email);
    email.append(mail.value);

    const skills = document.createElement('p');
    data.appendChild(skills);
    skills.append(skill.value);

    const webLink = document.createElement('p');
    data.appendChild(webLink);
    webLink.append(link.value);

    const gender = document.createElement('p');
    data.append(gender);
    gender.innerHTML = 'Male';


    preventDefault();


});

// Removes the student details when clear button clicked.
btn2.addEventListener('click', function () {
    data.innerHTML.remove();
})

