// async
async function f1() {
    const res = await fetch('/test.php?id=1');
    return res.text();
}

async function f2() {
    const res = await fetch('/test.php?id=2')
    return res.text();
}

async function f3() {
    const res = await fetch('/test.php?id=3')
    return res.text();
}

async function go() {
    let a = await f1();
    console.log(a);
    let b = await f2();
    console.log(b);
    let c = await f3();
    console.log(c);
}

go();

// будет всегда 1 2 3 порядок
