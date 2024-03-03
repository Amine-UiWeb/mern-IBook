__login:__
* set the state with data received from the api


__logout:__
* reset user state manually, and clear jwt cookie by hitting logout endpoint 


__page reload:__

on persisting login:
* refresh the access Token and user data
* if refresh is unsuccessFull (expired refresh token), redirect user to login page
<br>

on none persisting login:
* user is technically logged out, because all data is cleared automatically


__adding book to favorites__:
* display bookmarking icon only when user is logged in


__posting a book review__:
* display all reviews for the specific book in BookDetails page 
