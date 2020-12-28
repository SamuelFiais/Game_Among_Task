start_reactor = {
    computer_combination: [],
    player_combination: [],
    computer_combination_position: 1,
    combination_max_position: 5,
    memory_max_combination: 9,

    audio: {
        start: 'start.mp3',
        fail: 'fail.mp3',
        complete: 'complete.mp3',
        combinations: [
            '0.mp3',
            '1.mp3',
            '2.mp3',
            '3.mp3',
            '4.mp3',
            '5.mp3',
            '6.mp3',
            '7.mp3',
            '8.mp3'
        ],


        load_audio(filename) {
            const file = `./audio/${filename}?cb=${new Date().getTime()}`
            const audio = new Audio(file)
            audio.load()
            return audio
        },

        load_audios() {

            if (typeof (start_reactor.audio.start) == 'object') return

            start_reactor.audio.start = start_reactor.audio.load_audio(start_reactor.audio.start)
            start_reactor.audio.complete = start_reactor.audio.load_audio(start_reactor.audio.complete)
            start_reactor.audio.fail = start_reactor.audio.load_audio(start_reactor.audio.fail)
            start_reactor.audio.combinations = start_reactor.audio.combinations.map((audio) => start_reactor.audio.load_audio(audio))
        },
    },
    interface: {
        memory_panel: document.querySelector('.painelMemory'),
        computer_led_panel: document.querySelector('.computerLedPanel'),
        player_led_panel: document.querySelector('.playerLedPanel'),
        player_memory: document.querySelector('.playerMemory'),
        player_memory_buttons: document.getElementsByClassName('player_memory'),

        turn_led_on(index, led_panel) {
            led_panel.children(index.classList.add('ledOn'))
        },

        turn_all_leds_off() {
            const computer_led_panel = start_reactor.interface.computer_led_panel
            const player_led_panel = start_reactor.interface.player_led_panel

            for (var i = 0; i < computer_led_panel.children.length; i++) {
                computer_led_panel.children[i].classList.remove('ledOn')
                player_led_panel.children[i].classList.remove('ledOn')
            }
        },

        async start() {
            return start_reactor.audio.start.play()
        }
    },

    load() {},
    start() {
        start_reactor.computer_combination = start_reactor.create_combination()
        start_reactor.computer_combination_position = 1
        start_reactor.player_combination = []
        start_reactor.interface.start().then(() => {
            player_combination()
        })
    },

    create_combination() {
        let new_combination = []
        for (let n = 0; n < start_reactor.combination_max_position; n++) {
            const position = Math.floor((Math.random() * start_reactor.memory_max_combination) + 1)
            new_combination.push(position - 1)
        }
        return new_combination

    },
    play_combination(){
        
    }
};