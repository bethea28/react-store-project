let data = {
  about: {
    business_name: 'Woody Moth',
    business_slogan: '',
    business_email: 'woodymoth@gmail.com',
    business_phone: 'phone_number'
  },
  categories: {
    classic_ties: [{name:'tie', price: 59.99},], //make 5 more product objects
    classic_bowties: [{name:'bowtie', price: 60.00}, ], //make more
    decadence_ties: [{name:'deca-tie', price: 888 },],
    decadence_bowties: [{name:'deca-bow', price: 787 },]
  },
  images: ['https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/54531800e4b08b890cfe61cb/54540ed0e4b06d59faa6066a/1414794968578/IMG_4310.JPG?format=2500w', 'https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/54531800e4b08b890cfe61cb/54541092e4b060687f8b61ae/1414795420799/IMG_4306.jpg?format=2500w']
};

data.getCategory = function() {
  return this.categories;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

export default data;