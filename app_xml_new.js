let URL = "https://notice.67v.co.kr/xml_parse.xml",
  xml_result = [];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    showResult(xhttp.responseXML);
  }
};
xhttp.open(
  "GET",
  "https://allorigins.me/get?method=raw&url=" +
    encodeURIComponent(URL) +
    "&callback=?",
  true
);
xhttp.send();

function showResult(xml) {
  // let parsedXml = $.parseXML(xml.contents);
  console.log(xml);
  // var s = new XMLSerializer();
  // var str = s.serializeToString(xml);
  // console.log(escape(str));
  // // console.log($(xml).);
  // // console.log(xml.body());
  // // $(".xml_result").append($(xml).innerHTML());

  // class Frame {
  //   constructor(number, booktitle, rentdate, returndate, state) {
  //     this.NUMBER = number;
  //     this.BOOKTITLE = booktitle;
  //     this.RENTDATE = rentdate;
  //     this.RETURNDATE = returndate;
  //     this.STATE = state;
  //   }
  // }

  // let number, booktitle, rentdate, returndate, state;

  // $("LIST").each(function(i) {
  //   console.log("i: ", i);
  //   number = document.getElementsByTagName("NO")[i].getAttribute("Value");
  //   booktitle = document
  //     .getElementsByTagName("BOOKTITLE")
  //     [i].getAttribute("Value");
  //   rentdate = document
  //     .getElementsByTagName("RENTDATE")
  //     [i].getAttribute("Value");
  //   returndate = document
  //     .getElementsByTagName("RETURNDATE")
  //     [i].getAttribute("Value");
  //   state = document.getElementsByTagName("STATE")[i].getAttribute("Value");

  //   const newFrame = new Frame(number, booktitle, rentdate, returndate, state);
  //   xml_result.push(newFrame);
  // });

  // $(".xml_result").append(JSON.stringify(xml_result));
}
