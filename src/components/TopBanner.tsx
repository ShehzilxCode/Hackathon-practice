import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
    return ( 
      <div className="bg-black text-white text-center py-2 text-sm flex justify-between items-center px-8">
        <div className="text-sm mx-auto">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <span className="mx-2">|</span>
            <span className="font-bold underline">ShopNow</span>
        </div>
        <div className="relative">
            <button className="flex items-center space-x-1">
                <span>English</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-white" />
            </button>
        </div>
      </div>
    );
};

export default TopBanner;
