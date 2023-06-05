    let stuff = [];
     const poppup = e => {
        e.preventDefault();
        let thing = {
            Name: document.getElementById('name').value,
            Email: document.getElementById('email').value,
            DOB: document.getElementById('dob').value,
            About: document.getElementById('about').value,
            Achievements: document.getElementById('achievements').value,
            grade: document.getElementById('grade').value,
            Section: document.getElementById('section').value,
            Notifications: document.getElementsByName('notification').value

        };
        stuff.push(thing);
        document.forms[0].reset();

        alert(JSON.stringify(stuff));
    };

    document.addEventListener('DOMContentLoaded', () =>{
        document.getElementById('btn').addEventListener('click', poppup)
    })