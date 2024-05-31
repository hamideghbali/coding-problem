// Given an integer K, output the respective examination mark: 1 — ―bad‖, 2 —
// ―unsatisfactory‖, 3 — ―mediocre‖, 4 — ―good‖, 5 — ―excellent‖. If K is not in
// the range 1 to 5 then output string ―error‖.
function examinationMark(K) {
    switch (K) {
        case 1:
            return "bad";
        case 2:
            return "unsatisfactory";
        case 3:
            return "mediocre";
        case 4:
            return "good";
        case 5:
            return "excellent";
        default:
            return "error";
    }
}

// Example usage:
console.log(examinationMark(3));  // Output: "mediocre"
console.log(examinationMark(5));  // Output: "excellent"
console.log(examinationMark(7));  // Output: "error"
