package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"mux"
)

// Postman collection: https://www.getpostman.com/collections/235f946f39992098e37a

func main() {
	type Director struct {
		Firstname string `json:"firstname"`
		Lastname  string `json:"lastname"`
	}

	type Movie struct {
		ID       string    `json:"id"`
		Isbn     string    `json:"isbn"`
		Title    string    `json:"title"`
		Director *Director `json:"director"`
	}

	var movies []Movie

	getMovies := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(movies)
	}

	deleteMovie := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		params := mux.Vars(r)
		for index, item := range movies { // for-each
			if item.ID == params["id"] {
				movies = append(movies[:index], movies[index+1:]...)
				break
			}
		}
		json.NewEncoder(w).Encode(movies)
	}

	getMovie := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		params := mux.Vars(r)
		for _, item := range movies { // for-each
			if item.ID == params["id"] {
				json.NewEncoder(w).Encode(item)
				return
			}
		}
	}

	createMovie := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		var movie Movie
		_ = json.NewDecoder(r.Body).Decode(&movie)
		movie.ID = (strconv.Itoa(rand.Intn(100000000)))
		movies = append(movies, movie)
		json.NewEncoder(w).Encode(movie)
	}

	updateMovie := func(w http.ResponseWriter, r *http.Request) {
		// set json content type
		w.Header().Set("Content-Type", "application/json")
		// params
		params := mux.Vars(r)
		// loop over the movies, range
		// delete the movie with id thatr you've sent
		// add a new movie - the movie that we send in the body of postman
		for index, item := range movies { // for-each
			if item.ID == params["id"] {
				movies = append(movies[:index], movies[index+1:]...)
				var movie Movie
				_ = json.NewDecoder(r.Body).Decode(&movie)
				movie.ID = params["id"]
				movies = append(movies, movie)
				json.NewEncoder(w).Encode(movie)
				return
			}
		}
		json.NewEncoder(w).Encode(movies)
	}

	mains := func() {
		r := mux.NewRouter()

		movies = append(movies, Movie{
			ID:    "1",
			Isbn:  "438227",
			Title: "Movie One",
			Director: &Director{
				Firstname: "John",
				Lastname:  "Doe",
			},
		})
		movies = append(movies, Movie{
			ID:    "2",
			Isbn:  "45455",
			Title: "Movie Two",
			Director: &Director{
				Firstname: "Steve",
				Lastname:  "Smith",
			},
		})
		r.HandleFunc("/movies", getMovies).Methods("GET")
		r.HandleFunc("/movies/{id}", getMovie).Methods("GET")
		r.HandleFunc("/movies", createMovie).Methods("POST")
		r.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
		r.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

		fmt.Printf("Starting server at port 8080\n")
		log.Fatal(http.ListenAndServe(":8080", r))
	}
	mains()
}
