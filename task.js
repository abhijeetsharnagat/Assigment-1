
function randomnum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function dates() {
  const checkoutdate = randomnum(1, 15);
  const returndate = randomnum(16, 30);
  return { checkoutdate, returndate };
}


function member1(memberNumber) {
  const member = {
    name: `Member${memberNumber}`,
    books: []
  };




  const books = randomnum(10, 30);


  for (let j = 0; j < books; j++) {
    const { checkoutdate, returndate } = dates();
    member.books.push({ checkoutdate, returndate });
  }

  console.log(member);
  console.log(`Total memebers which gor genrated random: ${member.books.length}`);
  return member;

}

function averagedays(members) {
  let totaldays = 0;
  let totalbooks = 0;


  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < members[i].books.length; j++) {
      const checkoutdate = members[i].books[j].checkoutdate;
      const returndate = members[i].books[j].returndate;


      totaldays += returndate - checkoutdate;
      totalbooks++;

      const averageday = totaldays / totalbooks;


      console.log(`Average days: ${averageday}`);
    }


  }




}

const members = [];


for (let i = 1; i <= 11; i++) {
  members.push(member1(i));
}


averagedays(members);
