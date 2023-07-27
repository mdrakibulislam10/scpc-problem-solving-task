/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

function generateRandomPass(passLength) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

    let password = "";

    for (i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        const char = allChars[randomIndex];
        password += char;
    }

    return password;
};

const passLength = 8;
console.log(generateRandomPass(passLength));