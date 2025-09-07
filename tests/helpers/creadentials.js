const POSSIBLE_CHAR = 'abcdefghijklmnopqrstuvwxyz'
const POSSIBLE_DIGIT = '0123456789'

class Credentials {
    static get() {
        let returnId = ''
        let returnCharId = ''
        for (let i = 0; i < 5; i++) {
            returnCharId += POSSIBLE_CHAR.charAt(Math.floor(Math.random() * POSSIBLE_CHAR.length))
        }
        returnId = returnCharId + POSSIBLE_DIGIT.charAt(Math.floor(Math.random() * POSSIBLE_DIGIT.length))
        const email = `aqa_${returnId}@email.com`

        return { email }
    }
} export default Credentials