import React, { useEffect } from 'react';
import Carousel from 'better-react-carousel';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  // Check if the user is logged in by checking localStorage
  useEffect(() => {
    if (!localStorage.getItem('name')) {
      navigate('/login');
    }
  }, []);
  return (
    <>
     <div className='gallery_Container'>
        <Carousel cols={2} rows={2} loop autoplay={3000} >
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D "  alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt='Image 6' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 7" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 8" /> 
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D "  alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt='Image 6' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 7" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 8" /> 
        </Carousel.Item><Carousel.Item>
          <img src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D "  alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt='Image 6' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 7" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 8" /> 
        </Carousel.Item><Carousel.Item>
          <img src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D "  alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"  alt="Image 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt='Image 6' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 7" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  alt="Image 8" /> 
        </Carousel.Item>
      </Carousel>
     </div>
    </>
  )
}

export default Gallery
