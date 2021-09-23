import Set from './Set'

const Sets = ({sets}) => {
    return (
        <div className ='sets'>
            {sets.map((set) => (
                <h3 key={set.id}>{set.question}</h3>
            ))}
        </div>
    )
}
    
    
export default Sets