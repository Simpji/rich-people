
// const btn = document.querySelector('.btn');
// const textInput = document.querySelector('.text');
// const msg = document.querySelector('.msg');
// const show = document.querySelector('.show')


// btn.addEventListener('click', submit);

// function submit(e){
//     if(textInput.value === ''){
//         msg.textContent = 'please enter name'
//         msg.classList.add('error')

//         setTimeout(()=>{
//             msg.classList.remove("error")
//             msg.textContent=''
//         }, 2000);

//     }
    const richestPeople = [
        {   
            name: 'Elon Musk',
            age: 40,
            state: 'United state of American',
            company: 'Tesla, SpaceX',
            netWorth: '$221.4 billion'
        },
        {   
            name: 'Jeff Bezos',
            age: 45,
            state: 'United state of American',
            company: 'CEO of Amazon',
            netWorth: '216.5 billion USD'
        },
        {
            name: 'Bernard Arnault',
            age: 55,
            state: 'France',
            company: 'LVMH',
            netWorth: '$191.1'
        },
        {
            name: 'Mark Zuckerberg',
            age: 39,
            state: 'United States',
            company: 'Facebook',
            netWorth: '$185.4'
        },
        {
            name: 'Larry Ellison',
            age: 40,
            state: 'United States',
            company: 'Oracle',
            netWorth: '$179.6'
        }
          
    ]

    function showPersonInfo() {
        const inputName = document.getElementById('nameInput').value.trim();
        const personInfoDv = document.getElementById('personInfo');
        personInfoDv.innerHTML = '';

        if (inputName === '') {
            personInfoDv.innerText = 'Please enter a name'
            return;
            setTimeout(()=>{
                personInfoDv.innerText.remove('Please enter a name')
                personInfoDv.textContent = ''
            }, 2000)
        }

        let found = false;
        richestPeople.forEach(person => {
            if (person.name.toLowerCase() === inputName.toLowerCase()) {
                personInfoDv.innerHTML = `
                <h3>${person.name}</h3>
                <p><strong>Age:</strong> ${person.age}</p>
                <p><strong>State:</strong> ${person.state}</p>
                <p><strong>Company:</strong> ${person.company}</p>
                <p><strong>NetWorth:</strong> ${person.netWorth}</p>
                `;
                found = true;
            }
        });
        if (!found) {
           personInfoDv.innerText = 'person not found' 
        }
    }

 