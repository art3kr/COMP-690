let selectedLanguage
selectedLanguage = prompt('Enter a language code ("es", "de", "en", "fr"');
switch(selectedLanguage) {
    case 'en':
        console.log("Hello World translated in English is: Hello World (duh)");
        break;
    case 'fr':
        console.log("Hello World translated in French is: Bonjour Le Monde");
        break;
    case 'es':
        console.log("Hello World translated in Spanish is: Hola Mundo");
        break;
    case 'de':
        console.log("Hello World translated in German is: Hallo Welt");
        break;
    default:
        console.log("Hello World translated in English is: Hello World");
}