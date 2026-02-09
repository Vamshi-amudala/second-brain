// Quick test to verify Gemini API key
const apiKey = 'AIzaSyCMNJa4srwhPNG9yceM269XxZKXWU-fmYo';

fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        contents: [{
            parts: [{ text: 'Say hello in one word' }]
        }]
    })
})
    .then(r => r.json())
    .then(data => {
        if (data.error) {
            console.error('❌ API ERROR:', data.error.message);
            console.error('Status:', data.error.status);
        } else {
            console.log('✅ API WORKS!');
            console.log('Response:', data.candidates[0].content.parts[0].text);
        }
    })
    .catch(err => console.error('Network error:', err));
