## Intro
 
- http://whois.kisa.or.kr/kor/whois/openAPI_KeyCreProc.jsp API를 통해 IP 또는 도메인의 실제 위치를 라이브러리 입니다.

## Installation

```
npm install geoip-kr
```

## Usage

- Promise Object

```js
const geoip = require('geoip-kr');
geoip.key('APIKEY');

geoip.lookup('203.248.252.2')
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log(err);
    });

geoip.lookup('whois.co.kr')
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log(err);
    });
```

- Result Example

```json
{
  "whois": {
    "query": "203.248.252.2",
    "queryType": "IPv4",
    "registry": "KRNIC",
    "countryCode": "KR",
    "korean": {
      "ISP": {
        "netinfo": {
          "range": "203.248.128.0 - 203.248.255.255",
          "prefix": "/17",
          "servName": "BORANET",
          "orgName": "(주)엘지유플러스",
          "orgID": "ORG572",
          "addr": "서울특별시 용산구 한강대로",
          "zipCode": "04389",
          "regDate": "20030402"
        },
        "techContact": {
          "name": "IP주소 담당자",
          "phone": "+82-2-6928-3087",
          "email": "ipadm@lguplus.co.kr"
        }
      }
    },
    "english": {
      "ISP": {
        "netinfo": {
          "range": "203.248.128.0 - 203.248.255.255",
          "prefix": "/17",
          "servName": "BORANET",
          "orgName": "LG DACOM Corporation",
          "orgID": "ORG572",
          "addr": "Seoul Yongsan-gu Hangang-daero",
          "zipCode": "04389",
          "regDate": "20030402"
        },
        "techContact": {
          "name": "IP Manager",
          "phone": "+82-2-6928-3087",
          "email": "ipadm@lguplus.co.kr"
        }
      }
    }
  }
}
```