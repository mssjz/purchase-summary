const pricingData = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails: {
    item_name: 'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
    quantity: 1,
    img: 'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF',
    price: 102.96,
    new_price: 99.11
  },
};

export const getPricingData = (delay = 1000) => {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(pricingData)
    }, delay);
  });
};