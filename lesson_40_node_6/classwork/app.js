let https = require('https');
let fs = require('fs');
let url = "https://amdm.ru/akkordi/avariya/132863/takaya_vot_pechal/";
let cheerio = require('cheerio');

function dowmload(url, callback){
    https.get(url, function(res){
        res.setEncoding('utf8');
        let content = '';
        res.on('data', function(chunk){
            content+=chunk;
        });

        res.on('end', function(){
            console.log("Downloaded site " + url);
            callback(null, content);
        });
    }).on('error', function(e){
        console.log("Got error " + e.message);
        callback(e);
    });
}

dowmload(url, function(err, data){
    if(err)
        return;

    createFile(__dirname, "takaya_vot_pechal.txt", parseSongPage(data), function(err){
        if(err)
            return console.log(err);
        console.log('Task finish');
    })
});

function parseSongPage(content){
    let $ = cheerio.load(content);
    return $('pre').text();
}

function createFile(pathToSave, filename, content, callback){
    let pathToFile = pathToSave + '\\' + filename;
    fs.writeFile(pathToFile, content, { encode:'utf8' }, function(err){
        if(err)
            return callback(err)
        console.log('Save file ' + pathToSave);
        callback();
    });
}