#typeform-js

typeform client for node and the browser

##Installation

clone this repo

##Usage

import (*ES6*) or require the package and set your API-key for authentication.
Every method of the library returns a promise tha will be fulfilled with
typeform.io's response.

**src** folder contain the ES6 version.
**dist** folder contains the ES5 version.

```javascript
import Typeform from 'typeform-js';

let typeform = Typeform('MY_API_SECRET');
```

##Available endpoints

###base

The base endpoint response contains information about the API.

example

```javascript
typeform.base().then( res => console.log(res));
```

###forms

####Create a form

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Title  | string | no | form title |
| Fields | array  | no | form fields |
| Extra  | object | yes | extra options |

example

```javascript
typeform.form( "My first typeform",
    [
        {
            "type": "short_text",
            "question": "What is your name?"
        }
    ],
	{ "branding": false }
);
```

####Get a form

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Id  | string | no | form id |

example:

```javascript
typeform.form.get( 'id' );
```

###images

####send an image

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Url  | string | no | url to sent |

example

```javascript
typeform.image( "http://MY_IMAGE.URL");
```

####Get an image

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Id  | string | no | image id |

example:

```javascript
typeform.image.get( 'id' );
```

###designs

####Create a design

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Colors  | object | no | design colors |
| Font | string  | no | google web font for this design |

example

```javascript
typeform.design({
        "question": "#3D3D3D",
        "button": "#4FB0AE",
        "answer": "#4FB0AE",
        "background": "#FFFFFF"
    },
    'Playfair'
);
```

####Get a design

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Id  | string | no | design id |

example:

```javascript
typeform.design.get( 'id' );
```

###urls

####Create a new url

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| form_id  | object | no | actual id |

example

```javascript
typeform.url('anId');
```

####Get a url

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Id  | string | no | url id |

example:

```javascript
typeform.url.get( 'id' );
```

###Get a url

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Old_id  | string | no | current url id |
| New_id  | string | no | new url id |

example:

```javascript
typeform.url.set( 'id', 'newSuperCoolId' );
```

#TODO

- fields Objects?