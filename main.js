// ==UserScript==
// @name        iq test
// @namespace   bd
// @include     http://www.free-iqtest.net/iq.asp
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "1.Which one of the five is least like the other four?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[3].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "2.Which number should come next in the series?1 - 1 - 2 - 3 - 5 - 8 - 13"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[2].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "3.Which one of the five choices makes the best comparison?PEACH is to HCAEP as 46251 is to:"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "4.Mary, who is sixteen years old, is four times as old as her brother.  How old will Mary be when she is twice as old as her brother?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[1].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "5.Which larger shape would be made if the two sections are fitted together?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[2].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "6.Which one of the numbers does not belong in the following series?2 - 3 - 6 - 7 - 8 - 14 - 15 - 30"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[2].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "7.Which one of the five choices makes the best comparison?Finger is to Hand as Leaf is to:"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[0].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == '8.If you rearrange the letters "CIFAIPC" you would have the name of a(n):'){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[2].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "9.Choose the number that is 1/4 of 1/2 of 1/5 of 200:"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[1].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "10.John needs 13 bottles of water from the store. John can only carry 3 at a time. What's the minimum number of trips John needs to make to the store?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[3].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "11.If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely Lazzies?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[0].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == '12.Choose the word most similar to "Trustworthy":'){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == '13.If you rearrange the letters "LNGEDNA" you have the name of a(n):'){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[1].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "14.Which one of the numbers does not belong in the following series?1 - 2 - 5 - 10 - 13 - 26 - 29 - 48"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "15.Ralph likes 25 but not 24; he likes 400 but not 300; he likes 144 but not 145. Which does he like:"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "16.How many four-sided figures appear in the diagram below?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[3].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "17.What is the missing number in the sequence shown below?1 - 8 - 27 - ? - 125 - 216"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[3].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "18.Which one of the following things is the least like the others?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "19.Which of the figures below the line of drawings best completes the series?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[2].click();
  
}

if($("html body div#wrapper div#maincolumn table tbody tr td.copyQ3").text() == "20.Which of the figures below the line of drawings best completes the series?"){
  
  $("html body div#wrapper div#maincolumn table tbody tr td.copyA3 input")[4].click();
  
}

$("html body div#wrapper div#maincolumn table tbody tr td input.button3").click();
