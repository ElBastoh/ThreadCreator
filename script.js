const inputText = document.getElementById('inputText');
const splitButton = document.getElementById('splitButton');
const outputTweets = document.getElementById('outputTweets');

splitButton.addEventListener('click', splitTextIntoTweets);

function splitTextIntoTweets() {
    const text = inputText.value;
    const maxLength = 280; // Maximale Länge eines Tweets

    const tweets = [];
    for (let i = 0; i < text.length; i += maxLength) {
        const tweet = text.substr(i, maxLength);
        tweets.push(tweet);
    }

    outputTweets.innerHTML = tweets.map((tweet, index) => `
        <div class="tweet-container">
            <textarea class="tweet-textarea" rows="4">${tweet}\n\n${index + 1}/${tweets.length}</textarea>
            <button class="copy-button" onclick="copyToClipboard(this)"><i class="fas fa-clipboard"></i></button>
        </div>
    `).join('');
}

function copyToClipboard(button) {
    const textarea = button.previousElementSibling;
    textarea.select();
    document.execCommand("copy");
}
