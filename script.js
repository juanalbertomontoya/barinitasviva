
document.getElementById('scanBtn').addEventListener('click', function () {
    let html5QrCode = new Html5Qrcode("reader");
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {        
        // Insertar el valor escaneado en el input de DNI
        document.getElementById('dni').value = decodedText;
        
        // Esperar brevemente antes de enviar el formulario para asegurarse de que el valor se ha insertado
        setTimeout(function() {
            // Enviar el formulario automáticamente
            document.getElementById('dniForm').submit();
        }, 100); // 100ms de retraso
    };

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
    .catch(err => {
        console.log("Error al iniciar el escaneo:", err);
    });
});

// Script para la funcionalidad del popup y cookies

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

document.getElementById('accessBtn').addEventListener('click', function () {
    const password = document.getElementById('passwordInput').value;
    if (password === "8141663.23038607") {
        setCookie("trustedDevice", "true", 365);
        document.getElementById('passwordPopup').style.display = 'none';
    } else {
        alert("Contraseña incorrecta. Intente de nuevo.");
    }
});

window.onload = function() {
    if (getCookie("trustedDevice") === "true") {
        document.getElementById('passwordPopup').style.display = 'none';
    } else {
        document.getElementById('passwordPopup').style.display = 'flex';
    }
};


