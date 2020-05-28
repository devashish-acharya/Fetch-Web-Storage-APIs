fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: 'fiddle'})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: 'fiddle'})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => console.log(data))

if (localStorage.getItem('test') == "key") {
  console.log("It's there!")
} else {
  localStorage.setItem('test', 'key')
}

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addElement(data))

function addElement(list) {
    list.forEach( function (element) {
        let newLi = document.createElement("li");
        let newContent = document.createTextNode(element);
        newLi.appendChild(newContent);
        let currentUl = document.getElementById("list")
        document.body.insertBefore(newLi,currentUl);

    })
}

function pressingIt(ranMessage){
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
    method: 'POST',
    body: JSON.stringify({message: ranMessage.value})
    }).then(function (response) {
    if (response.status == 200) {
        console.log("Ok!")
    } else {console.log("Oh no!")}
    })

}