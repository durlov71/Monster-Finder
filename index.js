import { monsters } from './monsters.js'
// console.log(monsters)
for (let mnstr of monsters) {
    foundMonster(mnstr)
}


function foundMonster(mnstr) {
    const monster = document.createElement('div')
    monster.className = 'monster'

    const img = document.createElement('img')
    img.src = `https://robohash.org/${mnstr.id}?set=set2`;
    img.alt = mnstr.name

    const names = document.createElement('p')
    names.className = 'name';
    names.innerText = mnstr.name

    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = mnstr.email;

    monster.append(img, names, email);
    document.querySelector('.monsters').append(monster);
    // console.log(monster);

}



// not found
notMatch();

function notMatch() {
    const notmatched = document.createElement('div')
    notmatched.className = 'p-5 not-found'
    notmatched.id = 'not-found'
    notmatched.style = "display: none"

    const span = document.createElement("span");
    span.innerText = '404';

    const h1 = document.createElement("h1")
    h1.innerText = 'No match found'

    notmatched.append(span, h1);
    document.querySelector('.monsters').append(notmatched);

    // console.log(notmatched)

}


//>>>>>>>>>>>>>>>>>>>>>>>>>>Filtering

document.querySelector('.search__field')
    .addEventListener('keyup', function(e) {
        const keyword = e.target.value.toLowerCase();
        // console.log(e);
        console.log(keyword);
        let notfound = true;
        const mnstr = document.querySelectorAll('.monster');
        for (let monster of mnstr) {
            const name = monster.children[1].innerText.toLowerCase();
            const email = monster.children[2].innerText.toLowerCase();

            if (name.includes(keyword) || email.includes(keyword)) {
                // console.log('done');
                monster.style.display = 'block';
                notfound = false;
            } else {
                monster.style.display = 'none';
            }
        }
        if (notfound) {
            document.querySelector('#not-found').style.display = 'block'
        } else {
            document.querySelector('#not-found').style.display = 'none'
        }

    })


// deactive search refresh
document.querySelector('#search-monster-form').addEventListener('submit', (e) => {
    e.preventDefault();
})