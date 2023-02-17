const newFormHandler = async (event) => {
    event.preventDefault();
  
    const restaurantName = document.querySelector('#name').value.trim();
    const reviewBody = document.querySelector('#rate_review').value.trim();
    const foodRating = document.querySelector('#food_rating').value.trim();
    const locationRating = document.querySelector('#location_rating').value.trim();
    const overallRating =  document.querySelector('#overall_rating').value.trim();
    
    if (restaurantName && reviewBody && foodRating && locationRating && overallRating) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ restaurantName, reviewBody, foodRating, locationRating, overallRating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };
  
  document
    .querySelector('.save-review')
    .addEventListener('submit', newFormHandler);
  