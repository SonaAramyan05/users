import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { MovieDTO } from "../../types";

const Admin: React.FC = () => {
    const [formData, setFormData] = useState<MovieDTO>({
        id: "",
        title: "",
        description: "",
        year: 0,
        country: "",
        rating: 0,
        genres: [],
        actors: [],
        imageUrl: "",
        videoUrl: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]:
                name === "genres" || name === "actors"
                    ? value.split(",")
                    : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const id = uuidv4();
            const movieDataWithId = { ...formData, id };
            await axios.post("http://localhost:8000/movies", movieDataWithId);
            setFormData({
                id: "",
                title: "",
                description: "",
                year: 0,
                country: "",
                rating: 0,
                genres: [],
                actors: [],
                imageUrl: "",
                videoUrl: "",
            });
            alert("Movie added successfully!");
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Year:
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Genres: Please provide genres seperated with comma
                    <input
                        type="text"
                        name="genres"
                        value={formData.genres.join(",")}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Actors:Please provide actors seperated with comma
                    <input
                        type="text"
                        name="actors"
                        value={formData.actors.join(",")}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Video URL:
                    <input
                        type="text"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Admin;
