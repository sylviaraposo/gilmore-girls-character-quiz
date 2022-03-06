$(document).ready(() => {

const characters = [
    {
        name:'rory', 
        score:0,
        winningImage:'<img src="./assets/rory.gif" alt="rory gilmore">'
    },
    {
        name:'luke', 
        score:0,
        winningImage:'<img src="./assets/luke.gif" alt="luke from gilmore girls">'
    },
    {
        name:'sookie',
        score:0,
        winningImage:'<img src="./assets/sookie.gif" alt="sookie from gilmore girls">'
    }, 
    {
        name:'emily',
        score:0,
        winningImage:'<img src="./assets/emily.gif" alt"emily from gilmore girls">'
    }, 
    {
        name:'lorelai', 
        score:0,
        winningImage:'<img src="./assets/lorelai.gif" alt="lorelai from gilmore girls">'
        
    },  
    {
        name:'paris', 
        score:0,
        winningImage:'<img src="./assets/paris.gif" alt="paris from gilmore girls">'
        
    }    
]


$('form').on('submit', (event) => {

        event.preventDefault();

        // Get the user's choice
        const answerKeys = ['firstAnswer', 'secondAnswer', 'thirdAnswer', 'fourthAnswer'];
        const answerResult = [];

        answerKeys.forEach(answerKey => {
            const currentAnswer = $(`input[name=${answerKey}]:checked`).val();
            answerResult.push(currentAnswer);
        });

        answerResult.forEach(characterResult => {
            const currentCharacter = characters.find(character => character.name === characterResult);
            currentCharacter.score++;
        });

        // Calculate the max score and find the character with the corresponding score
        // If a tie occurs the first character found will display
        const winningScore = Math.max.apply(Math, characters.map((character) => 
        { 
            return character.score; 
        }));

        const winningCharacter = characters.find(character => character.score === winningScore)

        // Set the HTML with the winning characters name
        const finalHTML = `<h1>You're most like <span id='characterName'>${winningCharacter.name}!</span></h1>`;

		$('.results').append(finalHTML, winningCharacter.winningImage);

        // Scroll to results
        $('html').animate({scrollTop:$(document).height()});

        // Display the results to the user
        $('.results').fadeIn();
        
});

$('.restartButton').on('click', (event) => {
    window.location.reload(true);
    window.scrollTo(0,0);
});

$('input[type=radio]').on('click', (event) => {
    window.scrollBy(0,300);
});

});