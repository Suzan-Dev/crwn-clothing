export const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://res.cloudinary.com/cloudimagex/image/upload/v1623552823/Crwn-Clothing/Homepage/hats_n8dibu.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://res.cloudinary.com/cloudimagex/image/upload/v1623552831/Crwn-Clothing/Homepage/jackets_xi53xp.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://res.cloudinary.com/cloudimagex/image/upload/v1623553049/Crwn-Clothing/Homepage/sneakers_azozgi.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://res.cloudinary.com/cloudimagex/image/upload/v1623552841/Crwn-Clothing/Homepage/womens_u1x8ee.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://res.cloudinary.com/cloudimagex/image/upload/v1623553401/Crwn-Clothing/Homepage/mens_okoivq.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
