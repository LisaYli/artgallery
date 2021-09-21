const resultList = document.getElementById('art')
new URLSearchParams(window.location.search).forEach((value,
                                                     name) => {
    resultList.append(`${name}: ${value}`)
    resultList.append(document.createElement('br'))

})

