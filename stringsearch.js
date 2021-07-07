let str1 = "AJinkya Pramod Chavan";

str1.indexOf("J")
/*output-> */1
str1.search("AJinkya")
/*output-> */0
str1.search("Chavan")
/*output-> */15
str1.search("asd")
/*output-> */-1





str1.startsWith("Ajinkya")
/*output-> */ false
str1.startsWith("AJinkya")
/*output-> */ true
str1.startsWith("Pramod",8)
/*output-> */ true




str1.endsWith("Chavan")
/*output-> */ true