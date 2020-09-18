$(document).ready(()=>{

    $("select").on('change', (event)=>{
        var lang = event.target.value

        $.ajax({
            method:"POST",
            url:"/show_lang",
            data: {lang:lang},

            success: (data) => {
                $("h1").text(data.title)
                $("p").text(data.content)
            }
        })
    })
})