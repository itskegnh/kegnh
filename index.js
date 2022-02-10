var url = window.location.search

function get_random() {
    return Math.random().toString(32).substring(2, 7);
}

if (url.indexOf('?') != -1) {
    window.location.href = url.replace("?", "");
} else {

}

function send_request(url) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + get_random(),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
    })}