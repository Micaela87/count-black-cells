function solution(n, m) {
    if (Math.min(n, m) === 1) return Math.max(n, m);
    if (n === m) return n + ((n - 1) * 2);
    if (Math.max(n, m) % Math.abs(n - m) === 0) return (Math.max(n, m) * 2) - 2;
    if ((n % 2 === 0) && (m % 2 === 0)) return (Math.abs(n - m)) + Math.min(n, m) * 2;
    return (Math.abs(n - m)) + (Math.min(n, m) * 2) - 1;
}
