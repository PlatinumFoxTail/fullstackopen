const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) =>
  <>
    {/* parts = object array, reduce=iterate function, sum=cumulative addition, part=item to be passed to reduce function, 0=initial value */}
    <b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
  </>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {/* parts = object array, map=iterate function, key=attribute in React to identify items, part=item to be passed to Part component */}
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course