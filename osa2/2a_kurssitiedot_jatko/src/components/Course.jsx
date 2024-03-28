const Course = ({course}) => {
    return(
      <>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </>
    )
  }
  
  const Header = (props) => {
    //console.log("Header props:", props)
    return(
        <h2>{props.course}</h2>
    )
  }
  
  const Part = (props) => {
    //console.log("Part props:", props)
    return( <p>{props.part.name} {props.part.exercises}</p> )
  }
  
  const Total = ({parts}) => {
    console.log("Total props:", parts)
    //ilman reducea huomattavasti yksinkertaisempi, mutta tulipahan kokeiltua sekin:
    //let total=0
    //parts.map(part => total+=part.exercises)
    const exArray = parts.map( part => part.exercises )
    const total = exArray.reduce((subtotal, part) => subtotal+part)  
    return( 
      <p><strong>Number of exercises: {total}</strong></p> 
    )
  }
  
  const Content = ({parts}) => {
    //console.log("Content props:", parts)
    return(
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }
  
export default Course