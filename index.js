var randomChoice = arr => {
  return arr[Math.floor(arr.length * Math.random())]
}

var emojis = ["👿"]

var hauntAmount = document.getElementById("hauntslider").value
console.log("💀 now YOU have.... the skeleton curse 💀")
document.getElementById("title").textContent += " " + randomChoice(emojis)

var spookify = (hauntAmount) => {
    var spooky_text = findHaunt(hauntAmount)
    var result = spooky_text
    document.getElementById("spooky_text").value = result
}

var findHaunt = hauntAmount => {
  var add =  buildEmojis(hauntAmount)
  return add
}

var buildEmojis = hauntAmount => {
  return Array.from(Array(Math.ceil(hauntAmount * Math.random())).keys())
    .map(x => randomChoice(emojis))
    .join(", ")
}

document.getElementById("boring_text").onclick = () => {
  spookify(hauntAmount)
}

document.getElementById("copy_text").onclick = () => {
  var copyText = document.getElementById("spooky_text")
  copyText.select()
  copyText.setSelectionRange(0, 99999)

  document.execCommand("copy")
}

var slider = document.getElementById("hauntslider")
slider.oninput = function() {
  hauntAmount = this.value
  document.getElementById("spooky_text").value = ""
  spookify(hauntAmount )
}
