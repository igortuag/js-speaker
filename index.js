const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 2;
//speechSynthesis.speak(utterance)

const speak = () => {
  speechSynthesis.speak(utterance);
};
const stop = () => {
  speechSynthesis.cancel();
};

setText = (event) => {
  utterance.text = event.target.innerText;
}