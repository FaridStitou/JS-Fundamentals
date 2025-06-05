const lang = ['C', 'Python', 'JavaScript'];
for (let i = 0; i <lang.length; i++) {
  console.log(`${lang[i]} is ${lang[i] === 'C' ? 'fun' : lang[i] === 'Python' ? 'cool' : lang[i] === 'JavaScript' ? 'amazing': 'nothing'}`);
};