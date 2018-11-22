var test = require('tape')
var findMatch = require('../public/main.js')

var data = ["acholi","afrikaans","albanian","amharic","arabic","ashante","assyrian","azerbaijani","azeri","bajuni","basque","behdini","belorussian","bengali","berber","bosnian","bravanese","bulgarian","burmese","cakchiquel","cambodian","cantonese","catalan","chaldean","chamorro","chao-chow","chavacano","chuukese","croatian","czech","danish","dari","dinka","diula","dutch","english","estonian","espanol","fante","farsi","finnish","flemish","french","fukienese","fula","fulani","fuzhou","gaddang","gaelic","gaelic-irish","gaelic-scottish","georgian","gorani","greek","gujarati","haitian creole","hakka","hakka-chinese","hausa","hebrew","hindi","hmong","hungarian","ibanag","icelandic","igbo","ilocano","indonesian","inuktitut","italian","jakartanese","japanese","javanese","kanjobal","karen","karenni","kashmiri","kazakh","kikuyu","kinyarwanda","kirundi","korean","kosovan","kotokoli","krio","kurdish","kurmanji","kyrgyz","lakota","laotian","latvian","lingala","lithuanian","luganda","maay","macedonian","malay","malayalam","maltese","mandarin","mandingo","mandinka","marathi","marshallese","mirpuri","mixteco","moldavan","mongolian","montenegrin","navajo","neapolitan","nepali","nigerian pidgin","norwegian","oromo","pahari","papago","papiamento","pashto","patois","pidgin english","polish","portug.creole","portuguese","pothwari","pulaar","punjabi","putian","quichua","romanian","russian","samoan","serbian","shanghainese","shona","sichuan","sicilian","sinhalese","slovak","somali","sorani","spanish","sudanese arabic","sundanese","susu","swahili","swedish","sylhetti","tagalog","taiwanese","tajik","tamil","telugu","thai","tibetan","tigre","tigrinya","toishanese","tongan","toucouleur","trique","tshiluba","turkish","ukrainian","urdu","uyghur","uzbek","vietnamese","visayan","welsh","wolof","yiddish","yoruba","yupik"]

test('testing inPut value', function(t){
    var expected = ["arabic"];
    var actual = findMatch(data, 'ar');
    t.deepEqual(actual,expected, "inPut value")
    t.end();
})

test('testing array length', function(t){
    var expected = ["acholi","afrikaans","albanian","amharic","arabic"];
    var actual = findMatch(data, 'a');
    t.deepEqual(actual,expected, "array length")
    t.end();
})

test('testing case sensitive', function(t){
    var expected = ["arabic"];
    var actual = findMatch(data, 'AR')
    t.deepEqual(actual,expected, "case sensitive")
    t.end();
})

test('testing value !== string', function(t){
    var expected = 0;
    var actual = findMatch(data, 123).length;
    t.equal(actual,expected, "value !== string")
    t.end();
}) 