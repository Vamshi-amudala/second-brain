// List available models
const apiKey = 'AIzaSyCMNJa4srwhPNG9yceM269XxZKXWU-fmYo';

fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`)
    .then(r => r.json())
    .then(data => {
        if (data.error) {
            console.error('❌ ERROR:', data.error.message);
        } else {
            console.log('✅ Available models:');
            data.models.forEach(model => {
                if (model.name.includes('gemini')) {
                    console.log(`  - ${model.name}`);
                }
            });
        }
    })
    .catch(err => console.error('Network error:', err));
