fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJdbL8zslbMpIRMxbGraDpqNk&fields=name,rating,reviews&key=AIzaSyCL35hboeab4hmkHEfZU4zomVFlsh4zLiA`)
  .then(response => response.json())
  .then(data => {
    const reviews = data.result.reviews;
    let reviewsHTML = '';
    console.log(reviews);
    
    reviews.forEach(review => {
      reviewsHTML += `
        <div class="review">
          <img class="review-img" src="${review.profile_photo_url}" alt="">
          <p class="review-author">${review.author_name}</p>
          <p>Rating: ${review.rating}</p>
          <p>${review.text}</p>
        </div>
      `;
    });
    document.querySelector('.reviews').innerHTML = reviewsHTML;
  });
