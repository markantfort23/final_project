function openPopup(app) {
    const popupText = document.getElementById('popupText');
    if (app === 'app1') {
        popupText.innerHTML = `
            <h2>Facebook</h2>
            <p>Facebook's extensive user base and influence raise critical concerns. It has faced backlash for its handling of user data, leading to privacy breaches and questions about data ethics. Moreover, Facebook's ad targeting practices and algorithmic biases have been scrutinized for perpetuating discrimination and amplifying divisive content, impacting vulnerable communities disproportionately.</p>
        `;
    } else if (app === 'app2') {
        popupText.innerHTML = `
            <h2>Twitter</h2>
            <p>Twitter's platform dynamics have significant political implications. The platform's handling of hate speech, harassment, and misinformation has been under scrutiny for its impact on public discourse and societal cohesion. Moreover, Twitter's content moderation policies and algorithmic curation can amplify voices of privilege while marginalizing minority perspectives, contributing to power imbalances and reinforcing existing societal inequalities.</p>
        `;
    } else if (app === 'app3') {
        popupText.innerHTML = `
            <h2>WhatsApp</h2>
            <p>WhatsApp's role in communication and information dissemination is not without political ramifications. The platform's end-to-end encryption has raised concerns about its use in spreading misinformation and enabling secretive networks that can perpetuate harmful ideologies.</p>
        `;
    } else if (app === 'app4') {
        popupText.innerHTML = `
            <h2>Amazon</h2>
            <p>Amazon's vast reach and market power have significant implications. It has been criticized for its labor practices, including poor working conditions and low wages, which disproportionately affect workers of color. Furthermore, its data practices and influence over market competition have raised concerns about privacy and economic inequality.</p>
        `;
    } else if (app === 'app5') {
        popupText.innerHTML = `
            <h2>Uber</h2>
            <p>Uber has transformed the transportation industry, but it has also been involved in numerous controversies. Issues include the treatment and pay of drivers, many of whom are from marginalized communities. Additionally, its business model has sparked debates over workers' rights and the gig economy's impact on economic stability for vulnerable populations.</p>
        `;
    } else if (app === 'app6') {
        popupText.innerHTML = `
            <h2>Netflix</h2>
            <p>Netflix's global reach and content localization efforts have sparked discussions on cultural imperialism and the impact of Western media on local cultures. The platform's decisions regarding content censorship, representation, and partnerships also reflect its influence on the empowerment or continued prejudice against minority groups.</p>
        `;
    }

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();
