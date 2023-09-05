const seacrhButton = document.getElementById('search')
const search = document.getElementById('search-cont')
const searchBar = document.getElementById('search-bar')




function find() {
    var input, filter, ul, li, i;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("section");
    li = ul.getElementsByClassName("location1");
    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByClassName("location")[0];
        let txtValue = a.innerHTML || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    let a = li.getElementsByClassName("location");
    console.log(a)

}


seacrhButton.addEventListener('click', () => {
    search.classList.toggle('active')
    seacrhButton.classList.toggle('search-mode')

    if (search.style.opacity === '1') {
        searchBar.focus()
    }

    find()
    console.log('search')
}) 