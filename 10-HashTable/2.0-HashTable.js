class HashTable {
  constructor(size = 52) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  // set
  // Accepts a key and a value
  // Hashes the key
  // Stores the key-value pair in the hash table array via separate chaining
  set(key, value) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, value]);
  }

  // Accepts a key
  // Hashes the key
  // Retrieves the key-value pair in the hash table
  // If the key isn't found, returns undefined
  get(key) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap[hash].length; i++) {
        if(this.keyMap[hash][i][0] === key){
            return this.keyMap[hash][i][1];
        }
    }
  }

  key(){
    const key = []
    for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                key.push(this.keyMap[i][j][0])
            }
        }
    }
    // this.keyMap.forEach(value => {
    //     if(value){
    //         value.forEach(k => {
    //             key.push(k[0])
    //         })
    //     }
    // })

    return key
  }

  value(){
    const values = []
    // for(let i = 0; i < this.keyMap.length; i++){
    //     if(this.keyMap[i]){
    //         for(let j = 0; j < this.keyMap[i].length; j++){
    //             if(!values.includes(this.keyMap[i][j][1])){
    //                 values.push(this.keyMap[i][j][1])
    //             }
    //         }
    //     }
    // }
    this.keyMap.forEach(value => {
        value.forEach(v => {
            if(!values.includes(v[1])){
                values.push(v[1])
            }
        })
    })
    return values
  }

}

const hashTable = new HashTable();

hashTable.set("azul", "#0000FF");
hashTable.set("vermelho", "#03A0FF");
hashTable.set("roxo", "#993399");
hashTable.set("verde", "#0000FF");
hashTable.set("branco", "#0000FF");
hashTable.set("rosa", "#0000FF");
hashTable.set("cinza", "#808080");
// const valor = hashTable.get("roxo");
console.log(hashTable.value());
