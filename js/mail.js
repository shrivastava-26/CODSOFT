document.getElementById('sendMessageButton').addEventListener('click', function() {
    fetch('https://example.com/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: "Hello, this is a message!"})
    })
    .then(response => response.json())
    .then(data => alert("Message sent successfully!"))
    .catch(error => console.error('Error:', error));
});


// function sendEmail() {
//     window.location.href = "mailto:someone@example.com?subject=Subject&body=Message";
// }
