/*
    <div class="monsters">
        <div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="MD. Sakib Khan" />
          <p class="name">MD. Sakib Khan</p>
          <p class="email">programmingwithsakib@gmail.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
      </div>


*/
foundMonster()

function foundMonster() {
    const monster = document.createElement('div')
    monster.className = 'monster'

    const img = document.createElement('img')
    img.src = "https://robohash.org/10?set=set2";
    img.alt = 'Istiak Ahmed'

    const names = document.createElement('p')
    names.className = 'name';
    names.innerText = 'Istiak Ahmed'

    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = 'istiak.csinfo@gmail.com';

    monster.append(img, names, email);
    document.querySelector('.monsters').append(monster);
    // console.log(monster);

}



// not found
notMatch();

function notMatch() {
    const notmatched = document.createElement('div')
    notmatched.className = 'p-5 not-found'
    notmatched.style = "display: none"

    const span = document.createElement("span");
    span.innerText = '404';

    const h1 = document.createElement("h1")
    h1.innerText = 'No match found'

    notmatched.append(span, h1);
    document.querySelector('.monsters').append(notmatched);

    // console.log(notmatched)

}