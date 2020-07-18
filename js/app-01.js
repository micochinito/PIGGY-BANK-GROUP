var membershipHTML = `
  <h2>Financial Inclusion</h2>
  <p>
    We own the most long-lived (reward-based) crowdfunding platform in the mexican market, used to support projects from unbanked students to develop a network of young entrepreneurs and also for being a point of encounter between artistical,  civil, academic or tech communities and their priorities supported through donations. Our goal is to get the most prolific crowdfunding for development program in the Americas by launching at least 1,000 campaigns where local artists, entrepreneurs, makers and their communities will get to fund their ideas for an amount of at least 1M USD.  

  </p>
  <p>
   We also have worked with Credit Unions and any kind of financial institutions to develop financial education programs, products and innovation services. We are looking for the perfect match for launching a Neo-Bank for unserved communities around the world. 
  </p>
`

var programsHTML = `
  <h2>Innovation Challenges</h2>
  <p>With our methodology we deliver an immersive entrepreneurship program that allow public universities (in most of the cases) students to present their solutions to social or environmental issues directly with high level executives from private sector along the contest and during a final event. 
 </p>
 <p>
We work closely with universities to create communication strategies between local governments, corporates and academy to promote young entrepreneurship initiatives aligned with sponsors objectives. We are looking to involve at least 20,000 young entrepreneurs and first-time workers in our opportunity creation programs. 

</p>

`

var screeningsHTML = `
  <h2>The Alliance!</h2>


  <p>
 We have local panas (yes, panas) in El Salvador, Ecuador, Guatemala and Mexico representing the alliance and working near with local entrepreneurship ecosystem, attracting endeavors that need financial alternatives or visibility for getting the next stage of their evolution. Our main goal is to integrate at least 6 countries to the Alliance in the next 2 years. Each of them will be integrated by a Local Partner and an Advisory Board with local companies, universities and other relevant entities. .
  </p>
`

var pressHTML = `
  <h2>Press Info</h2>
  <hr/>
  <h4>Current Press Release</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Release Archive</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Kit/Logos</h4>
  <p>View and download press materials</p>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Register for Press Information</h4>
  <p><a href="#">Click to download and fill out form</a></p>
  <hr/>
`


/* 01 - UI TABS :: Your code below.... */
var contentBoxEl = document.querySelector('.ui-tabs__content')
var listEl = document.querySelectorAll('.ui-tabs__tabslist')
var membershipBox = document.querySelector("li[data-tab='membership']")
var programsBox = document.querySelector("li[data-tab='programs']")
var screeningsBox = document.querySelector("li[data-tab='screenings']")
var pressBox = document.querySelector("li[data-tab='press']")

function toggleSelectedClass(e){
  var allTheBoxesEl = [...document.querySelectorAll('.ui-tabs__tab')]
  var selectedContentHtml = e.target.innerHTML.toLowerCase()
  var selectedBoxEl = document.querySelector(`li[data-tab=${selectedContentHtml}]`)

  allTheBoxesEl.forEach(function removeClass(i){
    i.classList.remove('ui-tabs__tab--selected')
  })

  selectedBoxEl.classList.add('ui-tabs__tab--selected')
}

membershipBox
.addEventListener('click', function showNewContent(e){
  contentBoxEl.innerHTML = membershipHTML
  toggleSelectedClass(e)
})

programsBox
.addEventListener('click', function showNewContent(e){
  contentBoxEl.innerHTML = programsHTML
  toggleSelectedClass(e)
})

screeningsBox
.addEventListener('click', function showNewContent(e){
  contentBoxEl.innerHTML = screeningsHTML
  toggleSelectedClass(e)
})

pressBox
.addEventListener('click', function showNewContent(e){
  contentBoxEl.innerHTML = pressHTML
  toggleSelectedClass(e)
})

// _____________________________________________________________


