document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const eligibleMembers = data.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
            shuffleArray(eligibleMembers);
            const selectedMembers = eligibleMembers.slice(0, 3); // Get three members

            selectedMembers.forEach((member, index) => {
                const memberDiv = document.getElementById(`member${index + 1}`);
                memberDiv.innerHTML = `
                    <strong>${member.name}</strong><br>
                    Membership Level: ${member.membershipLevel}<br>  <!-- Displaying membership level -->
                    Address: ${member.address}<br>
                    Phone: ${member.phone}<br>
                    Website: <a href="${member.website}" target="_blank">${member.website}</a><br>
                    ${member.additionalInfo}
                `;
            });
        })
        .catch(error => console.error('Error loading member data:', error));
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring assignment
    }
    return array;
}