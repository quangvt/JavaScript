// Notification API
// 1
//Notification.requestPermission().then(function(result) {
//    alert(result);
//})

// 2
//Notification.requestPermission();

//new Notification("Subscribe to JS Nuggets!");

// 3
function notifyMe() {
    if(!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        notify();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            if(permission === 'granted') {
                notify();
            }
        });
    }
    
    function notify() {
        var notification = new Notification('TITLE OF NOTIFICATION', {
            icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
            body: "Hey! You are on notice!",
        });
        
        notification.onclick = function() {
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification), 3000);
    }
}

notifyMe();