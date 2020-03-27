import oauthSign from 'oauth-sign'

const getNonce = function() {
    var word_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';

    for(var i = 0; i < 32 ; i++) {
        result += word_characters[parseInt(Math.random() * word_characters.length, 10)];
    }

    return result;
};

const generateOAuthHeader = ({method = 'POST', oauth_callback, oauth_consumer_key, oauth_consumer_secret }) => {
    const param = {
        oauth_callback,
        oauth_consumer_key,
        oauth_version: '1.0',
        oauth_timestamp: parseInt(new Date().getTime()/1000, 10),
        oauth_nonce: getNonce(),
        oauth_signature_method: 'HMAC-SHA1'
    }
    const oauth_signature = oauthSign.sign('HMAC-SHA1', method, oauth_callback, param, oauth_consumer_secret, undefined)
    const keys = Object.keys(param);
    let str = ''
    keys.forEach((key, index) => {
        const path = `${key}="${encodeURIComponent(param[key])}"`
        str += index === 0 ?  path : ',' + path
    })

    return {
        'Authorization': 'OAuth ' + str + `,oauth_signature="${oauth_signature}"`
    }
}
