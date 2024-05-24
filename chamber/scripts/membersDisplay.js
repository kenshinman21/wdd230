function toggleView(view) {
    const container = document.getElementById('memberContainer');
    const isGridView = view === 'grid';
    container.className = isGridView ? 'grid-view' : 'list-view';

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = ''; // Clear existing content
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.className = 'member-card';
                let memberHTML = "";

                if (isGridView) {
                    const detailsId = `info${member.name.replace(/\s+/g, '')}`;
                    memberHTML = `
                        <h2>${member.name}</h2>
                        <img src="images/${member.logo}" alt="${member.alt}" loading="lazy" style="width:100px; height:auto;">
                        <div class="member-info" id="${detailsId}" style="display:none;">
                            <p><strong>Address:</strong> ${member.address}</p>
                            <p><strong>Phone:</strong> ${member.phone}</p>
                            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                            <p>${member.additionalInfo}</p>
                        </div>
                        <a href="#" onclick="document.getElementById('${detailsId}').style.display='block'; return false;">Details</a>
                    `;
                } else {
                    memberHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                            <span>${member.name}</span>
                            <span>${member.address}</span>
                            <span>${member.phone}</span>
                            <span><a href="${member.website}" target="_blank">${member.website}</a></span>
                            <span>${member.membershipLevel}</span>
                            <span>${member.additionalInfo}</span>
                        </div>
                    `;
                }

                memberDiv.innerHTML = memberHTML;
                container.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading the member data:', error));
}

toggleView('grid');