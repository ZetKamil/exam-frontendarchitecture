// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const MeldingenInstellingen = (function () {
    let instance = null;
    function createInstance() {
        return {
            email: true,
            popup: false,
            interval: 15
        };
    }
    return {
        getInstance() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();
// ui
const checkEmail = document.getElementById("notify_email");
const chkecPopup = document.getElementById("notify_popup");
const inpInterval = document.getElementById("notify_interval");
const outNotify = document.getElementById("notify_output");

// opslaan van informatie
document.getElementById("btn_notify_save").addEventListener("click", () => {
    const settings = MeldingenInstellingen.getInstance();
    settings.email = checkEmail.checked;
    settings.popup = chkecPopup.checked;
    settings.interval = Number(inpInterval.value);
    outNotify.textContent = "Instellingen geslaan.";
});

document.getElementById("btn_notify_show").addEventListener("click", () => {
    const s = MeldingenInstellingen.getInstance();
    outNotify.textContent =
        `E-mail: ${s.email ? "aan" : "uit"}, ` +
        `Pop-ups: ${s.popup ? "aan" : "uit"}, ` +
        `Interval: ${s.interval} minuten.`;
});