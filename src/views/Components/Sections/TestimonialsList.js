function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('assets/img', false, /\.(jpg)$/));

const TestimonialsList = [
  {
    img: images['test1.jpg'],
    test: `Great work to bring out latest trends in technology and engineering research`,
    who: 'Aman Goyal',
    what: ' Graduate Student, UC San Diego'
  },
  {
    img: images['test2.jpg'],
    test: `    If you're into tech, you're gonna love it! Awesome email newsletter! Highly recommended to subscribe`,
    who: ' Atal Ashutosh Agrawal',
    what: 'Associate Product Manager at Castlight Health, California'
  },
  {
    img: images['test3.jpg'],
    test: `Spend just 5 minutes a week - be more tech savvy than what IIT could make you in 5 years`,
    who: 'Sarthak Mishra',
    what: 'IIT Delhi alumnus, IBM, Bangalore'
  }
];

export default TestimonialsList;
