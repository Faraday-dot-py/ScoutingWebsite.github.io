document.getElementById('settings.txt')
            .addEventListener('change', function() {
              
            var fr=new FileReader();

            fr.onload=function(){
                document.getElementById('output')
                        .textContent=fr.result;
            }
              
            fr.readAsText(this.files[0]);
        }
        )

let filePath = "C:\\Users\\adame\\Github_Repositories\\ScoutingWebsite.github.io\\settings.txt"

function readSettings(){
    var fr = new FileReader();

    fr.readAsText(filePath);

    console.log(fr.result);
    
}