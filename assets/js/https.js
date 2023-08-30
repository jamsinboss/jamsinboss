if (location.hostname != "127.0.0.1") {
    if (window.location.protocol != "https:") {
        window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }

    if (document.location.protocol == 'http:') {
        document.location.href = document.location.href.replace('http:', 'https:');
    }
    
}
