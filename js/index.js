

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const masterGain = audioCtx.createGain();
masterGain.connect(audioCtx.destination);
masterGain.gain.value = 1;



document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM ready");
    document.addEventListener("click", () => {
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
            console.log("resumed ctx")
        }
    }, { once: true });

    function routeToMaster(audioEl) {
        const source = audioCtx.createMediaElementSource(audioEl);
        source.connect(masterGain);
        console.log(source)
    }
    


    console.log(document.querySelector('footer button'));

    console.log("ready");

    // === FX NODES ===
    const reverb = audioCtx.createConvolver();
    const delay = audioCtx.createDelay();

    // === MIX NODES (wet / dry control) ===
    const wetGain = audioCtx.createGain();
    const dryGain = audioCtx.createGain();

    // === TWEAK VALUES ===

    // REVERB
    const REVERB_TIME = 2.5;     // seconds → room size
    const REVERB_DECAY = 2.2;    // higher = longer tail

    // DELAY
    delay.delayTime.value = 0.25; // seconds (0.2–0.4 nice)

    // MIX
    wetGain.gain.value = 0;   // FX amount (0 = dry, 1 = full wet)
    dryGain.gain.value = 1.0;   // original signal level

    // === REVERB IMPULSE ===
    const length = audioCtx.sampleRate * REVERB_TIME;
    const impulse = audioCtx.createBuffer(2, length, audioCtx.sampleRate);

    for (let c = 0; c < 2; c++) {
        const data = impulse.getChannelData(c);
        for (let i = 0; i < length; i++) {
            data[i] =
                (Math.random() * 2 - 1) *
                Math.pow(1 - i / length, REVERB_DECAY);
        }
    }

    reverb.buffer = impulse;

    // === ROUTING ===
    //
    // masterGain → dryGain → destination
    // masterGain → reverb → delay → wetGain → destination
    //

    masterGain.disconnect(); // important: reset routing

    masterGain.connect(dryGain);
    dryGain.connect(audioCtx.destination);

    masterGain.connect(reverb);
    reverb.connect(delay);
    delay.connect(wetGain);
    wetGain.connect(audioCtx.destination);



    const $audioTick = new Audio("src/tick.mp3");
    $audioTick.preload = "auto";
    routeToMaster($audioTick);

    const $audioClic = new Audio("src/clic.mp3");
    $audioClic.preload = "auto";
    routeToMaster($audioClic);

    const $audioDoor = new Audio("src/door.mp3");
    $audioDoor.preload = "auto";
    routeToMaster($audioDoor);
    let playedDoor = false;

    const $audioAmbient = new Audio("src/ambient.mp3");
    $audioAmbient.preload = "auto";
    routeToMaster($audioAmbient);
    let playedAmbient = false;

    const $audioBell = new Audio("src/bell.mp3");
    $audioBell.preload = "auto";
    routeToMaster($audioBell);
    let playedBell = false;

    const $audioChords = new Audio("src/chords.mp3");
    $audioChords.preload = "auto";
    routeToMaster($audioChords);
    let playedChords = false;

    const $audioSwitch = new Audio("src/switch.mp3");
    $audioSwitch.preload = "auto";
    routeToMaster($audioSwitch);
    let playedSwitch = false;

    const $audioSnore = new Audio("src/snore.mp3");
    $audioSnore.loop = true;
    $audioSnore.preload = "auto";
    routeToMaster($audioSnore);
    let playedSnore = false;

    const $audioNoise = new Audio("src/noise.mp3");
    $audioNoise.preload = "auto";
    routeToMaster($audioNoise);
    let playedNoise = false;

    const $audioRiser = new Audio("src/riser.mp3");
    $audioRiser.preload = "auto";
    routeToMaster($audioRiser);
    let playedRiser = false;

    const $audioPas1 = new Audio("src/pas1.mp3");
    $audioPas1.preload = "auto";
    routeToMaster($audioPas1);
    let playedPas1 = false;

    const $audioPas3 = new Audio("src/pas3.mp3");
    $audioPas3.preload = "auto";
    routeToMaster($audioPas3);
    let playedPas3 = false;

    const $audioPas5 = new Audio("src/pas5.mp3");
    $audioPas5.preload = "auto";
    routeToMaster($audioPas5);
    let playedPas5 = false;

    const $audioPas7 = new Audio("src/pas7.mp3");
    $audioPas7.preload = "auto";
    routeToMaster($audioPas7);
    let playedPas7 = false;

    const $audioPas9 = new Audio("src/pas9.mp3");
    $audioPas9.preload = "auto";
    routeToMaster($audioPas9);
    let playedPas9 = false;

    const $audioPas11 = new Audio("src/pas11.mp3");
    $audioPas11.preload = "auto";
    routeToMaster($audioPas11);
    let playedPas11 = false;

    const $audioPas13 = new Audio("src/pas13.mp3");
    $audioPas13.preload = "auto";
    routeToMaster($audioPas13);
    let playedPas13 = false;

    const $audioPas15 = new Audio("src/pas15.mp3");
    $audioPas15.preload = "auto";
    routeToMaster($audioPas15);
    let playedPas15 = false;

    const $audioG3 = new Audio("src/G3.mp3");
    $audioG3.preload = "auto";
    routeToMaster($audioG3);
    let playedG3 = false;

    const $audioD4 = new Audio("src/D4.mp3");
    $audioD4.preload = "auto";
    routeToMaster($audioD4);
    let playedD4 = false;

    const $audioA4 = new Audio("src/A4.mp3");
    $audioA4.preload = "auto";
    routeToMaster($audioA4);
    let playedA4 = false;

    const $audioBb4 = new Audio("src/Bb4.mp3");
    $audioBb4.preload = "auto";
    routeToMaster($audioBb4);
    let playedBb4 = false;

    const $audioD5 = new Audio("src/D5.mp3");
    $audioD5.preload = "auto";
    routeToMaster($audioD5);
    let playedD5 = false;

    const $audioF5 = new Audio("src/F5.mp3");
    $audioF5.preload = "auto";
    routeToMaster($audioF5);
    let playedF5 = false;



    let audioPlaying = false

    function audioCheck() {
        if(!$audioTick.paused ||
            !$audioClic.paused ||
            !$audioDoor.paused ||
            !$audioAmbient.paused ||
            !$audioBell.paused ||
            !$audioChords.paused ||
            !$audioSwitch.paused ||
            !$audioSnore.paused ||
            !$audioNoise.paused ||
            !$audioRiser.paused ||

            !$audioPas1.paused ||
            !$audioPas3.paused ||
            !$audioPas5.paused ||
            !$audioPas7.paused ||
            !$audioPas9.paused ||
            !$audioPas11.paused ||
            !$audioPas13.paused ||
            !$audioPas15.paused ||

            !$audioG3.paused ||
            !$audioD4.paused ||
            !$audioA4.paused ||
            !$audioBb4.paused ||
            !$audioD5.paused ||
            !$audioF5.paused) {
            audioPlaying = true
        } else {
            audioPlaying = false
        }
    }



    function handleLiAudio() {
        const currentLi = document.querySelector('.currentli');
        const currentSlide = document.querySelector('.slide.current');
        if (!currentLi) return;
        if (currentSlide.classList.contains('12')) {
            // pas1
            if (currentLi.classList.contains('2')) {
                if ($audioPas1.paused && !playedPas1) {
                    console.log("PLAY → $audioPas1 (pas1)");
                    $audioPas1.play();
                    playedPas1 = true;
                }
            }
            if (currentLi.classList.contains('4')) {
                if (playedPas1) {
                    console.log("STOP → $audioPas1 (pas1)");
                    $audioPas1.pause();
                    $audioPas1.currentTime = 0;
                }
            }

            // pas3
            if (currentLi.classList.contains('4')) {
                if ($audioPas3.paused && !playedPas3) {
                    console.log("PLAY → $audioPas3 (pas3)");
                    $audioPas3.play();
                    playedPas3 = true;
                }
            }
            if (currentLi.classList.contains('6')) {
                if (playedPas3) {
                    console.log("STOP → $audioPas3 (pas3)");
                    $audioPas3.pause();
                    $audioPas3.currentTime = 0;
                }
            }

            // pas5
            if (currentLi.classList.contains('6')) {
                if ($audioPas5.paused && !playedPas5) {
                    console.log("PLAY → $audioPas5 (pas5)");
                    $audioPas5.play();
                    playedPas5 = true;
                }
            }
            if (currentLi.classList.contains('8')) {
                if (playedPas5) {
                    console.log("STOP → $audioPas5 (pas5)");
                    $audioPas5.pause();
                    $audioPas5.currentTime = 0;
                }
            }

            // pas7
            if (currentLi.classList.contains('8')) {
                if ($audioPas7.paused && !playedPas7) {
                    console.log("PLAY → $audioPas7 (pas7)");
                    $audioPas7.play();
                    playedPas7 = true;
                }
            }
            if (currentLi.classList.contains('10')) {
                if (playedPas7) {
                    console.log("STOP → $audioPas7 (pas7)");
                    $audioPas7.pause();
                    $audioPas7.currentTime = 0;
                }
            }

            // pas9
            if (currentLi.classList.contains('10')) {
                if ($audioPas9.paused && !playedPas9) {
                    console.log("PLAY → $audioPas9 (pas9)");
                    $audioPas9.play();
                    playedPas9 = true;
                }
            }
            if (currentLi.classList.contains('12')) {
                if (playedPas9) {
                    console.log("STOP → $audioPas9 (pas9)");
                    $audioPas9.pause();
                    $audioPas9.currentTime = 0;
                }
            }

            // pas11
            if (currentLi.classList.contains('12')) {
                if ($audioPas11.paused && !playedPas11) {
                    console.log("PLAY → $audioPas11 (pas11)");
                    $audioPas11.play();
                    playedPas11 = true;
                }
            }
            if (currentLi.classList.contains('14')) {
                if (playedPas11) {
                    console.log("STOP → $audioPas11 (pas11)");
                    $audioPas11.pause();
                    $audioPas11.currentTime = 0;
                }
            }

            // pas13
            if (currentLi.classList.contains('14')) {
                if ($audioPas13.paused && !playedPas13) {
                    console.log("PLAY → $audioPas13 (pas13)");
                    $audioPas13.play();
                    playedPas13 = true;
                }
            }
            if (currentLi.classList.contains('15')) {
                if (playedPas13) {
                    console.log("STOP → $audioPas13 (pas13)");
                    $audioPas13.pause();
                    $audioPas13.currentTime = 0;
                }
            }

            // pas15
            if (currentLi.classList.contains('15')) {
                if ($audioPas15.paused && !playedPas15) {
                    console.log("PLAY → $audioPas15 (pas15)");
                    $audioPas15.play();
                    playedPas15 = true;
                }
            }
            
        }
        if (currentSlide.classList.contains('hz')) {
            // G3
            if (currentLi.classList.contains('1')) {
                if ($audioG3.paused && !playedG3) {
                    console.log("PLAY → $audioG3 (G3)");
                    $audioG3.play();
                    playedG3 = true;
                    wetGain.gain.value = 1.3;

                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedG3) {
                    console.log("STOP → $audioG3 (G3)");
                    $audioG3.pause();
                    $audioG3.currentTime = 0;
                    
                }
            }
            // D4
            if (currentLi.classList.contains('2')) {
                if ($audioD4.paused && !playedD4) {
                    console.log("PLAY → $audioD4 (D4)");
                    $audioD4.play();
                    playedD4 = true;
                    wetGain.gain.value = 1.6;
                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedD4) {
                    console.log("STOP → $audioD4 (D4)");
                    $audioD4.pause();
                    $audioD4.currentTime = 0;
                }
            }
            // A4
            if (currentLi.classList.contains('3')) {
                if ($audioA4.paused && !playedA4) {
                    console.log("PLAY → $audioA4 (A4)");
                    $audioA4.play();
                    playedA4 = true;
                    wetGain.gain.value = 2;
                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedA4) {
                    console.log("STOP → $audioA4 (A4)");
                    $audioA4.pause();
                    $audioA4.currentTime = 0;
                }
            }
            // Bb4
            if (currentLi.classList.contains('4')) {
                if ($audioBb4.paused && !playedBb4) {
                    console.log("PLAY → $audioBb4 (Bb4)");
                    $audioBb4.play();
                    playedBb4 = true;
                    wetGain.gain.value = 2.3;
                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedBb4) {
                    console.log("STOP → $audioBb4 (Bb4)");
                    $audioBb4.pause();
                    $audioBb4.currentTime = 0;
                }
            }
            // D5
            if (currentLi.classList.contains('5')) {
                if ($audioD5.paused && !playedD5) {
                    console.log("PLAY → $audioD5 (D5)");
                    $audioD5.play();
                    playedD5 = true;
                    wetGain.gain.value = 2.6;
                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedD5) {
                    console.log("STOP → $audioD5 (D5)");
                    $audioD5.pause();
                    $audioD5.currentTime = 0;
                }
            }
            // F5
            if (currentLi.classList.contains('6')) {
                if ($audioF5.paused && !playedF5) {
                    console.log("PLAY → $audioF5 (F5)");
                    $audioF5.play();
                    playedF5 = true;
                    wetGain.gain.value = 3;
                }
            }
            if (currentLi.classList.contains('7')) {
                if (playedF5) {
                    console.log("STOP → $audioF5 (F5)");
                    $audioF5.pause();
                    $audioF5.currentTime = 0;
                }
            }
            if (currentLi.classList.contains('8')) {  
                wetGain.gain.value = 0;  
            }

        }
    }
    function handleSlideAudio() {
        const currentSlide = document.querySelector('.slide.current');
        if (!currentSlide) return;

        // verb
        if (currentSlide.classList.contains('5')) {
            // REVERB     

            // DELAY

            // MIX
            wetGain.gain.value = 1;   // FX amount (0 = dry, 1 = full wet)
            dryGain.gain.value = 1.0;   // original signal level
        }
        if (currentSlide.classList.contains('6') || currentSlide.classList.contains('7') || currentSlide.classList.contains('8')) {
            // REVERB

            // DELAY

            // MIX
            wetGain.gain.value = 1;   // FX amount (0 = dry, 1 = full wet)
            dryGain.gain.value = 1.0;   // original signal level
        }
        if (currentSlide.classList.contains('9')) {
            // REVERB

            // DELAY

            // MIX
            wetGain.gain.value = 1;   // FX amount (0 = dry, 1 = full wet)
            dryGain.gain.value = 1.0;   // original signal level
        }
        if (currentSlide.classList.contains('10')) {
            // REVERB

            // DELAY

            // MIX
            wetGain.gain.value = 2;   // FX amount (0 = dry, 1 = full wet)
            dryGain.gain.value = 1.0;   // original signal level
        }
        if (currentSlide.classList.contains('11')) {
            // REVERB

            // DELAY

            // MIX
            wetGain.gain.value = 0;   // FX amount (0 = dry, 1 = full wet)
            dryGain.gain.value = 1.0;   // original signal level
        }
        
        // noise
        if (currentSlide.classList.contains('1')) {
            if ($audioNoise.paused && !playedNoise) {
                $audioNoise.play();
                playedNoise = true;
            }
        }
        if (currentSlide.classList.contains('3')) {
            if (!$audioNoise.paused) {
                $audioNoise.pause();
                $audioNoise.currentTime = 0;
            }
        }
        // door
        if (currentSlide.classList.contains('2')) {
            if ($audioDoor.paused && !playedDoor) {
                $audioDoor.play();
                playedDoor = true;
            }
        }
        if (currentSlide.classList.contains('3')) {
            if (!$audioDoor.paused) {
                $audioDoor.pause();
                $audioDoor.currentTime = 0;
            }
        }
        // ambient
        if (currentSlide.classList.contains('3')) {
            if ($audioAmbient.paused && !playedAmbient) {
                $audioAmbient.play();
                playedAmbient = true;
            }
        }
        if (currentSlide.classList.contains('5')) {
            if (!$audioAmbient.paused) {
                $audioAmbient.pause();
                $audioAmbient.currentTime = 0;
            }
        }
        // bell
        if (currentSlide.classList.contains('5')) {
            if ($audioBell.paused && !playedBell) {
                $audioBell.play();
                playedBell = true;
            }
        }
        if (currentSlide.classList.contains('6')) {
            if (!$audioBell.paused) {
                $audioBell.pause();
                $audioBell.currentTime = 0;
            }
        }
        // chords
        if (currentSlide.classList.contains('10')) {
            if ($audioChords.paused && !playedChords) {
                $audioChords.play();
                playedChords = true;
            }
        }
        if (currentSlide.classList.contains('11')) {
            if (!$audioChords.paused) {
                $audioChords.pause();
                $audioChords.currentTime = 0;
            }
        }
        // riser
        if (currentSlide.classList.contains('9')) {
            if ($audioRiser.paused && !playedRiser) {
                $audioRiser.play();
                playedRiser = true;
            }
        }
        if (currentSlide.classList.contains('10')) {
            if (!$audioRiser.paused) {
                $audioRiser.pause();
                $audioRiser.currentTime = 0;
            }
        }
        // switch
        if (currentSlide.classList.contains('13')) {
            if ($audioSwitch.paused && !playedSwitch) {
                $audioSwitch.play();
                playedSwitch = true;
            }
        }
        if (currentSlide.classList.contains('end')) {
            if (!$audioSwitch.paused) {
                $audioSwitch.pause();
                $audioSwitch.currentTime = 0;
            }
        }
        // snore
        if (currentSlide.classList.contains('end')) {
            $audioSnore.play();   
        }
        if (currentSlide.classList.contains('13')) {
            if (playedPas15) {
                console.log("STOP → $audioPas15 (pas15)");
                $audioPas15.pause();
                $audioPas15.currentTime = 0;
            }
        }
    }

    function playWhiteNoise(duration = 1, volume = 0.3) {
        const bufferSize = audioCtx.sampleRate * duration;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const src = audioCtx.createBufferSource();
        src.buffer = buffer;

        const gain = audioCtx.createGain();
        gain.gain.value = volume;

        src.connect(gain);
        gain.connect(masterGain);
        src.start();
    }

    function playBeep(freq = 440, duration = 0.2, volume = 0.5) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.frequency.value = freq;
        osc.type = "sine";

        gain.gain.value = volume;

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    const $slides = document.querySelectorAll(".slide"); // on récupère toutes les slides présentes dans le HTML
    // $slides.forEach(($slide) => { // pour chacune d'elle
    //     $slide.addEventListener("click", function () { // on détecte un clic dessus
    //         if (!$slide.classList.contains("end")) { // et si ce n'est pas la dernière slide
    //             console.log("clic slide");
    //             $slide.classList.add("viewed"); // on la fait sortir de l'écran
    //         }
    //     });
    // });
    
    function shakeLetters(li) {
        
        if (!li) return;
        const spans = li.querySelectorAll('span');
        // console.log(spans,"heyh")
        // Clear previous interval if any
        if (li._shakeInterval) clearInterval(li._shakeInterval);

        li._shakeInterval = setInterval(() => {
            spans.forEach(span => {
                const x = (Math.random() - 0.5) * 20; // ±10px
                const y = (Math.random() - 0.5) * 20; // ±10px
                span.style.transform = `translate(${x}px, ${y}px)`;
                
            });
        }, 100);
    }

    const $button = document.getElementById('next-slide-btn');
    console.log($button); // juste pour vérifier
    $button.addEventListener('click', function () {
        console.log('click button');
        
        $audioClic.pause();
        $audioClic.currentTime = 0;
        $audioClic.play();

        const currentSlide = document.querySelector(".slide.current");
        
        let cur = Number(currentSlide.dataset.curtxt);
        let max = Number(currentSlide.dataset.maxtxt);
        console.log("cur =", cur, " / max =", max);
        
        

        const items = currentSlide.querySelectorAll("li");

        if ((cur < max) && typewriterActive) {
            
            console.log("returned because tw is active while clic")
            return;
        }

        if (cur < max) {

            items[cur].classList.remove("hidden");  // show current
            items[cur].classList.add("currentli");
            const currentLi = document.querySelector('.currentli');
            // >>> TYPEWRITER START <<<  
            const li = items[cur];
            const text = li.textContent;
            startTypewriter(li, text);
            

            
            if (cur > 0) {
                items[cur - 1].classList.add("hidden"); // hide previous
                items[cur - 1].classList.remove("currentli");
            }
            
            handleLiAudio();

            if(currentLi.parentElement.parentElement.classList.contains('auto')) {
                console.log(currentLi.parentElement, currentLi.parentElement.parentElement);
                $button.classList.add("hidden");
                autoClic();
            } else {
                $button.classList.remove("hidden");
                console.log("back to manual click")
            }
            
            console.log(currentLi)
            currentSlide.dataset.curtxt = cur + 1;
            return;
        }



        const $currentSlide = document.querySelector('.slide.current');
        console.log($currentSlide);
        const $nextSlide = $currentSlide.previousElementSibling;
        console.log($nextSlide);

        
        if ($currentSlide.classList.contains('fade')) {
            $currentSlide.classList.add('viewedfade');
        } else {
            $currentSlide.classList.add("hidden"); // on la fait sortir de l'écran
        }
        $currentSlide.addEventListener('transitionend', () => {
            if ($currentSlide.classList.contains('viewedfade')) {
                $currentSlide.classList.add('hidden');
            }
        });
        $currentSlide.classList.remove('current');
        $nextSlide.classList.add('current');
        handleSlideAudio();
        if(currentSlide.classList.contains('auto')) {
            console.log(currentSlide)
            $button.classList.add("hidden")
            autoClic();
        } else {
            $button.classList.remove("hidden")
            console.log("back to manual click")
        }
        if ($nextSlide.classList.contains('end')) {
            $button.classList.add('hidden');
        }
    });


    const $anim1 = document.getElementById('anim1');
    let anim1Current = parseInt($anim1.dataset.current);
    const anim1Max = parseInt($anim1.dataset.max);
    let anim1Animation;
    anim1Animation = setInterval(() => {
        anim1Current++;

        if (anim1Current > anim1Max) {
            anim1Current = 1;
        }
        $anim1.dataset.current = anim1Current;
        $anim1.querySelector('img').src = "src/idle/frame" + anim1Current + ".png";

    }, 200);
    const $anim2BTN = document.getElementById('btn-anim2');
    const $anim2 = document.getElementById('anim2');
    let anim2Current = parseInt($anim2.dataset.current);
    const anim2Max = parseInt($anim2.dataset.max);
    $anim2BTN.addEventListener('click', function () {

        //$audio1.currentTime = 0;
        //$audio1.play();
        //$audio1.pause();

        console.log("clicvirtuel")
        anim2Current++;
        if (anim2Current > anim2Max) {
            anim2Current = 1;
        }
        $anim2.dataset.current = anim2Current;
        $anim2.querySelector('img').src = "src/talking/frame" + anim2Current + ".png";
    });

    const $anim3 = document.getElementById('anim3');
    let anim3Current = parseInt($anim3.dataset.current);
    const anim3Max = parseInt($anim3.dataset.max);
    let anim3Animation;
    anim3Animation = setInterval(() => {
        anim3Current++;

        if (anim3Current > anim3Max) {
            anim3Current = 1;
        }
        $anim3.dataset.current = anim3Current;
        $anim3.querySelector('img').src = "src/idle/frame" + anim3Current + ".png";

    }, 200);
    const $anim4BTN = document.getElementById('btn-anim4');
    const $anim4 = document.getElementById('anim4');
    let anim4Current = parseInt($anim4.dataset.current);
    const anim4Max = parseInt($anim4.dataset.max);
    $anim4BTN.addEventListener('click', function () {

        console.log("clicvirtuel");
        anim4Current++;
        if (anim4Current > anim4Max) {
            anim4Current = 1;
        }
        $anim4.dataset.current = anim4Current;
        $anim4.querySelector('img').src = "src/talking/frame" + anim4Current + ".png";
    });

    const $anim5 = document.getElementById('anim5');
    let anim5Current = parseInt($anim5.dataset.current);
    const anim5Max = parseInt($anim5.dataset.max);
    let anim5Animation;
    anim5Animation = setInterval(() => {
        anim5Current++;

        if (anim5Current > anim5Max) {
            anim5Current = 1;
        }
        $anim5.dataset.current = anim5Current;
        $anim5.querySelector('img').src = "src/idle/frame" + anim5Current + ".png";

    }, 200);
    const $anim6BTN = document.getElementById('btn-anim6');
    const $anim6 = document.getElementById('anim6');
    let anim6Current = parseInt($anim6.dataset.current);
    const anim6Max = parseInt($anim6.dataset.max);
    $anim6BTN.addEventListener('click', function () {

        console.log("clicvirtuel");
        anim6Current++;
        if (anim6Current > anim6Max) {
            anim6Current = 1;
        }
        $anim6.dataset.current = anim6Current;
        $anim6.querySelector('img').src = "src/talking/frame" + anim6Current + ".png";
    });



    // =========================
    // TYPEWRITER SYSTEM
    // =========================

    let typewriterActive = false;
    let twInterval = null;       // letters
    let twAnimInterval = null;   // virtual click anim2
    const VIRTUAL_BTN_IDS = ["btn-anim2", "btn-anim4", "btn-anim6"]; // ton bouton virtuel déjà existant

    let typewriterSpeed = 50
    
    
    function autoClic() {
        audioCheck();
        console.log(audioPlaying);
        if(!audioPlaying) {
            if(!typewriterActive) {
                $button.click();
            };
        } else {
            setTimeout(autoClic, 50);
        }
    }

    function startTypewriter(liElement, fullText) {
        if (typewriterActive) return; // avoid double start
        typewriterActive = true;
        if (liElement.classList.contains('slow')){
            typewriterSpeed = 200
        } else {
            typewriterSpeed = 50
        }
        $anim1.classList.add('hidden');
        $anim2.classList.remove('hidden');
        $anim3.classList.add('hidden');
        $anim4.classList.remove('hidden');
        $anim5.classList.add('hidden');
        $anim6.classList.remove('hidden');

        let index = 0;
        liElement.textContent = "";

        const skipHandler = () => {
            if(typewriterActive && !(index >= fullText.length)) {
                liElement.textContent = fullText;
                $button.removeEventListener('click', skipHandler);
                stopTypewriter();
                console.log("typewriter skipped");
                return;
            };
        };
        $button.addEventListener('click', skipHandler);

        // --- 1) Interval des lettres (100ms)
        twInterval = setInterval(() => {
            liElement.textContent += fullText[index];
            

            index++;

            if (index >= fullText.length) {
                stopTypewriter();
            }
        }, typewriterSpeed);

        // --- 2) Interval clic virtuel (250ms)
        // il simule un clic sur ton bouton anim2
        twAnimInterval = setInterval(() => {
            
            // stop si audio en cours
            $audioTick.pause();

            // choisir un point de départ aléatoire (entre 0 et durée totale)
            $audioTick.currentTime = Math.random() * $audioTick.duration;

            // jouer le son
            $audioTick.play();
            VIRTUAL_BTN_IDS.forEach(id => {
                const btn = document.getElementById(id);
                if (btn) btn.click(); // on déclenche anim talking
            });
        }, 150);
    }

    function stopTypewriter() {
        clearInterval(twInterval);
        clearInterval(twAnimInterval);
        typewriterActive = false;
        $anim1.classList.remove('hidden');
        $anim2.classList.add('hidden');
        $anim3.classList.remove('hidden');
        $anim4.classList.add('hidden');
        $anim5.classList.remove('hidden');
        $anim6.classList.add('hidden');
        $audioTick.pause();
    }


    


});