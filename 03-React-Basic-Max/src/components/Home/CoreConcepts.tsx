import { CORE_CONCEPTS } from "../../../Data/data"
import SingleConcept from "./SingleConcept"

const CoreConcepts = () => {
  return (
   <section id='core-concepts'>
    <h2>Core Concepts sections Static Data loading</h2>
    <p>Static Data load form <span>data.ts</span> File</p>
   
    <ul>
      {
        CORE_CONCEPTS.map(concept=>{
          return (
            <SingleConcept key={concept.title} {...concept} />
          )
        })
      }
    </ul>
   </section>
  )
}

export default CoreConcepts