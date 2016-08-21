//random grab-bag of utility functions
//in a bigger project these should be appropriately organized

export function ajax(method, url, success, params = null){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            success(xhttp.response);
        }
    };
    xhttp.open(method, url, true)

    if(method != 'GET'){
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    }
    xhttp.send(params)
}

export function toQueryString(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return '?' + str.join("&");
}

export function bindClassHandlers(handlers, context){
    handlers.forEach(handler => {
        context[handler] = context[handler].bind(context)
    })
}
