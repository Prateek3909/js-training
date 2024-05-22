const firstName="Prateek";
const num=29;
console.log(firstName+num);

console.log(`hello my name is ${firstName} and my birthday date is ${num}`);

//accessing the value from the index--------------

console.log(firstName[1]);
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(3));
console.log(firstName.indexOf('P'));
console.log(firstName.substring(0,3));
console.log(firstName.slice(-7,2));
console.log(("   prateek@google.com    ").trim());

const url="https://www.heromoto%20corp.com/en-in.html"
console.log(url.replace("%20",""));
console.log(firstName.includes("P"));
const fullName="Prateek-Kumar";
console.log(fullName.split('-'));
