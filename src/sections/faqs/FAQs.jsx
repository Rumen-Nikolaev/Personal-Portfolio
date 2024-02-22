import faqs from './data';
import FAQ from './FAQ';
import './faqs.css';

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Courses</h2>
      <p>
      Here are some courses I did. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section!
      </p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs;