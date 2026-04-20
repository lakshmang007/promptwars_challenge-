document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chatWindow');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // Assistant Data & Keywords for Contextual Decision Making
    const knowledgeBase = {
        'gate b': 'I am detecting a 15% increase above normal density at Gate B. Recommending shifting the physical stanchions 5 meters to the right, and deploying Pompeian Virtual AR marker "Blue Falcon" to reroute traffic.',
        'food court': 'Virtual queues for the Food Court are currently steady. The average wait time is 4 minutes. Recommend keeping standard flow.',
        'emergency': 'INITIATING CENTURION PROTOCOL. Sending immediate audio-radio alerts to all staff in Sector 4. Opening all Colosseum Radial exits.',
        'hello': 'Hello! AegisFlow active. I can provide real-time density metrics, routing instructions, and staff coordination.',
        'help': 'You can ask me things like: "Status at Gate B?", "Route traffic away from food court", or trigger an "Emergency".'
    };

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'ai' ? 'ai-message' : 'user-message');
        msgDiv.innerHTML = `<p>${text}</p>`;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function processInput(text) {
        if (!text.trim()) return;
        
        // Show user message
        addMessage(text, 'user');
        userInput.value = '';

        // Simulate network delay and AI processing
        setTimeout(() => {
            const lowerText = text.toLowerCase();
            let responseFound = false;

            for (const [key, response] of Object.entries(knowledgeBase)) {
                if (lowerText.includes(key)) {
                    addMessage(response, 'ai');
                    responseFound = true;
                    break;
                }
            }

            if (!responseFound) {
                // Fallback smart response
                addMessage(`I have analyzed your request regarding '${text}'. Based on current venue geometry and IoT metrics, I suggest maintaining current crowd flow procedures, but I will flag this area for priority camera monitoring.`, 'ai');
            }
        }, 600); // 600ms simulated delay
    }

    sendBtn.addEventListener('click', () => {
        processInput(userInput.value);
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processInput(userInput.value);
        }
    });
});
