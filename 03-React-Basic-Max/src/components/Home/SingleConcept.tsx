type conceptProps={
    image:string;
    title:string;
    description:string
}

const SingleConcept = ({image,title,description,}:conceptProps) => {

  return (
    <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  )
}

export default SingleConcept