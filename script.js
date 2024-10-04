// Get the input field, send button, chat messages container, and toggler
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const micButton = document.getElementById('mic-button');
const chatMessages = document.getElementById('chat-messages');
const toggler = document.querySelector(".chatbot-toggler");

// Add event listener to the send button
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        // Create and append the user's message
        const inputMessage = createMessage(messageText, 'input-message');
        chatMessages.appendChild(inputMessage);

        // Simulate bot response after a short delay
        setTimeout(() => {
            let responseText = '';
            switch (messageText.toLowerCase()) {
                case 'hi':
                case 'hello':
                    responseText = 'Hello there, how can I help you?';
                    break;
                case 'what are some ways to reduce carbon footprint?':
                    responseText = 'There are many ways to lower your carbon footprint!You could reduce car travel by biking or using public transport, switch to renewable energy sources, minimize meat consumption, or reduce waste by recycling and composting. Would you like specific tips for your home, travel, or diet?';
                    break;
                case 'name':
                case 'how does my diet affect my carbon footprint?':
                    responseText = "Your diet can have a significant impact! Generally, plant-based foods like fruits, vegetables, and grains have a lower carbon footprint than meat and dairy. For example, producing 1 kilogram of beef emits around 27 kg of CO2, while producing the same amount of lentils emits just 0.9 kg";
                    break;
                case 'what is a carbon footprint?':
                case 'carbon footprint':
                    responseText = "A carbon footprint is the total amount of greenhouse gases (GHGs), primarily carbon dioxide (CO₂), that are emitted directly or indirectly by human activities. This includes emissions from burning fossil fuels for electricity, heating, and transportation, as well as emissions from manufacturing and consumption of goods and services.";
                    break;
                case 'how can I calculate my carbon footprint?':
                    responseText = "A carbon footprint is the total amount of greenhouse gases (GHGs), primarily carbon dioxide (CO₂), that are emitted directly or indirectly by human activities. This includes emissions from burning fossil fuels for electricity, heating, and transportation, as well as emissions from manufacturing and consumption of goods and services.";
                    break;
                case 'what are the benefits of reducing my carbon footprint?':
                    responseText = "Reducing your carbon footprint helps combat climate change, improves air quality, saves money on energy bills, and promotes a healthier planet for future generations.";
                    break;
                case 'How do different modes of transportation impact my carbon footprint?':
                    responseText = "Different modes of transportation have varying impacts on your carbon footprint: driving a car or flying produces high emissions, while biking, walking, or using public transport generates much less CO2.";
                    break;
                        
                default:
                    responseText = "I'm sorry, This website is only prototype.";
                    break;
            }

            // Create and append the bot's response
            const outputMessage = createMessage(responseText, 'output-message');
            chatMessages.appendChild(outputMessage);

            // Scroll to the bottom of the chat messages container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        // Clear the input field
        messageInput.value = '';
    }
});

// Add event listener to the input field to send message on Enter key press
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Function to create a message element
function createMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.classList.add('message', className);
    return messageDiv;
}

// Add event listener to the toggler
toggler.addEventListener("click", () => {
    // Toggle the show-chatcontainer class on the parent element
    document.getElementById('parent').classList.toggle("show-chatcontainer");
});