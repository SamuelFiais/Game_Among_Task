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
        combinations: ['0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3'],

        
        load_audio(filename) {
            const file = `./audio/${filename}?cb=${new Date().getTime()}`
            const audio = new Audio(file)
            audio.load()
            return audio
        },
        
        load_audios() {

            if(typeof(start_reactor.audio.start) == 'object') return

            start_reactor.audio.start = start_reactor.audio.load_audio(start_reactor.audio.start)
            start_reactor.audio.complete = start_reactor.audio.load_audio(start_reactor.audio.complete)
            start_reactor.audio.fail = start_reactor.audio.load_audio(start_reactor.audio.fail)
            start_reactor.audio.combinations = start_reactor.audio.combinations.map( (audio) => start_reactor.audio.load_audio(audio))
        },
    },
    interface: {},

    load() {},
    start() {
        start_reactor.computer_combination = start_reactor.create_combination()
        start_reactor.computer_combination_position = 1
        start_reactor.player_combination = []
    },

    create_combination() {
        let new_combination = []
        for (let n = 0; n < start_reactor.combination_max_position; n++){
            const position = Math.floor((Math.random() * start_reactor.memory_max_combination) + 1)
            new_combination.push(position-1)
        }
        return new_combination

    },
};