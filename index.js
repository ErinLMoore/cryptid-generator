var randomChoice = arr => {
  return arr[Math.floor(arr.length * Math.random())]
}

var emojis = "🐶 🐱 🐭 🐰 🦊 🐻 🐮🐊🦌".split(" ")

var cryptidAmount = document.getElementById("cryptidslider").value
console.log("💀 now YOU have.... the skeleton curse 💀")
document.getElementById("title").textContent += " " + randomChoice(emojis)
document.getElementById("cryptid_text").value = ""

var creep = (cryptidAmount) => {
  fetchCategories().then(([category1]) => {
    console.log(category1)
    var pages = category1.query.categorymembers;
    var titles = pages.map((page) => page.title);

    var cryptid_text = Array.from(Array(parseInt(cryptidAmount)).keys())
      .map(x => randomChoice(titles))
    .join(", ")

    var result = cryptid_text
    document.getElementById("cryptid_text").value = result

  }).catch(error => {
    document.getElementById("cryptid_text").value = error
  })
}

document.getElementById("boring_text").onclick = () => {
  creep(cryptidAmount)
}

document.getElementById("copy_text").onclick = () => {
  var copyText = document.getElementById("cryptid_text")
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy")
}

var slider = document.getElementById("cryptidslider")
slider.oninput = function() {
  cryptidAmount = this.value
  document.getElementById("cryptid_text").value = ""
  creep(cryptidAmount)
}

async function fetchCategories() {
  var url = "https://en.wikipedia.org/w/api.php";


  var params = {
    action: "query",
    list: "categorymembers",
    cmlimit: "20",
    cmtitle: "Category:Domesticated animals",
    // cmtitle: "Category:" + title,
    format: "json"
  };
  url = url + "?origin=*";

  Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

  const [category1Response] = await Promise.all([
    fetch(url)
  ]);

  const category1 = await category1Response.json();

  return [category1];
}

var titles = ["Mammals of the United States",
  "Domesticated animals",
  "Fauna of the Great Plains",
  "Endemic rodents of the United States",
  "Native birds of the Eastern United States",
  "Cosmopolitan birds",
  "Cosmopolitan mammals",
  "Fauna of the Plains-Midwest (United States)"]
