# Short Description
#### [Link To The (Production) Website!](https://ss2024-fwoc-two.vercel.app/)
The plan from Initial Movie Concept was extrpolated to include CRUD functionality, however, it was not our intention at the beginning.
This website includes two servers which are TMDB and Local. TMDB Mode has the list of trendy movies fetched from API. As to Local Mode, it uses CRUD functionallity to store list of movies in local storage.
In terms of design, we adapted our website to both Desktop and Mobile versions.
#### The main features of the Website are:
### TMDB Mode Includes:
### Homepage:
* Fetches the list of movies from TMDB API.
* Movies are decorated with Movie Cards, which have Movie Title and Rating of the particular movie.
### Details Page:
* Uses id of a certain movie to display information about it.
### Search Page:
* Finds list of movies based on what is written in the Search Bar.



### Local Mode Includes:
### Homepage:
* Displays a list of movies that we store in local storage and also filters movie list based on what we put inside a search bar.
* Movies are decorated with Movie Cards, which have Movie Title, Movie Poster, Edit Button and Delete Button.
### Details Page:
* Finds a specific movie inside a movie list based on id and displays its details.
### Create Page:
* A form for creating a new movie and putting it inside local storage.
### Edit Page:
* A form for editing an existing movie.

> **Important Side Note:** If you try to run the code that you obtained from zip file, the website will not be able to display a list of movies in TMDB Mode as you don't have access to API Key. However, you can use Local Mode without any difficulties as it doesn’t utilize any API.

### Instruction for Installation and Running the Code:
* Unzip
* npm install
* npm run dev
