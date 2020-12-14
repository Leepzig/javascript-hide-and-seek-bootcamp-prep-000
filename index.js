
function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  var target = document.querySelector('.target')
  return target
}

function increaseRankBy(n) {
  var mainApp = document.querySelectorAll('.ranked-list li')
  console.log(mainApp)
  for (var i =0; i < mainApp.length; i++) {
    var element = mainApp[i]
    var rankedLi = parseInt(element.innerHTML) + n
    element.innerHTML = rankedLi
  }
}

function deepestChild() {
  var child = document.querySelectorAll('#grand-node')
  var lastChild = child
  while (child) {
    console.log(child)
    lastChild = child
    if (child.children[0]) {
      child = child.children[0]
    } else {
      return child
    }
  }
  return lastChild
}


// increaseRankBy(3)
