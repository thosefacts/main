const det = Array.from(document.querySelectorAll("details"));

det.forEach((TheDetail) => {
TheDetail.addEventListener("click", () => {
det.forEach((det) => {
    if (det !== TheDetail) {
    det.removeAttribute("open");
}
});
});
});

