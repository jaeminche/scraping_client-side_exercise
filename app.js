let URL = "https://notice.67v.co.kr/html_parse.html",
  result = [];

$.getJSON(
  "http://allorigins.me/get?url=" + encodeURIComponent(URL) + "&callback=?",
  function(html) {
    let contents = html.contents;
    let $html = $(html);
    $html = $html[0].contents;
    $(".result").append($html);

    class Frame {
      constructor(number, bookname, checkout, return_date, status) {
        this.NUMBER = number;
        this.BOOKNAME = bookname;
        this.CHECKOUT = checkout;
        this.RETURN_DATE = return_date;
        this.STATUS = status;
      }
    }

    $("tr").each(function(i) {
      let number, bookname, checkout, return_date, status;
      $(this)
        .children()
        .each(function(index) {
          if (index === 0) {
            number = $(this).text();
          } else if (index === 1) {
            bookname = $(this).text();
          } else if (index === 2) {
            checkout = $(this).text();
          } else if (index === 3) {
            return_date = $(this).text();
          } else {
            status = $(this).text();
          }
        });
      const newFrame = new Frame(
        number,
        bookname,
        checkout,
        return_date,
        status
      );
      result.push(newFrame);
    });

    result.shift();
    $(".result").prepend(JSON.stringify(result));
  }
);
