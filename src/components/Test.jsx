function Test() {
    return <h1>Test</h1>
}

function Test1() {
    return <h1>Test1</h1>
}

export function Test2() {
    return <h1>Test2</h1>
}

const Test3 = () => <h1>Test3</h1>

const Test4 = function() {
    return <h1>Test4</h1>
}

export {Test1, Test3, Test4};
export default Test;