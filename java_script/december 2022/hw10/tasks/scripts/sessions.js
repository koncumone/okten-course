const sessions = JSON.parse(localStorage.getItem("sessions"));
const sessionsContainer = document.getElementById("sessions-container");

sessions.forEach(session => {
    const sessionDiv = document.createElement("div");

    const sessionHeading = document.createElement("h3");
    sessionHeading.innerText = `Session ${sessions.indexOf(session) + 1}`;

    const sessionPara = document.createElement("p");
    sessionPara.innerText = session;

    sessionDiv.appendChild(sessionHeading);
    sessionDiv.appendChild(sessionPara);
    
    sessionsContainer.appendChild(sessionDiv);
});
