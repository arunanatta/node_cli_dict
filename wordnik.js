const request = require('request');
const Config = require('./config');

module.exports = {

    getDefinition: (word,cb) =>{
        definition = "Sorry, no definition found!!"
        request(Config.wordnik.BASE_URL + word + Config.wordnik.DEFINITIONS + Config.apiKey, async (error, response, body) => {
            if (body){
                body = JSON.parse(body)
                
                if(body.length >= 1){
                    definition = body[0].text
                }
                return cb(null,definition)
            }else {
                return cb(error,null)
            }
        });
    },

    getSynonym: (word,cb)=>{
        synonyms = "Sorry, no synonyms found!!"
        request(Config.wordnik.BASE_URL + word + Config.wordnik.SYNONYMS + Config.apiKey, async (error, response, body) => {
            if (body){
                body = JSON.parse(body)
                if(body.length >=1 && body[0].words.length >= 1){
                    definition = body[0].words
                }
                return cb(null,definition)
            }else {
                return cb(error,null)
            }
        });
    },

    getAntonym: (word,cb) => {
        antonyms = "Sorry, no antonyms found!!"
        request(Config.wordnik.BASE_URL + word + Config.wordnik.ANTONYMS + Config.apiKey, async (error, response, body) => {
            if (body){
                body = JSON.parse(body)

                if(body.length >= 1 && body[0].words.length >= 1){
                    antonyms = body[0].words
                }
                return cb(null,antonyms)
            }else {
                return cb(error,null)
            }
        });
    },

    getExample: (word,cb) => {
        examples = "Sorry, no examples found!!"
        request(Config.wordnik.BASE_URL + word + Config.wordnik.EXAMPLES + Config.apiKey, async (error, response, body) => {
            if (body){
                body = JSON.parse(body)
                
                if(body.examples.length >= 1){
                    examples = body.examples
                }
                return cb(null,examples)
            }else {
                return cb(error,null)
            }
        });
    },

}