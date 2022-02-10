var url = window.location.search
if (url.indexOf('?') != -1) {
    window.location.href = url.replace("?", "");
}

function get_random() {
    return Math.random().toString(32).substring(2, 7);
}
