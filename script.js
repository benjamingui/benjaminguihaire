
function myFunction1() {
    document.getElementById("vid").style.display = "block";
    document.getElementById("photo").style.display = "none";
}

function myFunction2() {
    document.getElementById("vid").style.display = "none";
    document.getElementById("photo").style.display = "block";
}

const counter = document.getElementById('counter');
console.log(counter);

    const updateCounter = async () => {
      const data = await fetch('https://api.countapi.xyz/hit/benjamin29478s/visit')
      const count = await data.json()
      counter.innerHTML = count.value
    }

updateCounter();