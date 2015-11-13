var habitats,
cities,
numStreets,
sequence,
titles,
mixed,
explore,
show;

// Array - verbose
habitats = new Array();
habitats.push('Canadian West Coast');
habitats.push('US Northwest');
habitats.push('Central America');
habitats.push('South America');

// Block 1: Array - verbose - integer param
cities = new Array('Toronto', 'Montreal', 'Tokyo');

// Block 2: Array - verbose - string param
numStreets = new Array('360');

// Block 3: Array - verbose - several params
sequence = new Array(0, 1, 1, 2, 3, 5, 8, 13, 21);

// Block 4: Array - literal
titles = [
'Miss',
'Ms.',
'Mrs.',
'Mr.'
];

// Block 5: Array of mixed element types
mixed = [0, 'one', 2, 'three'];
explore = function () {
 console.log(mixed);
 console.log('Mixed array: ' + mixed);
 console.log('Length: ' + mixed.length);
 console.log('Sorted: ' + mixed.sort());
 console.log('mixed[2]: ' + mixed[2]);
 console.log('mixed["2"]: ' + mixed["2"]);
 console.log('mixed["three"]: ' + mixed["three"]);
 console.log('typeof mixed: ' + (typeof mixed));
 console.log('mixed.constructor === Array: ' + (mixed.constructor === Array));
 console.log('--------------------');

 mixed[10] = 'I feel out of place here...';
 console.log('mixed[9]: ' + mixed[9]);
 console.log('mixed[10]: ' + mixed[10]);
 console.log('Length: ' + mixed.length);
 console.log(mixed);
 console.log('--------------------');

 mixed['regular property'] = 'I\'m just a regular property';
 console.log('mixed[\'regular property\']: ' + mixed['regular property']);
 console.log(mixed);
};

show = function (value) {
  console.log(value);
};