// Demo translation data (REPLACE with your Firebase data fetching)
const translations = {
    "The history of the world is a vast and complex subject, spanning millennia and encompassing countless civilizations, cultures, and events. From the earliest human migrations out of Africa to the rise and fall of empires, the world's story is one of constant change and transformation. Ancient civilizations like Mesopotamia, Egypt, Greece, and Rome laid the foundations for much of Western culture, while in Asia, dynasties like the Han, Maurya, and Ottoman shaped the course of history.": {
        "spanish": "La historia del mundo es un tema vasto y complejo, que abarca milenios e incluye innumerables civilizaciones, culturas y eventos. Desde las primeras migraciones humanas fuera de África hasta el ascenso y la caída de los imperios, la historia del mundo es de cambio y transformación constantes. Las civilizaciones antiguas como Mesopotamia, Egipto, Grecia y Roma sentaron las bases de gran parte de la cultura occidental, mientras que en Asia, dinastías como los Han, Maurya y Otomana dieron forma al curso de la historia.",
        "french": "L'histoire du monde est un sujet vaste et complexe, couvrant des millénaires et englobant d'innombrables civilisations, cultures et événements. Des premières migrations humaines hors d'Afrique à l'ascension et la chute des empires, l'histoire du monde est celle d'un changement et d'une transformation constants. Des civilisations anciennes comme la Mésopotamie, l'Égypte, la Grèce et Rome ont jeté les bases d'une grande partie de la culture occidentale, tandis qu'en Asie, des dynasties comme les Han, Maurya et les Ottomans ont façonné le cours de l'histoire.",
        "german": "Die Geschichte der Welt ist ein riesiges und komplexes Thema, das Jahrtausende umspannt und unzählige Zivilisationen, Kulturen und Ereignisse umfasst. Von den frühesten menschlichen Migrationen aus Afrika bis zum Aufstieg und Fall von Imperien ist die Geschichte der Welt von ständigem Wandel und Transformation geprägt. Antike Zivilisationen wie Mesopotamien, Ägypten, Griechenland und Rom legten den Grundstein für einen Großteil der westlichen Kultur, während in Asien Dynastien wie die Han, Maurya und Osmanen den Lauf der Geschichte prägten."
    },
    "The Middle Ages saw the rise of feudalism in Europe and the spread of Islam across the Middle East and North Africa. The Renaissance brought about a renewed interest in art, science, and learning, while the Age of Exploration led to European colonization of the Americas and other parts of the world.": {
        "spanish": "La Edad Media vio el surgimiento del feudalismo en Europa y la expansión del Islam por todo el Medio Oriente y el norte de África. El Renacimiento trajo consigo un renovado interés por el arte, la ciencia y el aprendizaje, mientras que la Era de la Exploración condujo a la colonización europea de América y otras partes del mundo.",
        "french": "Le Moyen Âge a vu la montée de la féodalité en Europe et la propagation de l'islam à travers le Moyen-Orient et l'Afrique du Nord. La Renaissance a apporté un regain d'intérêt pour l'art, la science et l'apprentissage, tandis que l'ère de l'exploration a conduit à la colonisation européenne des Amériques et d'autres parties du monde.",
        "german": "Das Mittelalter sah den Aufstieg des Feudalismus in Europa und die Ausbreitung des Islam im Nahen Osten und Nordafrika. Die Renaissance brachte ein erneuertes Interesse an Kunst, Wissenschaft und Bildung mit sich, während das Zeitalter der Erkundung zur europäischen Kolonialisierung Amerikas und anderer Teile der Welt führte."
    },
    "The Industrial Revolution transformed societies and economies, leading to new technologies, urbanization, and social changes. The 20th century was marked by two world wars, the rise of communism and fascism, the Cold War, and the struggle for civil rights and decolonization.": {
        "spanish": "La Revolución Industrial transformó las sociedades y las economías, dando lugar a nuevas tecnologías, urbanización y cambios sociales. El siglo XX estuvo marcado por dos guerras mundiales, el auge del comunismo y el fascismo, la Guerra Fría y la lucha por los derechos civiles y la descolonización.",
        "french": "La révolution industrielle a transformé les sociétés et les économies, conduisant à de nouvelles technologies, à l'urbanisation et à des changements sociaux. Le 20e siècle a été marqué par deux guerres mondiales, la montée du communisme et du fascisme, la guerre froide et la lutte pour les droits civils et la décolonisation.",
        "german": "Die industrielle Revolution veränderte Gesellschaften und Volkswirtschaften und führte zu neuen Technologien, Urbanisierung und sozialen Veränderungen. Das 20. Jahrhundert war geprägt von zwei Weltkriegen, dem Aufstieg von Kommunismus und Faschismus, dem Kalten Krieg und dem Kampf um Bürgerrechte und Entkolonialisierung."
    }
};

const availableLanguages = Object.keys(translations["Hello"]);

let currentEnglishText = "";
let currentTargetLanguage = "";
let englishTextMatched = false;

const englishTextElement = document.getElementById("englishText");
const correctEnglishTextElement = document.getElementById("correctEnglishText");
const typedEnglishTextElement = document.getElementById("typedEnglishText");
const englishTypingError = document.getElementById("englishTypingError");
const randomTargetLanguageElement = document.getElementById("randomTargetLanguage");
const targetLanguageDropdown = document.getElementById("targetLanguage");
const translatedTextOutput = document.getElementById("translatedText");
const checkEnglishBtn = document.getElementById("checkEnglishBtn");
const translateBtn = document.getElementById("translateBtn");
const saveTranslationBtn = document.getElementById("saveTranslationBtn");
const translationError = document.getElementById("translationError");
const languageError = document.getElementById("languageError");
const todayTranslationsElement = document.querySelector(".stats-list .stat-item:nth-child(1) .stat-value");
const totalTranslationsElement = document.querySelector(".stats-list .stat-item:nth-child(2) .stat-value");
const submitButton = document.querySelector(".submit-btn");
const translateToRow = document.getElementById("translateToRow");
const translatedTextRow = document.getElementById("translatedTextRow");

