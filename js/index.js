/* 
 ? Get all elements for the dom and introduce in a constant
*/
const btnCopy = document.getElementById(`copy-btn`);
const btnEncrypt = document.getElementById(`encrypt-btn`);
const btnDecrypt = document.getElementById(`decrypt-btn`);
const textReturned = document.getElementById(`text-returned`);
const noTextFound = document.querySelectorAll(`.to-disappear`);

/* 
 ? Function Copy text
 * * Create range for selection
 * Button event
*/

const range = document.createRange();
const selection = window.getSelection();

const textCopied = () => {
    range.selectNodeContents(textReturned);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand(`copy`);
};


btnCopy.addEventListener(`click`, textCopied)

/* 
 ? Function Encrypt
 * * Obtains value of fieldText (TextArea)
 * Insert encrypt rules in a constant. Here replace characters.
 * Return text encripted in paragraph.
*/
const encrypt = () => {

    noTextFound.forEach(element => {
        element.style.display=`none`;
    });

    const fieldText = document.querySelector(`#field-text`).value;

    const encryptText = fieldText.replace(/e/gi, `enter`).replace(/i/gi, `imes`).replace(/a/gi, `ai`).replace(/o/gi, `ober`).replace(/u/gi, `ufat`);

    document.querySelector(`#text-returned`).textContent = encryptText;
};

/* 
 ? Function Decrypt.
 * * Obtains value of fieldText (TextArea).
 * Insert decrypt rules in a constant. Here replace words.
 * Return text decrypt in paragraph.
 * Event listeners in buttons for Encrypt and Decrypt.
*/

const decrypt = () => {

    const fieldText = document.querySelector(`#field-text`).value;
 
    noTextFound.forEach(element => {
        element.style.display=`none`;
    });

    const decryptText = fieldText.replace(/enter/gi, `e`).replace(/imes/gi, `i`).replace(/ai/gi, `a`).replace(/ober/gi, `o`).replace(/ufat/gi, `ufat`)

    document.querySelector(`#text-returned`).textContent = decryptText;

};

btnEncrypt.addEventListener(`click`, encrypt);
btnDecrypt.addEventListener(`click`, decrypt);