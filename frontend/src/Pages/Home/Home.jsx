import React, { useEffect, useState } from 'react'
import './Home.css'
import { IoIosArrowDropleftCircle, IoMdArrowDropleft, IoMdArrowDroprightCircle } from "react-icons/io";
import { MdArrowCircleRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      setError(null);
      try {
        const roomResponse = await fetch("http://localhost:8080/rooms/getAll", {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        if (!roomResponse.ok) {
          throw new Error(`Network response was not ok: ${roomResponse.status}`);
        }
        const roomData = await roomResponse.json();
        
        const roomsWithImages = await Promise.all(roomData.map(async (room) => {
          try {
            const imageResponse = await fetch(`http://localhost:8080/Images/getByRoomId/${room.id}`, {
              headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              }
            });
            if (!imageResponse.ok) {
              throw new Error(`Network response was not ok: ${imageResponse.status}`);
            }
            const imageData = await imageResponse.json();
            return { ...room, images: imageData };
            
          } catch (error) {
            console.error(`Error fetching images for room ${room.id}:`, error);
            return { ...room, images: [] };
          }
        }));
        console.log(roomsWithImages)
      
        setRooms(roomsWithImages);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setError("Failed to load rooms. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const moveToView = (id) => {
    navigate(`/client/view/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='homecontainer'>
      <header>HOME</header>
      <section className="filtersection">
        <span>
          <label htmlFor="rating">FILTER BY HOTEL RATING</label>
          <select name="rating" id="rating">
            <option value="-----">-----</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
        <span>
          <label htmlFor="price">FILTER BY PRICE</label>
          <select name="price" id="price">
            <option value="----">----</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
            <option value="2500">2500</option>
            <option value="3000">3000</option>
          </select>
        </span>
        <span>
          <label htmlFor="rooms">FILTER BY NUMBER OF ROOMS</label>
          <select name="rooms" id="rooms">
            <option value="----">----</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
        <span>
          <label htmlFor="location">FILTER BY LOCATION</label>
          <select name="location" id="location">
            <option value="----">------</option>
            <option value="NAKURU">NAKURU</option>
            <option value="NAIROBI">NAIROBI</option>
            <option value="MOMBASA">MOMBASA</option>
            <option value="KISUMU">KISUMU</option>
            <option value="KERICHO">KERICHO</option>
          </select>
        </span>
      </section>
      <section className="controls">
        <IoIosArrowDropleftCircle />
        <IoMdArrowDropleft />
        <span>1/25</span>
        <IoMdArrowDroprightCircle />
        <MdArrowCircleRight />
      </section>
      <section className="datasection">
        {rooms.map((room) => (
          <span key={room.id} className='containersection'>
            {room.images && room.images.length > 0 ? (
              
              <img src={`${room.images[0].image_url}`} alt={`Room ${room.id}`} />
            ) : (
              <div>No image available</div>
            )}
            <span className="detailsection">
              <header>{room.room_name}</header>
              <h3>{room.description}</h3>
            </span>
            <span className="buttonsection">
              <button onClick={() => moveToView(room.id)}>VIEW / BOOK</button>
            </span>
          </span>
        ))}
      </section>
    </div>
  );
};

export default Home;