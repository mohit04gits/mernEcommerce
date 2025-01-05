import ItemCarousel from './Carousel/ItemCarousel';
import Description from './Description/Description';
import Detail from './Detail/Detail';
import './Item.css';
import Related from './Related/Related';
import PropTypes from 'prop-types';

const Item = (props) => {
    return ( 
        <div className="item__container">
            <div className="detail__and__carousel__container">
                <ItemCarousel item={props.item}/>
                <Detail item={props.item}/>
            </div>
            <div className="item__description__container">
                <Description item={props.item}/>
            </div>
            <div className="related__items__container">
                <Related category={props.item.category}/>
            </div>
        </div>
     );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        // Add other properties of the item as needed
    }).isRequired,
};

 
export default Item;