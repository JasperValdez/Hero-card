import Hero from'./components/Hero';
import Card from'./components/Card';
import { Card_Details } from './data';
function App() {
  
  return ( 
    <>
   <section className='Sige'> 
    <Hero/>
    </section>
   
   <section className='qwe'>
    <div className='cards'>
      {Card_Details.map((item, key) =>(
        <Card name={item.title} description={item.description} imgSrc={item.imgSrc}/>
      ) )}
    </div>
   </section>
   
    </>
  );
}
export default App
