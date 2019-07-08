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

Function GetCategory() As String
If (Request.PathInfo.Length = 0) Then
Return ""
Else
Return Request.PathInfo.Substring(1)
End If
End Function
