// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js


// Data/service-laag
const TeamService = (function () {
    let teams = [];

    function addTeam(naam, score) {
        const team = {
            id: Date.now(),
            naam,
            score,
            done: false
        };
        teams.push(team);
    }

    function getTeams() {
        return [...teams];
    }

    return {
        addTeam,
        getTeams
    };


})();



// UI-laag
const TeamUI = (function () {
    function renderList(teams) {
        const list = document.querySelector("#totals_list");
        list.innerHTML = teams
            .map(team => `<li class="list-group-item">
${team.naam}
${team.score}
</li>`)
            .join("");
    }

    function getInputValue() {
        const input = document.querySelector("#team_name");
        return input.value.trim();
    }

    function clearInput() {
        const input = document.querySelector("#team_name");
        input.value = "";
    }

    function getInputValue1() {
        const input1 = document.querySelector("#team_value");
        return input1.value.trim();
    }

    function clearInput1() {
        const input1 = document.querySelector("#team_value");
        input1.value = "";
    }

    function showError(message) {
        alert(message);
    }

    return {
        renderList,
        getInputValue,
        clearInput,
        showError,
        getInputValue1,
        clearInput1,
    };
})();

// App-laag
const TeamApp = (function () {
    function init() {
        const btn = document.querySelector("#btn_send");
        btn.addEventListener("click", handleAddTeam);
    }

    function handleAddTeam() {
        const value = TeamUI.getInputValue();
        const score = TeamUI.getInputValue1();

        if (!value || !score) {
            TeamUI.showError("Vul teamnaam en aantal punten");
            return;
        }

        TeamService.addTeam(value);
        const teams = TeamService.getTeams();
        TeamUI.renderList(teams);
        TeamUI.clearInput();
        TeamUI.clearInput1();
    }

    return {
        init
    };
})();

TeamApp.init();
