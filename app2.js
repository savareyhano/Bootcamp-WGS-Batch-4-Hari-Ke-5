const readline = require('readline');
const { default: isEmail } = require('validator/lib/isEmail');
const { default: isMobilePhone } = require('validator/lib/isMobilePhone');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('What is your email? ', (email) => {
        rl.question('What is your phone number? ', (phone) => {
            console.log(`Your name is ${name}`);

            // jika format email sesuai maka akan menampilkan input
            // jika format email tidak sesuai maka akan menampilkan input dan memberi tahu bahwa formatnya salah
            if (isEmail(email)) {
                console.log(`Your email is ${email}`);
            } else {
                console.log(`${email}`, 'is wrong format for email!');
            }

            // jika format no hp sesuai maka akan menampilkan input
            // jika format no hp tidak sesuai maka akan menampilkan input dan memberi tahu bahwa formatnya salah
            if (isMobilePhone(phone, 'id-ID')) {
                console.log(`Your phone is ${phone}`);
            } else {
                console.log(`${phone}`, 'is wrong format for indonesian phone number!');
            }

            // terimakasih dan tutup
            console.log('Thank you!');
            rl.close();
        });
    });
});