const Config = {
         apiKey: "3uwfeeu6wfbymne9mvdeg4hdzx7ge9kzi6zqiv0nc9wgxqt8c",
        wordnik           : {
            BASE_URL              : 'http://api.wordnik.com:80/v4/word.json/',
            DEFINITIONS           : '/definitions?limit=100&includeRelated=true&useCanonical=false&includeTags=false&api_key=',
            SYNONYMS              : '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=',
            ANTONYMS              : '/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=',
            EXAMPLES              : '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key='
          },
}
module.exports = Config;