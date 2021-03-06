import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddRestaurants = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmitRestaurants = data => {
        console.log(data);
        axios.post('https://pure-eyrie-69335.herokuapp.com/restaurants', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }

    return (
        <div className="adding">
            <h1>Add Restaurant information's here</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmitRestaurants)}>
                <input placeholder="Name" {...register("name", { required: true })} />
                <textarea placeholder="Details" {...register("details", { required: true })} />
                <input placeholder="Cost" type="number" {...register("cost", { required: true })} />
                <input placeholder="Ratings" type="number" {...register("rating", { min: 1, max: 5 }, { required: true })} />

                <input placeholder="Image URL" {...register("img", { required: true, /* pattern: "https?://.+" */ })} />
                {errors?.name && "invalid name"}
                {errors?.details && "invalid details"}
                {errors?.cost && "invalid cost"}
                {errors?.rating && "invalid rating"}
                {errors?.img && "invalid img"}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddRestaurants;