function checkPalindrome() {
            var inputText = document.getElementById('inputText').value.toLowerCase();
            var cleanedText = inputText.replace(/[^a-z0-9]/g, '');
            var reversedText = cleanedText.split('').reverse().join('');
            if (cleanedText === reversedText) {
                document.getElementById('result').innerHTML = '"' + inputText + '" is a palindrome.';
            } else {
                document.getElementById('result').innerHTML = '"' + inputText + '" is not a palindrome.';
            }}
