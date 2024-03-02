function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } 
}
    //Toda a função acima pode ser substituida pela função, ja criada anteriormente: html.classList.toggle("light")//
