<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    function changeMoney()
    {
        var f = document.myForm.beforeValue.value;
        var tempString = "";
        var rsString = "";

        tempString = f;
        tempString = tempString.replace(/,/g,'');
        var beforeString = f*0.12; // 엔화
        beforeString=String(beforeString);
        var output = beforeString.split('.');
        var integer = output[0];
        var float = output[1];      
        var resultString;

        for(x = 1; x <= beforeString.length; x++)
        {
            if(x > 1 && (x%3) == 1)
            {
                rsString = beforeString.charAt(beforeString.length - x) + "," + integer;
            }
            else
            {
                rsString = beforeString.charAt(beforeString.length - x) + float;
            }
        }       
    
        document.myForm.afterValue.value = rsString;
    }
</script>
<body>
    <form name="myForm">
        <input type="text" name="beforeValue"><br>
        <input type="button" value="바꾸기" onclick="changeMoney();"><br>
        <input type="text" name="afterValue">
    </form>
</body>
</html>
