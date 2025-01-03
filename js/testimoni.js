var NIM = "2401010593"
var urlAPI = "https://apimhstiki.ptov.my.id/"
var urlTestiRead = urlAPI+"testi-"+NIM+"/read"

$(function(){

    $.ajax({
        url: urlTestiRead,
        method: "GET",
        dataType: "json",
        success:function(dta){
            let tbl = ""
            let ipx = ""
            if(dta && dta.error==4){
                 dta.TESTI.forEach(function(isi){
                    tbl += `<tr>
                    <td><img src="${isi.GRAVATAR}" width="75">${isi.NAMA}</td>
                    <td>${isi.EMAIL}</td>
                    <td>${isi.TESTI}</td>
                    <td>${ipx}</td>
                  </tr>`
                })
            }
            $("tbody").html(tbl)

        },
        error:function(){
            console.log("Gagal Membaca data testimoni")
        }
    })
})