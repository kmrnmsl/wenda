function ajax(options){
    var xhr = new XMLHttpRequest
    xhr.open(options.method,options.url)
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    for (var k in options.headers){
        xhr.setRequestHeader(k,options.headers[k])
    }
    // var dataStr = ''
    // var dataArr = []
    // for ()
    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.status==200&xhr.readyState==4){
            options.callback(xhr.response)
        }
    }
}