let todayTranslationCount = 0;
let totalTranslationCount = 0;
let translationCompleted = false;

/**
 * Returns a random text about world history, approximately 100 words.
 * @returns {string}
 */
function generateHistoryText() {
    const historyTexts = [
        "The history of the world is a vast and complex subject, spanning millennia and encompassing countless civilizations, cultures, and events. From the earliest human migrations out of Africa to the rise and fall of empires, the world's story is one of constant change and transformation. Ancient civilizations like Mesopotamia, Egypt, Greece, and Rome laid the foundations for much of Western culture, while in Asia, dynasties like the Han, Maurya, and Ottoman shaped the course of history.",
        "The Middle Ages saw the rise of feudalism in Europe and the spread of Islam across the Middle East and North Africa. The Renaissance brought about a renewed interest in art, science, and learning, while the Age of Exploration led to European colonization of the Americas and other parts of the world.",
        "The Industrial Revolution transformed societies and economies, leading to new technologies, urbanization, and social changes. The 20th century was marked by two world wars, the rise of communism and fascism, the Cold War, and the struggle for civil rights and decolonization."
    ];
    return historyTexts[Math.floor(Math.random() * historyTexts.length)];
}


/**
 * Loads a new English text for the user to type.
 * - Fetches a random English text from the translations object.
 * - Selects a random target language.
 * - Updates the UI with the new text and language.
 * - Resets input fields, error messages, and button states.
 */
function loadNewText() {
    currentEnglishText = generateHistoryText();
    currentTargetLanguage = availableLanguages[Math.floor(Math.random() * availableLanguages.length)];

    englishTextElement.value = currentEnglishText;
    correctEnglishTextElement.textContent = currentEnglishText;
    randomTargetLanguageElement.textContent = currentTargetLanguage;
    typedEnglishTextElement.value = "";
    translatedTextOutput.value = "";
    englishTypingError.style.display = "none";
    translationError.style.display = "none";
    languageError.style.display = "none";
    translateBtn.classList.add("hidden");
    saveTranslationBtn.classList.add("hidden");
    targetLanguageDropdown.value = "";
    translateToRow.classList.add("hidden");
    translatedTextRow.classList.add("hidden");
    englishTextMatched = false;
    translationCompleted = false;
    submitButton.disabled = true;
    submitButton.textContent = "Submit";
}



/**
* Event listener for the "Check English" button.
* - Validates if the user has correctly typed the displayed English text.
* - If correct, reveals the translation section and shows the Translate button.
* - If incorrect, displays an error message.
*/
checkEnglishBtn.addEventListener("click", function () {
    if (typedEnglishTextElement.value.trim() === currentEnglishText) {
        englishTypingError.style.display = "none";
        translateToRow.classList.remove("hidden");
        translateBtn.classList.remove("hidden");
        englishTextMatched = true;
    } else {
        englishTypingError.textContent = "Please check your English typing.";
        englishTypingError.style.display = "block";
        translateToRow.classList.add("hidden");
        translateBtn.classList.add("hidden");
        englishTextMatched = false;
    }
});

/**
* Event listener for the "Translate" button.
* - Validates that the user has correctly typed the English text.
* - Validates that the user has selected the correct target language.
* - If both are correct, retrieves the translation and displays it.
* - If either is incorrect, displays an error message.
*/
translateBtn.addEventListener("click", function () {
    if (!englishTextMatched) {
        englishTypingError.textContent = "Please check your English typing first.";
        englishTypingError.style.display = "block";
        return;
    }

    if (targetLanguageDropdown.value.toLowerCase() === currentTargetLanguage.toLowerCase()) {
        const translated = translations[currentEnglishText][currentTargetLanguage];
        if (translated) {
            translatedTextOutput.value = translated;
            translatedTextRow.classList.remove("hidden");
            saveTranslationBtn.classList.remove("hidden");
            translationError.style.display = "none";
            languageError.style.display = "none";
            translationCompleted = true;
        } else {
            translationError.textContent = "Translation not found for the selected language.";
            languageError.style.display = "none";
            translationError.style.display = "block";
            translatedTextOutput.value = "";
            saveTranslationBtn.classList.add("hidden");
            translationCompleted = false;
        }
    } else {
        languageError.textContent = "Please select the correct target language.";
        languageError.style.display = "block";
        translationError.style.display = "none";
        languageError.style.display = "block";
        translatedTextOutput.value = "";
        saveTranslationBtn.classList.add("hidden");
        translationCompleted = false;
    }
});

/**
* Event listener for the "Save" button.
* - Checks if a translation has been successfully completed.
* - If so, increments the translation count, updates the UI, and loads a new text.
* - If not, displays an error message.
*/
saveTranslationBtn.addEventListener("click", function () {
    if (translationCompleted) {
        todayTranslationCount++;
        totalTranslationCount++;
        todayTranslationsElement.textContent = todayTranslationCount;
        totalTranslationsElement.textContent = totalTranslationCount;
        alert("Translation count updated!"); // Replace with your Firebase count update logic
        loadNewText(); // Load new text after saving.
        submitButton.textContent = `Submit (${totalTranslationCount})`;
        submitButton.disabled = false;
    } else {
        alert("Please translate the text before saving.");
    }
});

// Initial load
loadNewText();
