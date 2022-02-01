const texts = [
    'apps you Love much more',
    'i was wondering if after',
    'to go over everything year',
    'they say that Times heal',
    'is a song recorded by'
]
const searchFor = 'times'
const output = []
for(const text of texts){
    if(text.toLowerCase().indexOf(searchFor.toLowerCase()) !== -1){
        output.push(text)
    }
}
// console.log(output)

const outputTwo = []
for(const text of texts){
    if(text.toLowerCase().includes(searchFor.toLowerCase())){
        outputTwo.push(text)
    }
}
// console.log(outputTwo)