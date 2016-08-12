exports = module.exports = (()=> {
    var key = null;

    var setKey = function (__key) {
        if (__key) key = __key;
        return key;
    };

    var lookup = (ip) => {
        return new Promise((fullfill, reject)=> {
            if (!key) return reject(new Error('NOT EXISTS KEY'));
            if (!ip) return reject(new Error('NOT EXISTS IP'));

            require('http').get(`http://whois.kisa.or.kr/openapi/whois.jsp?query=${ip}&key=${key}&answer=json`, function (res) {
                var data = '';
                res.on("data", (chunk)=> {
                    data += chunk;
                });

                res.on('end', ()=> {
                    var result = JSON.parse(data);
                    fullfill(result);
                });
            }).on('error', function (err) {
                reject(JSON.stringify(err));
            });
        });
    };

    var obj = {};
    obj.key = setKey;
    obj.lookup = lookup;

    return obj;
})();