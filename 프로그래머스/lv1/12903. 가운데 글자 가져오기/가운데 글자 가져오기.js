function solution(s) {
    let mid = s.length / 2;
    return s.length % 2 === 0 ? s[mid-1] + s[mid] : s[Math.floor(mid)];
}