export default function convertArrayToBinary(arr: number[]) {
    arr.reverse();
    let res = 0;

    for (let i = 0; i < 6; i++) {
        if (arr[5 - i] === 1) {
            res |= 1 << i;
        }
    }

    return res;
}

