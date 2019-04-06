function checkPalindrome(inputString) {
    var len = inputString.length
    if ((len == 0) || (len == 1)) {
        return true;
    }
    else {
        if(inputString.charAt(0) == inputString.charAt(len-1)){
            return checkPalindrome(inputString.substring(1,inputString.length-1))
        }
        else {
            return false;
        }
    } 
}