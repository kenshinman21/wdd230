document.addEventListener("DOMContentLoaded", function() {
    toggleView('grid');  // Initializes the default view as grid

    // Adding an event listener to handle clicks on details links using event delegation
    document.getElementById('memberContainer').addEventListener('click', function(event) {
        if (event.target.classList.contains('details-link')) {  
            const detailsId = event.target.getAttribute('data-target');
            const detailsElement = document.getElementById(detailsId);

            // Toggle the display of details
            detailsElement.style.display = detailsElement.style.display === 'none' ? 'block' : 'none';
            event.preventDefault();  
        }
    });
});

function toggleView(view) {
    const container = document.getElementById('memberContainer');
    const isGridView = view === 'grid';
    container.className = isGridView ? 'grid-view' : 'list-view';

    // Fetching member data from a JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = ''; // Clear existing content

            // If the view is not grid, insert a header for the list view
            if (!isGridView) {
                container.innerHTML = `
                    <div class="member-header" style="display: flex; justify-content: space-between; padding: 10px 0; font-weight: bold; border-bottom: 1px solid #ccc;">
                        <span>Company Name</span>
                        <span>Address</span>
                        <span>Phone</span>
                        <span>Website</span>
                        <span>Membership Level</span>
                        <span>Additional Information</span>
                    </div>
                `;
            }

            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.className = 'member-card';
                const detailsId = `details-${member.name.replace(/\s+/g, '')}`;

                let memberHTML = isGridView ? `
                    <h2>${member.name}</h2>
                    <img src="images/${member.logo}" alt="${member.alt}" loading="lazy" style="width:100px; height:auto;">
                    <div class="member-info" id="${detailsId}" style="display:none;">
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                        <p>${member.additionalInfo}</p>
                    </div>
                    <a href="#" class="details-link" data-target="${detailsId}">Details</a>
                ` : `
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <span>${member.name}</span>
                        <span>${member.address}</span>
                        <span>${member.phone}</span>
                        <span><a href="${member.website}" target="_blank">${member.website}</a></span>
                        <span>${member.membershipLevel}</span>
                        <span>${member.additionalInfo}</span>
                    </div>
                `;
                
                memberDiv.innerHTML = memberHTML;
                container.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading the member data:', error));
}