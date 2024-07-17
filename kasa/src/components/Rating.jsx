import starActive from '../assets/images/Star/star_active .png';
import starInactive from '../assets/images/Star/star_inactive .png';
import '../styles/Rating/Rating.scss'

function Rating ({rating}){
    const totalStars = 5;
    const stars =Array.from ({length: totalStars}, (_, index)=>
    index < rating ? starActive : starInactive);

    return (
        <div className='rating'>
            {stars.map((star, index)=>(
                <img key={index} src={star} alt={`${rating}/5 étoiles`} className='star'/>
            ))}
        </div>
    )
}

export default Rating;