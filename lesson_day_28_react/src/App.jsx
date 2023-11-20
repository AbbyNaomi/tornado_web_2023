import './App.css'
import ImageContainer from './components/ImageContainer'

export default function App() {
  return(
    <div className='App'>
      <h1>Image Gallery</h1>
      <ImageContainer imgSrc="pic1.webp" altText="Description of first image" containerId="image1"/>
      <ImageContainer imgSrc="pic2.jpg" altText="Description of second image" containerId="image2"/>
      <ImageContainer imgSrc="pic3.jpg" altText="Description of third image" containerId="image3"/>
    </div>
  );
}
