function subscribe() {
    const email = prompt("Please enter your email to subscribe:");
    if (email) {
        if (/^\S+@\S+\.\S+$/.test(email)) { // Very basic email validation
            alert("Thank you for subscribing!");
            // Normally here you would send 'email' to a server via AJAX or fetch.
        } else {
            alert("Please enter a valid email address.");
        }
    } else {
        alert("Subscription canceled.");
    }
}