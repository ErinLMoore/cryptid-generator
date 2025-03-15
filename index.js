var randomChoice = arr => {
  return arr[Math.floor(arr.length * Math.random())]
}

var emojis = "🐶 🐱 🐭 🐰 🦊 🐻 🐮🐊🦌".split(" ")

var cryptidAmount = document.getElementById("cryptidslider").value
console.log("💀 now YOU have.... the skeleton curse 💀")
document.getElementById("title").textContent += " " + randomChoice(emojis)
document.getElementById("cryptid_text").value = ""

var creep = (cryptidAmount) => {
  fetchCategories().then((responses) => {
    let titles = responses.map((response) => {
      var pages = response.query.categorymembers
      return pages.map((page) => page.title);
    }).flat()

    var cryptid_text = Array.from(Array(parseInt(cryptidAmount)).keys())
      .map(x => randomChoice(titles))
    .join(", ")

    var result = cryptid_text
    document.getElementById("cryptid_text").value = result

  })
    .catch(error => {
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
    format: "json"
  };
  url = url + "?origin=*";

  let url0 = url.slice()
  params.cmtitle = "Category:" + titles[0]
  Object.keys(params).forEach(function (key) { url0 += "&" + key + "=" + params[key]; });

  let url1 = url.slice()
  params.cmtitle = "Category:" + titles[1]
  Object.keys(params).forEach(function (key) { url1 += "&" + key + "=" + params[key]; });

  let url2 = url.slice()
  params.cmtitle = "Category:" + titles[2]
  Object.keys(params).forEach(function (key) { url2 += "&" + key + "=" + params[key]; });

  let url3 = url.slice()
  params.cmtitle = "Category:" + titles[3]
  Object.keys(params).forEach(function (key) { url3 += "&" + key + "=" + params[key]; });

  let url4 = url.slice()
  params.cmtitle = "Category:" + titles[4]
  Object.keys(params).forEach(function (key) { url4 += "&" + key + "=" + params[key]; });

  let url5 = url.slice()
  params.cmtitle = "Category:" + titles[5]
  Object.keys(params).forEach(function (key) { url5 += "&" + key + "=" + params[key]; });

  let url6 = url.slice()
  params.cmtitle = "Category:" + titles[6]
  Object.keys(params).forEach(function (key) { url6 += "&" + key + "=" + params[key]; });

  let url7 = url.slice()
  params.cmtitle = "Category:" + titles[7]
  Object.keys(params).forEach(function (key) { url7 += "&" + key + "=" + params[key]; });

  const [
    category0Response,
    category1Response,
    category2Response,
    category3Response,
    category4Response,
    category5Response,
    category6Response,
    category7Response
  ] = await Promise.all([
    fetch(url0),
    fetch(url1),
    fetch(url2),
    fetch(url3),
    fetch(url4),
    fetch(url5),
    fetch(url6),
    fetch(url7)
  ]);

  return [
    await category0Response.json(),
    await category1Response.json(),
    await category2Response.json(),
    await category3Response.json(),
    await category4Response.json(),
    await category5Response.json(),
    await category6Response.json(),
    await category7Response.json()
  ];
}

function get_url(title) {


}

var titles = [
  "Mammals of the United States",
  "Domesticated animals",
  "Fauna of the Great Plains",
  "Endemic rodents of the United States",
  "Native birds of the Eastern United States",
  "Cosmopolitan birds",
  "Cosmopolitan mammals",
  "Fauna of the Plains-Midwest (United States)"
]
