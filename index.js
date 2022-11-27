const addNums = (x) => {
    for (let i = 0; i <= 50; i++) {
        asyncAdd(i, x++);  
    }
}

const measureTime = (x) => {
    const t1 = performance.now();
    addNums(x);
    const t2 = performance.now();
    console.log(`t1: ${t1} t2: ${t2}`);
    console.log(t2 - t1);
}

const measureTime2 = (x) => {
    performance.mark('start');
    addNums(x);
    performance.mark('end');
    const meas = performance.measure('someName', 'start', 'end');
    meas
}

const asyncAdd = async (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 100)
    })
}

measureTime(1);
measureTime2(1);
