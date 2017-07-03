function get(key) {
    return localStorage.getItem(key);
}

function set(key,value) {
    localStorage.setItem(key, typeof value !== "string" ? JSON.stringify(value) : value);
}

function add(key,value) {
    let d = this.get(key);

    if(d !== null) {
        d = JSON.parse(d)
        d.push(value);

        this.set(key, d);
    } else {
        this.set(key,[value]);
    }
}

function remove(key) {
    localStorage.removeItem(key);
}

function removeAt(key, index) {
    let d = this.get(key);

    if(d !== null) {
        let a:object[] = JSON.parse(d);
        a.splice(index,1);
        
        console.log(a);

        this.set(key, a);
    }
}

const LocalStorage = {
    get, set, add, remove, removeAt
}

export default LocalStorage;