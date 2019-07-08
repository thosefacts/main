Function GetCategory() As String
If (Request.PathInfo.Length = 0) Then
Return ""
Else
Return Request.PathInfo.Substring(1)
End If
End Function
