/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// create card for my profile
axios.get('https://api.github.com/users/dcornelison1216')
.then(response => {
  console.log('this is what the get got ', response.data)

  const myProfileCard = userCard(response.data)
  entryPoint.appendChild(myProfileCard)
})


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ['mhidalgo83', 'Etriz', 'fadygouda', 'TheTrabin', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
// followersArray.forEach(user => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//     const userProfileCard = userCard(response.data)
//     entryPoint.appendChild(userProfileCard)
//   })
// })

// create card for each of my followers
axios.get('https://api.github.com/users/dcornelison1216/followers')
.then(response => {
  response.data.forEach(user => {
    const newUserCard = userCard(user)
    entryPoint.appendChild(newUserCard)
  })
})


// Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:
const userCard = (obj) => {

  // <div class="card">
  const card = document.createElement('div')
  card.classList.add('card')
  //   <img src={image url of user} />
  const userImage = document.createElement('img')
  userImage.src = obj.avatar_url
  card.appendChild(userImage)
  //   <div class="card-info">
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)
  //     <h3 class="name">{users name}</h3>
  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = obj.name
  cardInfo.appendChild(name)
  //     <p class="username">{users user name}</p>
  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = obj.login
  cardInfo.appendChild(userName)
  //     <p>Location: {users location}</p>
  const location = document.createElement('p')
  location.textContent = 'Location: ' + obj.location
  cardInfo.appendChild(location)
  //     <p>Profile:
  const profile = document.createElement('p')
  profile.textContent = 'Profile: '
  cardInfo.appendChild(profile)
  //       <a href={address to users github page}>{address to users github page}</a>
  const href = document.createElement('a')
  href.href = obj.html_url
  href.target = '_blank'
  href.textContent = obj.html_url
  profile.appendChild(href)
  //     </p>
  //     <p>Followers: {users followers count}</p>
  const followers = document.createElement('p')
  followers.textContent = 'Followers: ' + obj.followers
  profile.appendChild(followers)
  //     <p>Following: {users following count}</p>
  const following = document.createElement('p')
  following.textContent = 'Following: ' + obj.following
  profile.appendChild(following)
  //     <p>Bio: {users bio}</p>
  const bio = document.createElement('p')
  bio.textContent = 'Bio: ' + obj.bio
  profile.appendChild(bio)
  //   </div>
  // </div>

  return card
}

const entryPoint = document.querySelector('.cards')



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
