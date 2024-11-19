let filmesFavoritos = ["Inception", "The Matrix", "Interstellar"];

filmesFavoritos[0] = "The Shawshank Redemption";

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log("Filmes Favoritos de Pedro:", filmesFavoritos);
