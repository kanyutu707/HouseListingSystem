import React, { useState } from 'react'
import './NewRoom.css'

const NewRoom = () => {
    const [formData, setFormData] = useState({
        "room": "",
        "units": "",
        "description": "",
        "price": "",
        "postType": "",
        "number_of_rooms": "",
        "owner_id": sessionStorage.getItem('id')
    });

    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const roomResponse = await fetch("http://localhost:8080/rooms/create", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!roomResponse.ok) {
                throw new Error(`Room creation failed: ${roomResponse.statusText}`);
            }

            const roomData = await roomResponse.json();

            if (roomData && roomData.id) {
                const formDataWithImages = new FormData();
                images.forEach(image => {
                    formDataWithImages.append('files', image);
                });
                formDataWithImages.append('room_id', roomData.id);

                const imageResponse = await fetch("http://localhost:8080/Images/uploadMultiple", {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    },
                    body: formDataWithImages
                });

                if (!imageResponse.ok) {
                    throw new Error(`Image upload failed: ${imageResponse.statusText}`);
                }

                const imageData = await imageResponse.json();
                if (imageData) {
                    window.location.href = window.location.href;
                }
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message to user)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'image_url') {
            const files = Array.from(e.target.files);
            setImages(files);

            const previews = files.map(file => URL.createObjectURL(file));
            setPreviewImages(previews);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    return (
        <div className='newroomcontainer'>
            <form onSubmit={handleSubmit}>
                <header>ROOM FORM</header>
                <span className="input_group">
                    <label htmlFor="">ROOM NAME</label>
                    <input type="text" placeholder='NAME OF YOUR POST' onChange={handleChange} value={formData.room} name='room' required/>
                </span>
                <span className="input_group">
                    <label htmlFor="">NUMBER OF ROOMS IN A SINGLE UNIT</label>
                    <input type="number" placeholder='NUMBER OF ROOMS IN A SINGLE UNIT' min={1} onChange={handleChange} value={formData.number_of_rooms} name='number_of_rooms' required/>
                </span>
                <span className="input_group">
                    <label htmlFor="">PRICE</label>
                    <input type="number" placeholder='PRICE PER HOUR' min={0} onChange={handleChange} value={formData.price} name='price' required/>
                </span>
                <span className="input_group">
                    <label htmlFor="">NUMBER OF UNITS</label>
                    <input type="number" placeholder='NUMBER OF UNITS AVAILABLE' min={1} onChange={handleChange} value={formData.units} name='units' required/>
                </span>
                <span className="input_group">
                    <label htmlFor="">POST TYPE</label>
                    <select name="postType" id="postType" onChange={handleChange} value={formData.postType} required>
                        <option value="">---- PLEASE SELECT POST TYPE ----</option>
                        <option value="RENTAL">RENTAL</option>
                        <option value="SALE">SALE</option>
                    </select>
                </span>
                <span className="input_group">
                    <label htmlFor="">ROOM DESCRIPTION</label>
                    <textarea name="description" id='description' onChange={handleChange} value={formData.description} required></textarea>
                </span>
                <span className="image_group">
                    <label htmlFor="">IMAGE (MAXIMUM PHOTOS ALLOWED: 5)</label>
                    <input 
                        type="file" 
                        name="image_url" 
                        onChange={handleChange} 
                        multiple 
                        accept="image/*"
                        required 
                    />
                    <div className="preview">
                        {previewImages.map((preview, index) => (
                            <img 
                                key={index} 
                                src={preview} 
                                alt={`Preview ${index + 1}`} 
                                style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} 
                            />
                        ))}
                    </div>
                </span>
                <button className='roombutton'>SUBMIT</button>
            </form>
        </div>
    )
}

export default NewRoom