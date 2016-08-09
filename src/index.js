var wombleList = require('./templates/womble-list.hbs')
var headerTemplate = require('./templates/header.hbs')
var footerTemplate = require('./templates/footer.hbs')
var links = require('./templates/sidebar.hbs')

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  div.innerHTML = headerTemplate()
  document.body.appendChild(div)
})

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  var data = {
    wombles: [
      { name: 'Orinocc', email: 'orinocco@wimbledoncommon.net' },
      { name: 'Toms', email: 'tomsk@wimbledoncommon.net' },
      { name: 'Bung', email: 'bungo@wimbledoncommon.net' }
    ]
  }
  div.innerHTML = wombleList(data)
  document.body.appendChild(div)
})

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  var data = {
    links: [
      {name: 'Link 1', path: './templates/footer.hbs'},
      {name: 'Link 2', path: './templates/footer.hbs'},
      {name: 'Link 3', path: './templates/footer.hbs'}
    ]
  }
  div.innerHTML = links(data)
  document.body.appendChild(div)
})

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  div.innerHTML = footerTemplate()
  document.body.appendChild(div)
})
