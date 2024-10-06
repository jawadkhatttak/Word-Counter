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
            if (input.value === '') {
                para = 0;
                sentence = 0;
            }
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
            characters.textContent = lettercounter;
            words.textContent = wordcounter;
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                para++;
            }
            else if (event.key === '.' || event.key === '?' || event.key === ';' || event.key === '!') {
                sentence++;
            }
            sentences.textContent = sentence;
            paragraphs.textContent = para;
        });
