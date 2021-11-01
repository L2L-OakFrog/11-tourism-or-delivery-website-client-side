import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTours = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmitTours = data => {
        axios.post('https://pure-eyrie-69335.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="adding">
            <h1>Add Tour information's here</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmitTours)}>
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

export default AddTours;