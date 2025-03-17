// Function to load team data from JSON and populate HTML template
async function loadJSON() {
    try
    {
        const response = await fetch('https://kamc.us/team.json', {
            method: 'GET',
            mode: 'no-cors',
        });
        if(!response.ok) {
            console.log('Error occured ' + JSON.stringify(response));
        }
        const data = await response.json();
        populateTeam(data.team);
    } catch (error)
    {
        console.error('Error occured ', JSON.stringify(error));
    }
}

function populateTeam(data) {
    const container = document.querySelector('.teamcontainer');
    container.innerHTML = '';

    data.sections.forEach(section => {
        const teamHTML = `
        <div class="team-section mb-4">
            <h3>${section.category}</h3>
            <div class="row">
                ${section.members.map(member => `
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item position-relative rounded overflow-hidden">
                            <img class="img-fluid kamc-team-photo" src="${member.image}" onerror="this.onerror=null; this.src='img/Avatar.png';" alt="${member.name}" style="height:250px;width:auto;object-fit:contain;">
                            <div class="team-text bg-light text-center p-4">
                                <h5>${member.name}</h5>
                                ${member.position ? `<p class="text-primary">${member.position}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
        container.insertAdjacentHTML('beforeend', teamHTML);
    });
}
