let words = document.getElementById("words");
        let sentences = document.getElementById("sentences");
        let characters = document.getElementById("characters");
        let paragraphs = document.getElementById("paragraph");
        let input = document.getElementById("input");

        let lettercounter = 0;
        let wordcounter = 0;
        let sentence = 0;
        let para = 0;

        input.addEventListener('input', (event) => {
            const inp = input.value;


            lettercounter = 0;
            wordcounter = 0;
            let word = false;

            for (let i = 0; i < inp.length; i++) {
                const char = inp[i];

                if (char !== ' ') {
                    lettercounter++;
                }

                if (char !== ' ' && !word) {
                    word = true;
                    wordcounter++;
                } else if (char === ' ') {
                    word = false;
                }
            }

            para = inp.split('\n').length - 1;

            sentence = inp.split(/[.!?]/).length - 1;

            characters.textContent = lettercounter;
            words.textContent = wordcounter;
            paragraphs.textContent = para;
            sentences.textContent = sentence;
        });
