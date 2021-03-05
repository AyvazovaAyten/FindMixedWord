const myarr = ['Argentina', 'Kamboca', 'Yaponiya', 'Amerika', 'Çin', 'Madaqaskar', 'Qatar'];
let mixedarr = [];
function mixWord(word) {
    let newword = "";
    let randoms = "";
    while (randoms.length !== word.length) {
        let random = Math.floor(Math.random() * word.length);
        if (randoms.indexOf(random) === -1) {
            randoms += random;
        }
    }
    for (let i = 0; i < word.length; i++) {
        newword += word[randoms[i]];
    }
    return newword;
}
for (let i = 0; i < myarr.length; i++) {
    mixedarr.push(mixWord(myarr[i]));
}
let count = 0;
let index = 0;
document.getElementById('mixedword').innerText = mixedarr[index];
document.getElementById('button').addEventListener('click', function () {
    let inputword = document.getElementById('word').value;
    
    if (index < myarr.length) {
        if(inputword){
            if (inputword.toLowerCase() === myarr[index].toLowerCase()) {
                count++;
                alert('Düzdür.');
            } else { alert('Səhvdir.'); }
            document.getElementById('word').value="";
            index++;
            if (index !== myarr.length) {
                document.getElementById('mixedword').innerText = mixedarr[index];
            } else alert('Oyun bitdi. Sizin nəticəniz: ' + count + '/' + myarr.length);
        }else alert('Sözü daxil edin.')
        
    } else alert('Yenidən oynamaq üçün səhifəni yeniləyin.');
})


